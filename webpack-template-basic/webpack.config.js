// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  entry : './src/js/main.js',   // 파일을 읽어들이기 시작하는 진입점 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),     // __dirname 현재파일 경로
    // require('path').resolve(__dirname, 'dist')
    // filename : 'main.js',
    clean : true
  },

  module:{
    rules :[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins : [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],

  devServer: {
    host : 'localhost'
  }
}
