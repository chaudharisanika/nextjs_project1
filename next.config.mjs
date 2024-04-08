/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //for taking the images other than own domain
  images:{
    remotePatterns:[
      {protocol:"https",hostname:"www.dominos.co.in"}
    ]
  }
};

export default nextConfig;
