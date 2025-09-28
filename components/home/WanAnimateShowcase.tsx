"use client"

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import Image from "next/image";
import CTAButton from "./CTAButton";

const WanAnimateShowcase = ({ langName, locale }: { langName?: string; locale: any }) => {
  // 创建模拟的locale对象给CTAButton使用
  const mockLocale = {
    title: "Try Wan Animate Demo"
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {locale.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {locale.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Comparison */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {locale.step1.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {locale.step1.description}
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="relative w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/show/in.jpg"
                    alt="Static character image before animation"
                    width={400}
                    height={192}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {locale.step2.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {locale.step2.description}
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                <div className="relative w-full rounded-lg overflow-hidden">
                  <video
                    src="/video/in.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Video Placeholder */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {locale.step3.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {locale.step3.description}
              </p>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <video
                  src="/video/out.mp4"
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  poster="/images/show/in.jpg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <CTAButton locale={mockLocale} langName={langName} />
              </div>
              <Button
                variant="default"
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white"
                onClick={() => {
                  navigator.clipboard.writeText('http://wan-animate.xyz/en/wan-animate-demo');
                  // 可以添加一个提示消息
                  alert('Demo链接已复制到剪贴板！');
                }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {locale.features.fastProcessing.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {locale.features.fastProcessing.description}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {locale.features.highQuality.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {locale.features.highQuality.description}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {locale.features.privacyFirst.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {locale.features.privacyFirst.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WanAnimateShowcase;
