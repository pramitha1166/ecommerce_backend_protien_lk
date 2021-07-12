'use strict'

const WooCommerce = require('../util/woocommerce')

exports.getAllCategories = () => {
    return new Promise((resolve,reject) => {
        WooCommerce.get("products/categories")
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.res.data)
            })
    })
}

exports.getAllSubCategories = (id) => {
    return new Promise((resolve,reject) => {
        WooCommerce.get(`products/categories?parent=${id}`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.res.data)
            })
    })
}

exports.getAllParentCategories = () => {
    return new Promise((resolve,reject) => {
        WooCommerce.get(`products/categories?parent=0`)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.res.data)
            })
    })
}