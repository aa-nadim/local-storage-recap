const addProduct = () => {
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;

  console.log(product, quantity);

  addProductToDB(product, quantity);
};
const getStoredCart = () => {
  const storedCart = localStorage.getItem('cart');

  let cart = {};
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};
const addProductToDB = (product, quantity) => {
  const cart = getStoredCart();
  cart[product] = quantity;
  localStorage.setItem('cart', JSON.stringify(cart));
};

const cart = { pen: 4, triPod: 2, handSanitizer: 2 };
