import { Button } from "@/components/ui/button";
import { Download, Play, Share2 } from "lucide-react";

const WanAnimateDemo = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            See Wan Animate in Action
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Watch how our AI transforms static images into dynamic animations with realistic movements and expressions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Comparison */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Before: Static Image
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  🎭
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Character stands still
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                After: Dynamic Animation
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-bounce">
                  🎬
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  Character comes to life
                </p>
              </div>
            </div>
          </div>

          {/* Demo Video Placeholder */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Live Demo
              </h3>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Demo Video</p>
                    <p className="text-sm opacity-75">Click to play animation demo</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    <Play className="w-4 h-4 mr-2" />
                    Play Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Try Wan Animate
              </Button>
              <Button variant="outline" className="flex-1">
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
              Fast Processing
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Generate animations in just 2-5 minutes with our optimized AI models.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              High Quality
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Professional-grade results with realistic movements and expressions.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              Privacy First
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Your images are automatically deleted after processing for complete privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WanAnimateDemo;
