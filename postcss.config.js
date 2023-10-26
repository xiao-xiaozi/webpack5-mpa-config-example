module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  // plugins: [
  //   ["autoprefixer"],
  //   'postcss-pxtorem': {
  //     rootValue: 16, 
  //     propList: ['*']
  //   }
  // ],
  plugins: {
    "autoprefixer": {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*']
    }
  }
};
