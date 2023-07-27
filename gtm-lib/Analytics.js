// components/analytics.js

const GA_TRACKING_ID = 'GTM-K3BPSSX'; // Replace 'UA-XXXXXXXXX-X' with your Google Analytics Tracking ID

export function trackClickEvent(element) {
    const isAnchor = element.tagName.toLowerCase() === 'a';

    // Get the text content or value of the clicked element as the event label
    const eventLabel = isAnchor ? element.textContent : element.value || element.textContent;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);

    gtag('event', 'click', {
        event_category: isAnchor ? 'Anchor Click' : 'Button Click',
        event_label: eventLabel,
    });
}
