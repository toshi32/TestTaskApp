const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const stylus = require('../loaders/stylus') // 作ったstylusをrequireする

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
environment.loaders.prepend('stylus', stylus) // 作ったstylusをロード