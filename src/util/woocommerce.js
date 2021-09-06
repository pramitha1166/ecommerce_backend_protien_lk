var WooCommerceAPI = require('@woocommerce/woocommerce-rest-api').default;
 
var WooCommerce = new WooCommerceAPI({
    url: 'http://localhost/protienlkapi',
    consumerKey: 'ck_fec1063364c3e551081ec4c4a2076c9d1db0653d',
    consumerSecret: 'cs_2007c2d85ba4b81127e109c2e1b709bbc27f44de',
    version: 'wc/v3'
});

module.exports = WooCommerce