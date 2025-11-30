/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Permite exportar e rodar no Netlify
  output: "export",

  // Habilita imagens externas (em caso de IA, CDN, avatares etc.)
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "img.clinicglobal.com",
      "cdn.clinicglobal.com"
    ]
  },

  // Configura rotas estáticas para evitar erro 404 no Netlify
  trailingSlash: true,

  // Caso use fontes externas
  experimental: {
    optimizeCss: true,
    serverMinification: true,
  }
};

module.exports = nextConfig;
