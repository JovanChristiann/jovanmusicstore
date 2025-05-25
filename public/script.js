const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

fetch("/products")
    .then((response) => response.json())
    .then((products) => {
        const container = document.getElementById("product");
        products.forEach((p) => {
            container.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" />
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
        </div>
      `;
        });
    });
