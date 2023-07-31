'use client'
import { MainBody, SeparaterImage, FeatureItem, DecorativeGuide, Footer } from "@/components"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.dataLayer.push({
      event: 'page view',
      pagePath: '/',
      pageName: 'MainPage'
    })
  }, [])

  return (
    <main>

      <MainBody />
      <SeparaterImage />
      <FeatureItem />
      <DecorativeGuide />
      <Footer />
    </main>
  )
}
