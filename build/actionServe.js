"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "商品1", 1.99, 1.5, "这是商品1"),
    new Product(2, "商品2", 2.99, 2.5, "这是商品2"),
    new Product(3, "商品3", 3.99, 3.5, "这是商品3"),
    new Product(4, "商品4", 4.99, 4.5, "这是商品4"),
    new Product(5, "商品5", 5.99, 4.5, "这是商品5")
];
app.get('/', function (req, res) {
    res.send("hello express");
});
// 此时返回的是一个json数组，传入定义好的products
app.get('/api/product', function (req, res) {
    res.json(products);
});
// 新增根据id查询数据的服务
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var serve = app.listen(8000, "localhost", function () {
    console.log("服务器已启动，地址为http://localhose:8000");
});
