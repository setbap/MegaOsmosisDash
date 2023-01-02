import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaOsmosisDash",
  titleTemplate: "%s | Business Intelligence Dashboard Osmosis",
  defaultTitle: "MegaOsmosisDash | Business Intelligence Dashboard Osmosis ",
  description:
    "Best Business Intelligence Dashboard Osmosis by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaOsmosisDash.vercel.app/",
  openGraph: {
    url: "https://MegaOsmosisDash.vercel.app/",
    title: "MegaOsmosisDash",
    description:
      "Best Business Intelligence Dashboard Osmosis by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaOsmosisDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
