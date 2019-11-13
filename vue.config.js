const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const FStream = require('fs');
const os = require('os');
const output = 'ep-lottery';
module.exports = {
  publicPath: './',
  outputDir: output,
  configureWebpack: config => {
    function writeVersionInfo(){    // 写入版本信息
      config.plugins[1].definitions['process.env'].VUE_APP_VERSION = new Date().getTime();
      FStream.writeFile("public/version.js", config.plugins[1].definitions['process.env'].VUE_APP_VERSION, function (err) {
        if (err) throw err;
        console.log("版本信息写入成功!");
      });
    }
    writeVersionInfo();

    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'sit' || process.env.NODE_ENV === 'sit_green') {
      // 去除console.log
      let removeConsole = new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
            pure_funcs: ['console.log']
          }
        },
        parallel: os.cpus().length * 2
      });

      let fileManager = new FileManagerPlugin({
        onEnd: {
          copy: [
            { source: 'public/version.js', destination: output },
          ],
          archive: [
            {
              source: output,
              destination: output + '.zip',
              format: 'zip',
            }
          ]
        }
      });
      //config.plugins.push(UglifyJsParallelPlugin);
      config.plugins.push(removeConsole);
      config.plugins.push(fileManager);
    } else {
      // mutate for development...
    }
  },
};
