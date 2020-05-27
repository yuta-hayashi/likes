module.exports = {
  pwa: {
    name: "Likes",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: /https:\/\/firebasestorage.googleapis.com\/*/,
          handler: "networkFirst",
          options: {
            cacheName: "firebase-storage",
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 300
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
};
