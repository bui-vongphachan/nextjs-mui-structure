/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/agents/add/addAgent",
        destination: "/home/agents/add/addAgent",
        permanent: false,
      },
      {
        source: "/agents/add",
        destination: "/home/agents/add",
        permanent: false,
      },
      {
        source: "/agents",
        destination: "/home/agents",
        permanent: false,
      },
      {
        source: "/users",
        destination: "/home/users",
        permanent: false,
      },
      {
        source: "/providers/add",
        destination: "/home/providers/add",
        permanent: false,
      },
      {
        source: "/providers",
        destination: "/home/providers",
        permanent: false,
      },
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "www.wwe.com",
      "robohash.org",
      "10.69.200.16",
      "nbl-core-service-simreg.aifgroup.la",
    ],
  },
};

module.exports = nextConfig;
