'use client'
import { MainBody, SeparaterImage, FeatureItem, DecorativeGuide, Footer } from "@/components"
import HomePage from "@/components/HomePage"
import { usePathname } from "next/navigation"
import { withRouter } from "next/router"
import Script from "next/script"
import { useEffect } from "react"
// import { useEffect } from "react"
// import * as gtag from '../../gtm-lib/gtm'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');


const Home = () => {
  // useEffect(() => {
  //   window.dataLayer.push({
  //     event: 'page view',
  //     pagePath: '/',
  //     pageName: 'MainPage'
  //   })
  // }, [])

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  const pathname = usePathname()
  console.log('pathname', pathname)

  //     < Script >
  //       {/* window.dataLayer = window.dataLayer || []; */}
  //       window.dataLayer.push({
  //         'event': 'virtualPageview',
  //       'pageUrl': pathname,
  //       'pageTitle': 'Home Page' //some arbitrary name for the page/state
  // });
  //     </Script >

  return (
    <main>

      <HomePage />
    </main>
  )
}
export default withRouter(Home);