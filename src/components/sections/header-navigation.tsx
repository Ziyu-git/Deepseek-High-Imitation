import Image from "next/image";
import Link from "next/link";

/**
 * Renders the top navigation header for the DeepSeek homepage clone.
 * It consists of the logo on the left and navigation links on the right.
 * These elements are absolutely positioned and intended to be placed within
 * a relatively positioned container, matching the source website's structure.
 */
const HeaderNavigation = () => {
  return (
    <>
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/680359b0-13fc-47f1-bf01-9423db3da964-deepseek-com/assets/images/logo-1.png"
        alt="DeepSeek Logo"
        width={112}
        height={24}
        className="max-w-28 absolute top-4 left-4"
        priority
      />
      
      <div className="flex items-center gap-6 !absolute right-6 top-4 z-10">
        <div className="flex border-b border-slate-600 hover:border-brand-primary transition-colors duration-200 ease-in-out">
          <a
            href="https://platform.deepseek.com"
            className="text-sm !text-slate-600 font-semibold cursor-pointer hover:!text-brand-primary transition-colors duration-200 ease-in-out font-chinese"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span />
            API 开放平台 ↗
          </a>
        </div>
        <Link
          href="/en"
          className="text-sm !text-slate-400 cursor-pointer hover:!text-brand-primary transition-colors duration-200 ease-in-out"
        >
          <span />
          English
        </Link>
      </div>
    </>
  );
};

export default HeaderNavigation;