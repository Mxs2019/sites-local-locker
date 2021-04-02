# Local Locker Test

## Overview

This repo is an example of using some custom tools alongside yext sites.
Specifically we have added the following additions:

- React is used for rendering.
  > Note that React is rendering these pages client side which is not ideal
  > from an SEO perspective. That said since the components are pretty simple
  > we are still getting 100 on Page Speed.
- Webpack and Babel are used to transpile the JSX and typescript
- CSS is complied using PostCSS via webpack
- TailwindCSS is used for utility css classes
- Turbo.js is added for smoother page navigation.

## Scripts

This repo is set up to use NPM scripts for developement

- `npm start` - Start local dev server
- `npm run build` - Build webpack

## Details

- Each template or static page has a corresponding tsx file in `/src`. Every file directly in `/src` will automatically be compiled using the webpack config. Any shared components should be nested so that they are not used as entry points for webpack.
- Tailwind is loaded via `/src/styles/index.css`. Any class styles can be added there
- The template or static page are pretty much empty. Each template needs to load the corresponding js bundle and add a div with id = `app`. Additionally, the template puts all the `data` in a global variable called pageData. By convention this is then passed into the react component as a prop.

```html
<!-- Example of template-->
<html>
  <head>
    <script>
      var pageData = {{.}}
    </script>
  </head>
  <body>
    <div id="app"></div>
    <script src="./location.bundle.js"></script>
  </body>
</html>
```

## Issues

There are several issues with this setup that are outlined here.

- Webpack has to put files in both the `/desktop` and `.artificact-output/desktop` folder. This is so that in dev and production everything works as expected. Since `yext sites develop` doesn't watch the desktop folder you have to insert directly into the `.artifact-output` folder so you don't need to restart the command each time.
- No hot reloading slows things down.
- There is no way to do asset fingerprinting (at least as far as I know) so page speed is complaining about cache policy. Idealy the bundle url would be dynamic and would update the template (via an assets partial) as part of the build process.
- React is client side
- You need to manually add a corresponding tsx file and then manually include the right script in the right template file.
