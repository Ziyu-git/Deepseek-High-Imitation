import React from 'react';

const ActionCards = () => {
  return (
    <div className="mb-12 w-full max-w-3xl grid-cols-1 gap-8 md:mb-16 md:grid md:grid-cols-2">
      <a
        href="https://chat.deepseek.com"
        className="group relative mb-8 block flex-1 cursor-pointer rounded-2xl bg-white/50 px-8 pt-6 pb-7 min-w-0 backdrop-blur-sm md:mb-0"
      >
        <div className="relative z-10">
          <div className="font-chinese text-xl font-bold mb-2 text-primary">
            开始对话
          </div>
          <div className="font-chinese text-base text-slate-500 leading-normal">
            与 DeepSeek-V3.2 免费对话
            <br />
            体验全新旗舰模型
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl border border-primary opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100"></div>
      </a>

      <div className="relative flex-1 cursor-default rounded-2xl bg-white/50 px-8 pt-6 pb-7 min-w-0 backdrop-blur-sm">
        <div className="relative z-10">
          <div className="font-chinese text-xl font-bold mb-2 text-primary">
            获取手机 App
          </div>
          <div className="font-chinese text-base text-slate-500 leading-normal">
            DeepSeek 官方推出的免费 AI 助手
            <br />
            搜索写作阅读解题翻译工具
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;