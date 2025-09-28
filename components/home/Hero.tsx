import CTAButton from "@/components/home/CTAButton";
import { LineText } from "@/components/LineText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = ({
  locale,
  langName,
  CTALocale,
}: {
  locale: any;
  langName: string;
  CTALocale: any;
}) => {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween", // tween spring
            // damping: 10, // if spring
            // stiffness: 50, // if spring
            // restDelta: 0.001, // if spring
          },
        }}
      > */}
      <section
        lang={langName}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center"
      >
        <h1>
          {locale.title1} <LineText>{locale.title2}</LineText> {locale.title3}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">
          {/* {siteConfig.description} */}
          {locale.description}
        </p>
      </section>
      {/* </motion.div> */}
      <div className="flex justify-center gap-4">
        <CTAButton locale={CTALocale} langName={langName} />
        <Button variant="outline">
          <Link href="https://github.com/Wan-Video/Wan2.2" className="flex items-center gap-2">
            <img
              src="/nexty-logo.png"
              alt="Wan2.2 GitHub Logo"
              className="w-4 h-4"
            />{" "}
            View on GitHub
          </Link>
        </Button>
      </div>

      {/* Demo Description and Video */}
      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {locale.demoTitle || "Experience Wan Animate Demo"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {locale.demoDescription || "Try our interactive demo to see how easy it is to create stunning AI-powered animations. Upload your image and watch it come to life with realistic movements and expressions."}
            </p>
          </div>

          {/* Right side - Video */}
          <div className="order-1 lg:order-2">
            <div className="w-full max-w-md mx-auto">
              <video
                className="w-full max-h-64 rounded-lg shadow-lg object-contain"
                controls
                preload="metadata"
                playsInline
                muted
                loop
                suppressHydrationWarning
              >
                <source src="/video/res12.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
