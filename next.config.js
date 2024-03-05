module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
