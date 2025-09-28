import { getDictionary } from "@/lib/i18n";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wan2.2 Animate Demo - Try AI Character Animation",
  description: "Experience AI-powered animation with Wan2.2 Animate. Transform your images and videos into smooth, high-quality character animations instantly.",
  keywords: ["wan2.2 animate demo", "AI character animation", "wan animate demo", "AI video generator demo"],
};

const WanAnimateDemo = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang);

  // Fallback for missing Demo configuration
  const demoConfig = dict.Demo || {
    title: "Wan2.2 Animate Demo",
    subtitle: "Experience AI-powered animation with Wan2.2 Animate. Transform your images and videos into smooth, high-quality character animations instantly.",
    howToUse: "How to Use",
    step1: { title: "Upload Character Image", description: "Upload a character image or select one from the gallery." },
    step2: { title: "Upload Reference Video", description: "Upload a driving video or choose a motion template." },
    step3: { title: "Generate Animation", description: "Click Generate and wait for your animated video." },
    tryNow: "Try Wan2.2 Animate Now",
    tryNowDesc: "Use the interactive demo below to create your own character animations",
    loading: "Loading Wan2.2 Animate Demo...",
    tips: "Tips for Best Results",
    tip1: { title: "High-Quality Images", description: "Use high-quality images with clear facial features for better animation quality" },
    tip2: { title: "Processing Time", description: "Processing may take a few minutes depending on video length and complexity" },
    tip3: { title: "Optimal Experience", description: "For optimal experience, use a desktop browser with a stable internet connection" }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header - Compact */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {demoConfig.title}
          </h1>
          <p className="text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
            {demoConfig.subtitle}
          </p>
        </div>
      </div>

      {/* How to Use Section - Compact Above Demo */}
      <section className="py-4 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center text-slate-900 dark:text-white mb-4">
            {demoConfig.howToUse}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                {demoConfig.step1.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {demoConfig.step1.description}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-green-600 dark:text-green-300">2</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                {demoConfig.step2.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {demoConfig.step2.description}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-purple-600 dark:text-purple-300">3</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                {demoConfig.step3.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {demoConfig.step3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - Priority Position */}
      <section className="py-4 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ModelScope Embed */}
          <div className="relative w-full h-[1200px] rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <iframe
              src="https://www.modelscope.cn/studios/Wan-AI/Wan2.2-Animate"
              title="Wan2.2 Animate Demo on ModelScope"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            {demoConfig.tips}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{demoConfig.tip1.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                {demoConfig.tip1.description}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{demoConfig.tip2.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                {demoConfig.tip2.description}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{demoConfig.tip3.title}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                {demoConfig.tip3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WanAnimateDemo;
