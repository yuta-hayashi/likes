module.exports = {
  pwa: {
    name: "Likes",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp("/.*(?:googleapis).com.*$/"),
          handler: "networkFirst",
          options: {
            cacheName: "firebase-storage",
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 3000
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ],
      exclude: [/_redirects/]
    }
  }
};
