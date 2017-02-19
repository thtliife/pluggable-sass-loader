# pluggable-plugin-template

This is simply a template module wrapper to base future pluggable plugins on.
These "pluggable" plugins are designed to work with applications generated from
the awesome 
[create-react-app](https://github.com/facebookincubator/create-react-app) npm
module, using the 
[react-scripts-pluggable](https://www.npmjs.com/package/react-scripts-pluggable)
scripts package:
```bash
create-react-app myAwesomeApp --scripts-version react-scripts-pluggable
cd myAwesomeApp
npm install pluggable-this-plugin-name
npm run start
```

"pluggable" plugins for these scripts work as follows.

Upon running the `start` or `build` scripts via npm or yarn, the
`react-scripts-pluggable` package will look in the dependencies and
devDependencies properties of the package.json for your application for any
packages with names beginning with "pluggable".

If any "pluggable" packages exist in the dependencies or devDependencies
properties, they will be injected into your existing webpack configuration.

This occurs via a mandatory export in the "pluggable" plugin, which is a
function named "transform".

This transform function is passed two parameters.
  * The existing webpack config
  * A custom config exported from a javascript file named as
  `<pluggable-plugin-name>.js` in the .pluggable directory in the root of your
  application.
It must then return a valid webpack configuration object, which is in turn
passed to the next "pluggable" plugin, until they have all been processed.

This final config is then passed back to the create-react-app's `build` and
`start` scripts, and in turn passed to webpack to continue.

Pluggable plugins must also export two boolean properties, named `development`
and `production`.
These are to be set to `true` if the plugin should be loaded under those
environments, and `false` if not.

## Important note

_Be sure to include the plugin which is to be loaded by this wrapper in the dependencies property of this pluggable-plugin's package.json._
