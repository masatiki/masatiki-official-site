(() => {
  // Only known campaign labels are forwarded; never copy arbitrary query data.
  const sources = new Map([
    ["ig", "instagram"], ["instagram", "instagram"],
    ["x", "x"], ["twitter", "x"],
    ["fb", "facebook"], ["facebook", "facebook"],
    ["yt", "youtube"], ["youtube", "youtube"],
    ["pinterest", "pinterest"], ["tiktok", "tiktok"],
    ["snapchat", "snapchat"]
  ]);
  const query = new URLSearchParams(window.location.search);
  const source = sources.get((query.get("utm_source") || "").toLowerCase());
  if (!source) return;

  document.querySelectorAll("[data-play-store-link]").forEach((link) => {
    const store = new URL(link.href);
    const referrer = new URLSearchParams(store.searchParams.get("referrer"));
    referrer.set("utm_source", source);
    referrer.set("utm_medium", "organic_social");
    store.searchParams.set("referrer", referrer.toString());
    link.href = store.href;
  });

  // Retain the source when the visitor switches between Japanese and English.
  document.querySelectorAll('a[lang]').forEach((link) => {
    const destination = new URL(link.href);
    if (destination.origin !== window.location.origin ||
        !destination.pathname.endsWith("/apps/markn-memo.html")) return;
    destination.searchParams.set("utm_source", source);
    link.href = destination.href;
  });
})();
