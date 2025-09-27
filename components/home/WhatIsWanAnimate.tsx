const WhatIsWanAnimate = ({ locale }: { locale: any }) => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {locale.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {locale.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWanAnimate;
