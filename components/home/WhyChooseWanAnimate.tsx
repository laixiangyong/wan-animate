import { Brain, CheckCircle, Globe, Shield, Users, Zap } from 'lucide-react';

const WhyChooseWanAnimate = ({ locale }: { locale: any }) => {
  const iconMap = {
    Brain,
    Zap,
    Shield,
    Users,
    Globe,
    CheckCircle
  };

  const reasons = locale.reasons.map((reason: any, index: number) => ({
    icon: Object.values(iconMap)[index],
    ...reason
  }));

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {locale.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {locale.description}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason: any, index: number) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <reason.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {reason.title}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {reason.description}
              </p>

              <ul className="space-y-2">
                {reason.features.map((feature: string, featureIndex: number) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {locale.comparison.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {locale.comparison.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Animation */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center">
                {locale.comparison.traditional.title}
              </h4>
              <ul className="space-y-3">
                {locale.comparison.traditional.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wan Animate */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center">
                {locale.comparison.wanAnimate.title}
              </h4>
              <ul className="space-y-3">
                {locale.comparison.wanAnimate.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comparison Video */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-4xl">
              <video
                className="w-full max-h-96 rounded-lg shadow-lg object-contain"
                controls
                preload="metadata"
                playsInline
                muted
                loop
                suppressHydrationWarning
              >
                <source src="/video/comp3.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {locale.stats.map((stat: any, index: number) => {
            const colors = [
              "text-blue-600 dark:text-blue-400",
              "text-green-600 dark:text-green-400",
              "text-purple-600 dark:text-purple-400",
              "text-orange-600 dark:text-orange-400"
            ];
            return (
              <div key={index}>
                <div className={`text-3xl font-bold ${colors[index]} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWanAnimate;
