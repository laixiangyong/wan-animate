"use client"

import { Button } from "@/components/ui/button"
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { FaFacebook, FaInstagram, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa"
import { SiHuggingface } from "react-icons/si"

// URL mapping for each resource
const resourceUrls: Record<string, string> = {
  "alibaba1": "https://x.com/Alibaba_Wan/status/1968921551392432175",
  "sirio1": "https://www.youtube.com/watch?v=4d4r_6-qE4g",
  "gadgetify1": "https://x.com/Gdgtify/status/1968987447234068607",
  "huggingface1": "https://huggingface.co/spaces/Wan-AI/Wan2.2-Animate",
  "reddit1": "https://www.reddit.com/r/StableDiffusion/comments/1nntkbo/i_just_tried_out_wan_22_animate_and_the_results/",
  "facebook1": "https://www.facebook.com/100083241103501/posts/alibabas-new-ai-tool-wan-22-animate-can-replace-a-full-video-actor-with-another-/787336234051073/"
}

// Platform mapping for each resource
const resourcePlatforms: Record<string, "youtube" | "twitter" | "reddit" | "facebook" | "instagram" | "huggingface"> = {
  "alibaba1": "twitter",
  "sirio1": "youtube",
  "gadgetify1": "twitter",
  "huggingface1": "huggingface",
  "reddit1": "reddit",
  "facebook1": "facebook"
}

export default function WhoUsesWanAnimate({ locale }: { locale: any }) {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {locale.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
            {locale.description}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locale.cards?.map((card: any) => {
            const platform = resourcePlatforms[card.id] || "twitter"
            const url = resourceUrls[card.id] || "#"

            return (
              <Card key={card.id} className="rounded-2xl shadow-lg hover:shadow-xl transition" shadow="md">
                <CardHeader className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    {platform === "youtube" && <FaYoutube className="text-red-500" />}
                    {platform === "twitter" && <FaTwitter className="text-sky-500" />}
                    {platform === "reddit" && <FaReddit className="text-orange-500" />}
                    {platform === "facebook" && <FaFacebook className="text-blue-600" />}
                    {platform === "instagram" && <FaInstagram className="text-pink-500" />}
                    {platform === "huggingface" && <SiHuggingface className="text-yellow-500" />}
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {card.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">
                    {card.author} {card.followers && `｜${card.followers}`}
                  </span>
                </CardHeader>
                <CardBody className="space-y-3">
                  <p className="text-sm text-gray-600">{card.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      View Content
                    </a>
                  </Button>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}