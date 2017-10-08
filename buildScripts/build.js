import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV='production';

console.log(chalk.blue('Generating minified bundle for production. Sit tight...'));

webpack(webpackConfig).run((err,status)=>{
  if(err){
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStatus=status.toJson();
  if(jsonStatus.hasErrors){
    return jsonStatus.errors.map(error=>console.log(chalk.red(error)));
  }

  if(jsonStatus.hasWarnings){
    console.log(chalk.yellow('Webpack generated the following warnings:'));
    jsonStatus.warnings.map(error=>console.log(chalk.yellow(error)));
  }

  console.log(`Webpack status: ${status}`);

  console.log(chalk.green('Production build complete. output to /dist'));

  return 0;
});
