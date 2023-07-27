export const trackEvent = (category, action, label, value) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        event: 'customEvent',
        category: category,
        action: action,
        label: label,
        value: value,
    })
}