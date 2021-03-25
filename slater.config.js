const path = require('path')

module.exports = {
  themes: {
    development: {
      id: '116013727895',
      password: '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',
      store: 'dominic-jones-staging.myshopify.com',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    }
  }
}
