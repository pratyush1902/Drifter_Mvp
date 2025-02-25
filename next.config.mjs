/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true,
    images : {
      domains : ['sangw.in', 'localhost', 'picsum.photos','images.unsplash.com',"lh3.googleusercontent.com", "your-strapi-url.com"] // <== Domain name
    }};
 
  

export default nextConfig;
