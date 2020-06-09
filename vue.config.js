/* eslint-disable @typescript-eslint/camelcase */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  pwa: {
    name: "Likes",
    themeColor: "#D89A9E",
    msTileColor: "#D89A9E",
    manifestOptions: {
      background_color: "#F6F4F3",
      scope: "/",
      shortcuts: [
        {
          name: "Add Item",
          short_name: "Add Item",
          description: "Add new item.",
          url: "/add?utm_source=homescreen",
          icons: [{ src: "/img/icons/add_icon.png", sizes: "192x192" }]
        }
      ]
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
  },
  configureWebpack: {
    optimization: {
      minimizer: isProd
        ? [
            new UglifyJsPlugin({
              uglifyOptions: {
                compress: {
                  // eslint-disable-next-line @typescript-eslint/camelcase
                  drop_console: true
                }
              }
            })
          ]
        : []
    }
  }
};
