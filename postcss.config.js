module.exports = {
  plugins: [
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    require('css-mqpacker'),
    require('autoprefixer')
  ]
};