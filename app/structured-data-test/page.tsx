import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";

export default function StructuredDataTest() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">结构化数据测试页面</h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">网站信息</h2>
          <div className="space-y-2">
            <p><strong>网站名称:</strong> {siteConfig.name}</p>
            <p><strong>网站URL:</strong> {siteConfig.url}</p>
            <p><strong>描述:</strong> {siteConfig.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">结构化数据预览</h2>
          <p className="text-gray-600 mb-4">
            以下是当前页面生成的结构化数据。您可以使用这些数据在Google结构化数据测试工具中验证。
          </p>

          <div className="bg-gray-50 rounded p-4">
            <h3 className="font-semibold mb-2">1. 网站结构化数据 (WebSite)</h3>
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": siteConfig.name,
                "alternateName": "Wan2.2 Animate",
                "description": siteConfig.description,
                "url": siteConfig.url,
                "publisher": {
                  "@type": "Organization",
                  "name": "Alibaba Tongyi Lab",
                  "url": "https://tongyi.aliyun.com"
                }
              }, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-50 rounded p-4 mt-4">
            <h3 className="font-semibold mb-2">2. 软件应用结构化数据 (SoftwareApplication)</h3>
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Wan Animate",
                "description": siteConfig.description,
                "url": siteConfig.url,
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": ["Windows", "macOS", "Linux"],
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                }
              }, null, 2)}
            </pre>
          </div>

          <div className="bg-gray-50 rounded p-4 mt-4">
            <h3 className="font-semibold mb-2">3. 组织结构化数据 (Organization)</h3>
            <pre className="text-sm overflow-x-auto">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Alibaba Tongyi Lab",
                "url": "https://tongyi.aliyun.com",
                "description": "Alibaba's AI research lab developing cutting-edge AI technologies including Wan Animate for character animation and video generation."
              }, null, 2)}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">验证工具</h2>
          <div className="space-y-2">
            <p className="text-blue-700">
              <strong>Google结构化数据测试工具:</strong>
              <a href="https://search.google.com/structured-data/testing-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2">
                https://search.google.com/structured-data/testing-tool
              </a>
            </p>
            <p className="text-blue-700">
              <strong>Google富结果测试工具:</strong>
              <a href="https://search.google.com/test/rich-results"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2">
                https://search.google.com/test/rich-results
              </a>
            </p>
            <p className="text-blue-700">
              <strong>Schema.org验证器:</strong>
              <a href="https://validator.schema.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2">
                https://validator.schema.org/
              </a>
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-800">测试步骤</h2>
          <ol className="list-decimal list-inside space-y-2 text-green-700">
            <li>复制上面的结构化数据JSON</li>
            <li>访问Google结构化数据测试工具</li>
            <li>选择"代码片段"标签</li>
            <li>粘贴JSON数据并点击"运行测试"</li>
            <li>查看是否有任何错误或警告</li>
            <li>也可以直接输入您的网站URL进行测试</li>
          </ol>
        </div>
      </div>

      {/* 实际的结构化数据 */}
      <StructuredData lang="en" type="software" />
    </div>
  );
}
