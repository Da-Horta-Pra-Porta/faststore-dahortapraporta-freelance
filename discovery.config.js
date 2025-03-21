module.exports = {
  seo: {
    title: "Da Horta pra Porta",
    description: "Da Horta pra Porta",
    titleTemplate: "Da Horta pra Porta",
    author: "Da Horta pra Porta",
  },

  // Theming
  theme: "custom-theme",

  // Ecommerce Platform
  platform: "vtex",

  // Platform specific configs for API
  api: {
    storeId: "dahortapraporta",
    workspace: "master",
    environment: "vtexcommercestable",
    hideUnavailableItems: false,
    incrementAddress: false,
    subDomainPrefix: ['b2c']
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: "",
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://b2c.dahortapraporta.com.br",
  secureSubdomain: "https://secure.dahortapraporta.com.br/",
  checkoutUrl: "https://secure.dahortapraporta.com.br/checkout",
  loginUrl: "https://secure.dahortapraporta.com.br/api/io/login",
  accountUrl: "https://secure.dahortapraporta.com.br/api/io/account",

  previewRedirects: {
    home: "/",
    plp: "/electronics",
    search: "/s?q=orange",
    pdp: "/mouse/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || "http://localhost:3000",
    pages: {
      home: "/",
      pdp: "/teste/p",
      collection: "/electronics",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: "/",
      pdp: "/mouse/p",
      collection: "/electronics",
      collection_filtered: "/electronics/?category-1=electronics&marca=faststore&facets=category-1%2Cmarca%27",
      search: "/s?q=orange",
    },
    browser: "electron",
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    enableCypressExtension: true,
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: ["https://dahortapraporta.myvtex.com/cms-releases/webhook-releases"],
  },
};
