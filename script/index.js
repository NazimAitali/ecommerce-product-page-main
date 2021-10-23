/*************SELECTORS***************/
let Thumbnails = document.querySelectorAll(".Thumbnails");
let ThumbnailsDisplay = document.querySelectorAll(".Thumbnails-lightbox");
let ProductDisplay = document.querySelector(".Product-display");
let Image = document.querySelector(".Lightbox");
let Cart = document.querySelector(".Cart");
let CartContent = document.querySelector(".Cart-content");
let Add = document.querySelector(".Add");
let Subtract = document.querySelector(".Subtract");
let Quantity = document.querySelector(".Quantity");
let AddCart = document.querySelector(".Add-cart");
let CartEmpty = document.querySelector(".Cart-empty");
let CartPurchaseGlobal = document.querySelector(".Cart-purchase-global");
let Badge = document.querySelector(".Badge");
let QuantityPurchased = document.querySelector(".Quantity-purchased");
let Total = document.querySelector(".Total");
let QuantityPrice = document.querySelector(".Quantity-price");
let ProductPurchaseClose = document.querySelector(".Product-Purchase-close");
let ImageDisplayer = document.querySelector(".Lightbox-displayer");
let ImageClose = document.querySelector(".Lightbox-close");
let MenuMobileSide = document.querySelector(".Menu-mobile-side");
let MenuMobileOverlay = document.querySelector(".Menu-mobile-overlay");
let MenuMobileContainer = document.querySelector(".Menu-mobile-container");
let MenuContainer = document.querySelector(".Menu-container");
let ToLeft = document.querySelector(".To-left");
let ToRight = document.querySelector(".To-right");
let ToLeftImage = document.querySelector(".To-left-lightbox");
let ToRightImage = document.querySelector(".To-right-lightbox");

let n = 0;
let image = 0;
let imageLightBox = 0;
const unitPrice = 125;
const imageArray = [
  "image-product-1",
  "image-product-2",
  "image-product-3",
  "image-product-4",
];
/****************Events*****************/
Thumbnails.forEach((item) => {
  item.addEventListener("click", selectProduct);
});
ThumbnailsDisplay.forEach((item) => {
  item.addEventListener("click", selectProductInLayer);
});
Cart.firstElementChild.addEventListener("click", CartShow);
Add.firstElementChild.addEventListener("click", AddQ);
Subtract.firstElementChild.addEventListener("click", SubQ);
AddCart.addEventListener("click", AddToCart);
ProductPurchaseClose.firstElementChild.addEventListener("click", removeItem);
ProductDisplay.firstElementChild.addEventListener("click", openDisplay);
ImageClose.addEventListener("click", closeOverlay);
MenuMobileContainer.addEventListener("click", openMobileMenu);
ToLeft.addEventListener("click", goLeft);
ToRight.addEventListener("click", goRight);
ToLeftImage.addEventListener("click", goLeftImage);
ToRightImage.addEventListener("click", goRightImage);
/****************Functions*****************/

function matchProduct(thumb) {
  const image = {
    "image-product-1": "image-product-1",
    "image-product-2": "image-product-2",
    "image-product-3": "image-product-3",
    "image-product-4": "image-product-4",
  };
  return image[thumb];
}
function selectProduct() {
  Thumbnails.forEach((item) => {
    item.classList.remove("Thumbnails-selected");
  });
  this.classList.add("Thumbnails-selected");
  ProductDisplay.firstElementChild.src = `./images/${matchProduct(
    this.firstElementChild.alt
  )}.jpg`;
}
function selectProductInLayer() {
  ThumbnailsDisplay.forEach((item) => {
    item.classList.remove("Thumbnails-selected");
  });
  this.classList.add("Thumbnails-selected");
  Image.firstElementChild.src = `./images/${matchProduct(
    this.firstElementChild.alt
  )}.jpg`;
  imageLightBox = 0;
}
function CartShow() {
  if (CartContent.classList[1] === "Cart-content-show") {
    CartContent.classList.remove("Cart-content-show");
  } else {
    CartContent.classList.add("Cart-content-show");
  }
}
function AddQ() {
  if (n >= 0) {
    n++;
  }
  Quantity.value = n;
}
function SubQ() {
  if (n >= 1) {
    n--;
  }

  Quantity.value = n;
}
function AddToCart() {
  if (n !== 0) {
    CartEmpty.classList.add("Cart-empty-active");
    Badge.classList.add("Badge-activate");
    CartPurchaseGlobal.classList.remove("Cart-without-content");
    Badge.textContent = n;
    QuantityPurchased.textContent = n;
    QuantityPrice.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(unitPrice);
    Total.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(unitPrice * n);
    Quantity.value = 0;
  } else {
    CartEmpty.classList.remove("Cart-empty-active");
    Badge.classList.remove("Badge-activate");
    CartPurchaseGlobal.classList.add("Cart-without-content");
  }
}
function removeItem() {
  n = 0;
  CartEmpty.classList.remove("Cart-empty-active");
  Badge.classList.remove("Badge-activate");
  CartPurchaseGlobal.classList.add("Cart-without-content");
}
function openDisplay() {
  if (ImageDisplayer.classList[1] !== "Image-displayer-show") {
    ImageDisplayer.classList.add("Image-displayer-show");
  }
}
function closeOverlay() {
  if (ImageDisplayer.classList[1] !== "Image-displayer-show") {
    ImageDisplayer.classList.add("Image-displayer-show");
  } else {
    ImageDisplayer.classList.remove("Image-displayer-show");
  }
}
function openMobileMenu() {
  console.log(MenuMobileContainer.childNodes[3]);
  if (MenuMobileSide.classList[1] !== "Menu-mobile-side-open") {
    MenuMobileSide.classList.add("Menu-mobile-side-open");
    MenuContainer.classList.add("Menu-container-show");
    MenuMobileOverlay.classList.add("Menu-mobile-overlay-show");
    MenuMobileContainer.firstElementChild.classList.add("Rotate-one");
    MenuMobileContainer.childNodes[3].classList.add("Slide");
    MenuMobileContainer.lastElementChild.classList.add("Rotate-two");
  } else {
    MenuMobileSide.classList.remove("Menu-mobile-side-open");
    MenuContainer.classList.remove("Menu-container-show");
    MenuMobileOverlay.classList.remove("Menu-mobile-overlay-show");
    MenuMobileContainer.firstElementChild.classList.remove("Rotate-one");
    MenuMobileContainer.childNodes[3].classList.remove("Slide");
    MenuMobileContainer.lastElementChild.classList.remove("Rotate-two");
  }
}
function goLeft() {
  if (image < 3) {
    image++;
  }
  ProductDisplay.firstElementChild.src = `./images/${imageArray[image]}.jpg`;
}
function goRight() {
  if (image > 0) {
    image--;
  }
  ProductDisplay.firstElementChild.src = `./images/${imageArray[image]}.jpg`;
}

function goLeftImage() {
  if (imageLightBox < 3) {
    imageLightBox++;
  }
  Image.firstElementChild.src = `./images/${imageArray[imageLightBox]}.jpg`;
}
function goRightImage() {
  if (imageLightBox > 0) {
    imageLightBox--;
  }
  Image.firstElementChild.src = `./images/${imageArray[imageLightBox]}.jpg`;
}
