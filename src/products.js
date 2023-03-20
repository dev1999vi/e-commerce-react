//this file is just a fake json for getting the products data
import iphone from './assets/1.png'
import mac from './assets/2.png'
import camera from './assets/3.png'
import jacket from './assets/4.jpg'
import led from './assets/5.jpg'
import tshirt from './assets/6.webp'
import polo from './assets/7.webp'
import cap from './assets/8.webp'

export const PRODUCTS = [
    {
        id: 1,
        productName : "Fake iPhone",
        price : 999.0,
        productImage: iphone
    },
    {
        id: 2,
        productName : "Fake MacBook",
        price : 9999.0,
        productImage: mac
    },
    {
        id: 3,
        productName : "Fake Camera",
        price : 599.0,
        productImage: camera
    },
    {
        id: 4,
        productName : "Old Jacket",
        price : 99.0,
        productImage: jacket
    },
    {
        id: 5,
        productName : "Faulty LED Strips",
        price : 9.0,
        productImage: led
    },
    {
        id: 6,
        productName : "Boomer T-Shirt",
        price : 19.0,
        productImage: tshirt
    },
    {
        id: 7,
        productName : "Cheap Shirt",
        price : 15.0,
        productImage: polo
    },
    {
        id: 8,
        productName : "Worst Looking Cap",
        price : 5.0,
        productImage: cap
    },
]