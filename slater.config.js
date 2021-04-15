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
    },
    production: {
      id: '121584582826	',
      password: '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',
      store: 'dominic-jones-jewellery.myshopify.com',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    }
  }
}
