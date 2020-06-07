module.exports = {
  pwa: {
    name: "Likes",
    themeColor: "#D89A9E",
    msTileColor: "#D89A9E",
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: "#F6F4F3"
    },
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
