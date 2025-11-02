"use client";

import { useState, useEffect } from "react";

const COOKIE_CONSENT_KEY = "deepseek_cookie_consent_status";

export default function CookieBanner() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      if (localStorage.getItem(COOKIE_CONSENT_KEY) === null) {
        setIsVisible(true);
      }
    } catch (error) {
      console.error(
        "Could not access localStorage. Defaulting to show cookie banner.",
        error,
      );
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consentType: "all" | "essential") => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, consentType);
    } catch (error) {
      console.error("Could not set item in localStorage.", error);
    }
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div className="font-chinese fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-xl bg-white p-6 shadow-2xl">
      <h2 className="text-lg font-bold text-slate-800">Cookie 设置</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        我们使用 Cookies 来提供和改进服务并进行安全防护。点击查看我们的{" "}
        <a
          href="https://cdn.deepseek.com/policies/en-US/cookies-policy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/90"
        >
          Cookie 政策
        </a>
        。你可以选择接受全部，或仅接受必要 Cookies（可能导致部分功能无法正常使用）。
      </p>

      <div
        role="button"
        tabIndex={0}
        onClick={() => handleConsent("essential")}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleConsent("essential")
        }
        className="mt-6 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
      >
        仅接受必要 Cookies
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => handleConsent("all")}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleConsent("all")
        }
        className="mt-3 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg border border-transparent bg-primary px-4 text-center text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        接受全部
      </div>
    </div>
  );
}