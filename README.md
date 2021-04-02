# Local Locker Test

## Overview

This repo is an example of using some custom tools alongside yext sites.
Specifically we have added the following additions:

- CSS is complied using PostCSS via a Gulp toolchain
- TailwindCSS is used for utility css classes
- Turbo.js is added for smoother page navigation.
- React is used for rendering. Webpack and Babel are used to transpile the JSX.
  > Note that React is rendering these pages client side which is not ideal
  > from an SEO perspective. That said since the components are pretty simple
  > we are still getting solid Page Speed scores.

## Scripts

This repo is set up to use NPM scripts for developement

- `npm start` - Start local dev server
- `npm run build` - Build webpack and Gulp

## Issues

There are several issues with this setup that are outlined here.

- Both Gulp and Webpack put files in both the `/desktop` and `.artificact-output/desktop` folder. This is so that in dev and production everything works as expected. Since `yext sites develop` doesn't watch the desktop folder you have to insert directly into the `.artifact-output` folder so you don't need to restart the command each time.
- No hot reloading slows things down.
- There is no way to do asset fingerprinting (at least as far as I know) so page speed is complaining about cache policy. Idealy the bundle url would be dynamic and would update the template (via an assets partial) as part of the build process.
