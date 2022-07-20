const navmenu = document.querySelector(".navbar-email");
const burguerMenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

navmenu.addEventListener("click", toggleMenuDesktop);
burguerMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleCarrito);

function toggleMenuDesktop() {
  aside.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile() {
  aside.classList.add("inactive");
  menuMobile.classList.toggle("inactive");
}

function toggleCarrito() {
  menuMobile.classList.add("inactive");
  desktopMenu.classList.add("inactive");
  aside.classList.toggle("inactive");
}

const productoList = [];

productoList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productoList.push({
  name: "Television",
  price: 220,
  image:
    "https://cdn.pixabay.com/photo/2020/04/08/15/50/tv-5017870_960_720.jpg",
});

productoList.push({
  name: "Iphone",
  price: 450,
  image:
    "https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg",
});

function renderProducts(arr){

    for (product of arr) {
        const cardProducts = `
          <div class="product-card">
              <img src="${product.image}" alt="">
              <div class="product-info">
                <div>
                  <p>$${product.price}</p>
                  <p>${product.name}</p>
                </div>
                <figure>
                  <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
              </div>
            </div>
          </div>
          `;
          
      
      cardsContainer.innerHTML += cardProducts;
      }
      
}


renderProducts(productoList);