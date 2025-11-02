'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7ZM26.471 9L16 17.502L5.529 9H26.471ZM5 23V9.923L15.657 18.72C15.8521 18.8879 16.1479 18.8879 16.343 18.72L27 9.923V23H5Z" fill="currentColor" />
  </svg>
);

const WeChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16 3C8.82 3 3 8.273 3 14.735c0 3.738 1.884 7.106 4.904 9.255L7 29l4.69-2.23c1.378.43 2.853.665 4.382.665 7.18 0 13-5.273 13-11.697S23.18 3 16 3zm4.5 14h-9a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5zM9.545 12a1.5 1.5 0 1 1 .002-3.001A1.5 1.5 0 0 1 9.545 12zm6.91 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="32" height="32" {...props}>
    <path d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.08 10.94 15.2.8.14 1.08-.34 1.08-.76v-2.68c-4.44.96-5.38-2.14-5.38-2.14-.72-1.84-1.78-2.32-1.78-2.32-1.46-.98.1-.96.1-.96 1.6.12 2.44 1.64 2.44 1.64 1.42 2.44 3.74 1.74 4.64 1.34.14-1.04.56-1.74 1.02-2.14-3.54-.4-7.26-1.78-7.26-7.88 0-1.74.62-3.16 1.64-4.28-.16-.4-.7-2.02.16-4.22 0 0 1.34-.42 4.38 1.62a15.23 15.23 0 0 1 4 0c3.04-2.04 4.38-1.62 4.38-1.62.86 2.2.32 3.82.16 4.22 1.02 1.12 1.64 2.54 1.64 4.28 0 6.12-3.72 7.48-7.28 7.86.58.5 1.1 1.5 1.1 3.02v4.46c0 .42.28.9 1.1.76C27.42 29.08 32 23.08 32 16 32 7.16 24.84 0 16 0z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M18.8 3h4.4l-7.4 8.7 8.6 11.3h-8.8l-5.3-6.8-6.1 6.8H2.4l7.9-9.2L2 3h9.1l4.7 6.3L18.8 3zm-2.2 18.3h3.5L8.2 5H4.5l12.1 16.3z" />
  </svg>
);

const ZhihuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M24.717 26.68h-5.01v-8.084l-2.04-2.827h2.04V8.347H10.98v7.422h2.245l-4.522 7.91h4.63v5.11H3.14V5.282h23.51v21.399h-1.932z" />
  </svg>
);

const XiaohongshuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.013 4H9.987A5.992 5.992 0 0 0 4 9.987v12.026A5.992 5.992 0 0 0 9.987 28h12.026A5.992 5.992 0 0 0 28 22.013V9.987A5.992 5.992 0 0 0 22.013 4z" fill="currentColor" />
    <path d="M23.11 13.917h-2.298l-3.325 3.32v4.88h-2.983v-4.88L11.18 13.92H8.888s-.05-1.983.333-3.084c.381-1.099 1.132-2.048 2.3-2.48l5.064-1.85 5.03 1.85c1.168.432 1.918 1.381 2.3 2.48.38 1.101.194 3.084.194 3.084z" fill="#FFFFFF" />
    <path d="M11.18 13.917h3.325l-1.666-3.8-1.66 3.8zM17.495 10.117l-1.662 3.8h3.325l-1.663-3.8z" fill="currentColor" />
  </svg>
);

const researchLinks = [
  { href: 'https://github.com/deepseek-ai/DeepSeek-R1', text: 'DeepSeek R1' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-V3', text: 'DeepSeek V3' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-Coder-V2', text: 'DeepSeek Coder V2' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-VL', text: 'DeepSeek VL' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-V2', text: 'DeepSeek V2' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-Coder', text: 'DeepSeek Coder' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-Math', text: 'DeepSeek Math' },
  { href: 'https://github.com/deepseek-ai/DeepSeek-LLM', text: 'DeepSeek LLM' },
];

const productLinks = [
  { href: 'https://download.deepseek.com/app/', text: 'DeepSeek App' },
  { href: 'https://chat.deepseek.com', text: 'DeepSeek 网页版' },
  { href: 'https://platform.deepseek.com', text: '开放平台' },
  { href: 'https://api-docs.deepseek.com/quick_start/pricing', text: 'API 价格' },
  { href: 'https://status.deepseek.com', text: '服务状态' },
];

