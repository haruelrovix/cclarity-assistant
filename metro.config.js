// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

// https://github.com/EvanBacon/metro-minify-esbuild?tab=readme-ov-file#usage
// config.transformer.minifierPath = require.resolve('metro-minify-esbuild');

// https://docs.expo.dev/guides/minify/#customizing-the-minifier
config.transformer.minifierPath = 'metro-minify-terser';

// https://docs.expo.dev/guides/minify/#remove-console-logs
config.transformer.minifierConfig = {
  // drop: ["console"]
  // https://docs.expo.dev/guides/minify/#remove-console-logs
  compress: {
    // The option below removes all console logs statements in production.
    drop_console: true,
  },
};

module.exports = config;
