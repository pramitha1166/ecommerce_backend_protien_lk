var WooCommerceAPI = require('@woocommerce/woocommerce-rest-api').default;
 
var WooCommerce = new WooCommerceAPI({
    url: 'http://codeworker.eastus.cloudapp.azure.com',
    consumerKey: 'ck_a998504ade308afa2a656109373ea63f444409aa',
    consumerSecret: 'cs_fdd76a77cdd02f679bd039da9138fb52afc297ec',
    version: 'wc/v3'
});

module.exports = WooCommerce