const legalLinks = [
  { href: 'https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html', text: '隐私政策' },
  { href: 'https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html', text: '用户协议' },
  { href: 'mailto:security@deepseek.com', text: '反馈安全漏洞' },
];

const joinUsLinks = [
  { href: 'https://app.mokahr.com/social-recruitment/high-flyer/140576', text: '岗位详情' },
];

const Footer = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportSource = async () => {
    setIsExporting(true);
    try {
      const response = await fetch('/api/export-source');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `source-code-${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <footer className="w-full border-t border-slate-200 pt-16 px-8 font-chinese">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 max-w-6xl mx-auto mb-16">
        <div className="flex flex-col col-span-1 sm:col-span-2 order-last xl:order-first items-start">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/680359b0-13fc-47f1-bf01-9423db3da964-deepseek-com/assets/images/logo-1.png"
            alt="DeepSeek Logo"
            width={780}
            height={165}
            className="max-w-40 mt-1 mb-6"
          />
          <div className="flex items-center space-x-6">
            <a href="mailto:service@deepseek.com" className="inline-flex text-slate-400 hover:text-[#4D6BFE] transition-colors duration-200 ease-in-out"><MailIcon /></a>
            <a href="#" className="inline-flex text-slate-400 hover:text-[#4D6BFE] transition-colors duration-200 ease-in-out"><WeChatIcon /></a>
            <a href="https://github.com/deepseek-ai" target="_blank" rel="noopener noreferrer" className="inline-flex text-slate-400 hover:text-[#4D6BFE] transition-colors duration-200 ease-in-out"><GithubIcon /></a>
            <a href="https://twitter.com/deepseek_ai" target="_blank" rel="noopener noreferrer" className="inline-flex text-slate-400 hover:text-[#4D6BFE] transition-colors duration-200 ease-in-out"><TwitterIcon /></a>
            <a href="https://www.zhihu.com/org/deepseek-75" target="_blank" rel="noopener noreferrer" className="inline-flex text-slate-400 hover:text-[#4D6BFE] transition-colors duration-200 ease-in-out"><ZhihuIcon /></a>
            <a href="https://www.xiaohongshu.com/user/profile/66821202000000001b01a005" target="_blank" rel="noopener noreferrer" className="inline-flex text-slate-400 hover:text-[#4D6BFE] transition-colors duration-200 ease-in-out"><XiaohongshuIcon /></a>
          </div>
          <div className="flex flex-col gap-3 items-start mt-6 text-sm text-slate-400">
            <div>© 2025 杭州深度求索人工智能基础技术研究有限公司 版权所有</div>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">浙ICP备2023025841号</a>
            <a href="https://tsm.miit.gov.cn/dxxzsp/xkz/xkzgl/resource/qiyesearch.jsp?num=%E6%B5%99B2-20250178&type=xuke" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">浙B2-20250178</a>
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33010502011812" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary">浙公网安备33010502011812号</a>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-start text-slate-600">
          <h3 className="font-bold text-slate-700 mb-1">研究</h3>
          {researchLinks.map((link) => (
            <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">{link.text}</a>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-start text-slate-600">
          <h3 className="font-bold text-slate-700 mb-1">产品</h3>
          {productLinks.map((link) => (
            <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">{link.text}</a>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-start text-slate-600">
          <h3 className="font-bold text-slate-700 mb-1">法务 &amp; 安全</h3>
          {legalLinks.map((link) => (
            <a key={link.text} href={link.href} target={link.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">{link.text}</a>
          ))}
        </div>

        <div className="flex flex-col gap-1 items-start text-slate-600">
          <h3 className="font-bold text-slate-700 mb-1">加入我们</h3>
          {joinUsLinks.map((link) => (
            <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">{link.text}</a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto pb-8 flex justify-center">
        <button
          onClick={handleExportSource}
          disabled={isExporting}
          className="text-xs text-slate-300 hover:text-slate-400 transition-colors duration-200 opacity-40 hover:opacity-100"
          aria-label="导出源码"
        >
          {isExporting ? '导出中...' : '源码'}
        </button>
      </div>
    </footer>
  );
};

export default Footer;