import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import archiver from 'archiver';
import { Readable } from 'stream';

export async function GET() {
  try {
    const projectRoot = process.cwd();
    
    // Files and directories to exclude
    const excludePatterns = [
      'node_modules',
      '.next',
      '.git',
      'dist',
      'build',
      '.env',
      '.env.local',
      'bun.lock',
      'package-lock.json',
      'yarn.lock',
    ];

    // Create a zip archive
    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    // Function to check if path should be excluded
    const shouldExclude = (filePath: string): boolean => {
      return excludePatterns.some(pattern => filePath.includes(pattern));
    };

    // Function to recursively add files to archive
    const addDirectoryToArchive = async (dirPath: string, archivePath: string = '') => {
      const entries = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relativePath = path.join(archivePath, entry.name);
        
        if (shouldExclude(fullPath)) continue;
        
        if (entry.isDirectory()) {
          await addDirectoryToArchive(fullPath, relativePath);
        } else {
          const fileContent = await fs.readFile(fullPath);
          archive.append(fileContent, { name: relativePath });
        }
      }
    };

    // Add all project files
    await addDirectoryToArchive(projectRoot);
    
    // Finalize the archive
    archive.finalize();

    // Convert archive stream to buffer
    const chunks: Buffer[] = [];
    const readable = Readable.from(archive);
    
    for await (const chunk of readable) {
      chunks.push(chunk);
    }
    
    const buffer = Buffer.concat(chunks);

    // Return the zip file
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="source-code-${Date.now()}.zip"`,
      },
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export source code' },
      { status: 500 }
    );
  }
}
