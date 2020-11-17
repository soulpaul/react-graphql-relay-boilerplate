const path = require('path');

const custom = require('../webpack/development.config.js');

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules }, resolve: { ...config.resolve, modules: custom.resolve.modules } };
  },
}