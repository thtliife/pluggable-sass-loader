# pluggable-sass-loader

_This is still in alpha._

This is simply a template module wrapper for
[perrigons](https://www.npmjs.com/~peerigon)
[sass-loader](https://www.npmjs.com/package/sass-loader)

This plugin is designed to work with applications generated from the awesome
[create-react-app](https://github.com/facebookincubator/create-react-app) npm
module, using the 
[react-scripts-pluggable](https://www.npmjs.com/package/react-scripts-pluggable)
scripts package.

## Usage

```bash
create-react-app myAwesomeApp --scripts-version react-scripts-pluggable
cd myAwesomeApp
npm install pluggable-sass-loader
npm run start
```

###Optional config
You can also pass options directly to
[node-sass](https://github.com/andrew/node-sass) by specifying an options
property in a custom config file like this:
Create a file named `pluggable-sass-loader.js` in the `.pluggable` directory
at the root of your application, with content like below:

```javascript
module.exports = {
  options: {
    includePaths: ["absolute/path/a", "absolute/path/b"]
  }
};
```

See [node-sass](https://github.com/andrew/node-sass) for all available Sass
options.
