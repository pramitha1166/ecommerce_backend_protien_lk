'use strict'

const WooCommerce = require('../util/woocommerce')

exports.listAllProductService = () => {
    return new Promise((resolve,reject) => {
        console.log('Calling to woocommerce')
        WooCommerce.get("products")
            .then((res) => {
                console.log(res.data)
                resolve(res.data)
            })
            .catch((err)=> {
                console.log(err.res.data)
                reject(err.res.data)
            })
    })
}

exports.getSingleProduct = (id) => {
    return new Promise((resolve,reject) => {
        WooCommerce.get(`products/${id}`)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

exports.listProductsByCategory = (id) => {
    return new Promise((resolve, reject) => {
        WooCommerce.get(`products?category=${id}`)
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.getFeaturedProducts = () => {
    return new Promise((resolve, reject) => {
        WooCommerce.get(`products?featured=true`)
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.getOnSaleProducts = () => {
    return new Promise((resolve, reject) => {
        WooCommerce.get(`products?on_sale=true`)
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}