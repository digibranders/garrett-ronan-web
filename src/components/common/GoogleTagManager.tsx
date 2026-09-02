import Script from 'next/script';

/**
 * Google Tag Manager container ID.
 *
 * Defaults to the production GKR Hospitality container. Override per
 * environment with `NEXT_PUBLIC_GTM_ID` (inlined at build time by Next.js) —
 * set it to a staging container, or to an empty string to disable GTM entirely
 * for preview/local builds.
 */
export const GTM_CONTAINER_ID: string =
  process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-TG8GB3PP';

/** GTM container IDs are always `GTM-` followed by an alphanumeric suffix. */
const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/;

const isValidContainerId = (containerId: string): boolean =>
  GTM_ID_PATTERN.test(containerId);

/**
 * Loads the Google Tag Manager container.
 *
 * `afterInteractive` lets Next.js inject the loader as soon as the page is
 * interactive while keeping the container off the critical rendering path —
 * the strategy Next.js recommends for tag managers.
 */
export function GoogleTagManagerScript(): React.ReactElement | null {
  if (!isValidContainerId(GTM_CONTAINER_ID)) {
    return null;
  }

  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
    </Script>
  );
}

/**
 * Google Tag Manager fallback for clients without JavaScript.
 *
 * Must be rendered immediately after the opening `<body>` tag.
 */
export function GoogleTagManagerNoScript(): React.ReactElement | null {
  if (!isValidContainerId(GTM_CONTAINER_ID)) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
