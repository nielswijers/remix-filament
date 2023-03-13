/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: [
    /^@filament/,
    /^@filament-theme/,
    /^@filament-react/,
  ],
  future: {
    v2_routeConvention: true,
    unstable_vanillaExtract: true,
    unstable_cssSideEffectImports: true,
  },
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  cacheDirectory: './node_modules/.cache/remix',
};
