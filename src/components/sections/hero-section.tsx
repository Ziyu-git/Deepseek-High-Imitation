import type { FC } from 'react';

const DeepSeekLogo: FC = () => (
  <svg
    width="320"
    height="63"
    viewBox="0 0 320 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="max-w-xs mb-6"
    aria-label="DeepSeek Logo"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="31.5" x2="320" y2="31.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4A6CFE" />
        <stop offset="1" stopColor="#8A3FFC" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="url(#logo-gradient)"
      style={{
        fontSize: '60px',
        fontWeight: 700,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      deepseek
    </text>
  </svg>
);

const HeroSection: FC = () => {
  return (
    <section
      className="w-full bg-center bg-cover px-8"
      style={{
        backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/680359b0-13fc-47f1-bf01-9423db3da964-deepseek-com/assets/images/banner-background-2.webp')",
      }}
    >
      <div className="flex flex-col items-center w-full pt-24 md:pt-32 pb-20 md:pb-40">
        <div className="mb-12 md:mb-16 text-slate-400 text-center text-sm">
          <a
            href="https://mp.weixin.qq.com/s/6hKi5F_S2zQ4g6SyF0UNow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            🎉 DeepSeek-V3.2-Exp 模型发布，训练推理提效，API 同步降价，在网页端、APP 和 API 全面上线，点击查看详情。
          </a>
        </div>
        
        <DeepSeekLogo />

        <div className="font-bold text-3xl text-slate-600 mb-12 md:mb-16 text-center font-chinese">
          探索未至之境
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          <a
            href="https://chat.deepseek.com"
            className="relative rounded-2xl pt-6 pb-7 px-8 min-w-0 flex-1 bg-white/50 backdrop-blur-sm cursor-pointer"
          >
            <div className="text-xl font-bold mb-2 text-primary font-chinese">开始对话</div>
            <div className="text-slate-500 font-chinese">
              与 DeepSeek-V3.2 免费对话
              <br />
              体验全新旗舰模型
            </div>
          </a>
          <div className="relative rounded-2xl pt-6 pb-7 px-8 min-w-0 flex-1 bg-white/50 backdrop-blur-sm cursor-default">
            <div className="text-xl font-bold mb-2 text-primary font-chinese">获取手机 App</div>
            <div className="text-slate-500 font-chinese">
              DeepSeek 官方推出的免费 AI 助手
              <br />
              搜索写作阅读解题翻译工具
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;