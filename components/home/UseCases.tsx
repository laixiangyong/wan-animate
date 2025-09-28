const UseCases = ({ locale }: { locale: any }) => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {locale.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            {locale.description}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="space-y-16">
          {/* Short Video Creation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {locale.shortVideo.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {locale.shortVideo.description}
              </p>
            </div>
            <div className="relative">
              <video
                className="w-full max-h-80 rounded-lg shadow-lg object-contain"
                controls
                preload="metadata"
                playsInline
                muted
                loop
                suppressHydrationWarning
              >
                <source src="/video/resfull6.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>

          {/* Film Post-Production */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <video
                className="w-full max-h-80 rounded-lg shadow-lg object-contain"
                controls
                preload="metadata"
                playsInline
                muted
                loop
                suppressHydrationWarning
              >
                <source src="/video/rep8.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {locale.filmPostProduction.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {locale.filmPostProduction.description}
              </p>
            </div>
          </div>

          {/* Anime and Cartoon Production */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {locale.animeProduction.title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {locale.animeProduction.description}
              </p>
            </div>
            <div className="relative">
              <video
                className="w-full max-h-80 rounded-lg shadow-lg object-contain"
                controls
                preload="metadata"
                playsInline
                muted
                loop
                suppressHydrationWarning
              >
                <source src="/video/res3.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
