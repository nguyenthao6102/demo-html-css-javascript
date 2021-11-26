const bookBtn = document.querySelector(".product-book");
bookBtn.onclick = function() {
  alert("BOOK DONE");
}

const productSale = document.querySelector(".product-sale");
const toggleFunction = () => {
  if(productSale.className.includes("hide")){
    productSale.classList.remove("hide");
  }
  else{
    productSale.classList.add("hide");
  }
}