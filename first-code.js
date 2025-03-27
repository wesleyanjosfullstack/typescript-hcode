console.log('Hello world ! TypeScript !');
console.log('==========');
var name = 'Wesley Anjos';
console.log("Ol\u00E1 ".concat(name, ", seja bem-vindo !"));
console.log('==========');
var Product = /** @class */ (function () {
    function Product(productName, productValue) {
        this.name = productName;
        this.value = productValue;
    }
    return Product;
}());
var playstation = new Product('Playstation 5', 5000);
