'use client'
import HomePage from "@/components/HomePage"
import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function Home() {

  useEffect(() => {
    // Track a page view
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Track a custom event
    ReactGA.event({
      category: 'User',
      action: 'Logged In',
    });
  }, []);

  return (
    <HomePage />
  )
}
