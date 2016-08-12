/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV;

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err,stats) => {
    if(err) { 
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors) { 
        return jsonStats.errors.map(error => console.log(error.red));
    }

      if(jsonStats.hasWarnings) { 
            console.log('webpack has some warnings: '.yellow);
            jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

  //  console.log('Stats ${stats}');

    console.log('Prod Ready!'.green);

    return 0;
});