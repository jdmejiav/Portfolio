type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean>;
};

export function useAnalytics() {
  function trackEvent(event: AnalyticsEvent) {
    if (import.meta.env.DEV) {
      console.info('[analytics placeholder]', event);
    }
  }

  return { trackEvent };
}
