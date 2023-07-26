export const gtmPageView = (url) => {
    if (window !== undefined) {
        window.gtag("config", 'GTM-PWWX26Z', {
            page_path: url,
        });
    }
};

export const gtmEvent = ({ action, params }) => {
    if (window !== undefined) {
        window.gtag("event", action, params);
    }
};