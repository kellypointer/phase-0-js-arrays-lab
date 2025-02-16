// Write your code here


let products=["Laptop","Phone","Headphones","Monitor"];
function logFirstProduct(products) {
  console.log(products[0]);
}

function addProduct(products, newitem) {
  products.push(newitem);
  return products;
}
addProduct(products, "Keyboard")
console.log(products); 


function updateProductName(products, position) {
  products[position] = "Earbuds";
}
updateProductName(products, 2)
console.log(products);

function removeLastProduct(products, last) {
  products.splice(0,last);
}
removeLastProduct(products, 4)
console.log(products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
