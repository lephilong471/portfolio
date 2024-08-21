/** @type {import('next').NextConfig} */
const nextConfig = {
   compiler: {
      styledComponents: true,
   },
   i18n: {
      locales: ["en", "vi"],
      defaultLocale: "vi",
   },
};

export default nextConfig;
