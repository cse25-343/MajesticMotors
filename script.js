// =========================
// GLOBAL CART
// =========================

let cart = [];

// =========================
// ADD TO CART
// =========================

const cartButtons = document.querySelectorAll(".category-card button");

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        const productName =
            card.querySelector("p").innerText;

        const productPrice =
            card.querySelector("h3").innerText;

        cart.push({
            name: productName,
            price: productPrice
        });

        alert(productName + " added to cart!");

        updateCartCount();

        console.log(cart);
    });

});

// =========================
// CART COUNTER
// =========================

function updateCartCount(){

    let cartIcon =
        document.querySelector(".floating-cart");

    if(cartIcon){

        cartIcon.innerHTML =
        "🛒 (" + cart.length + ")";
    }
}

// =========================
// PRODUCT SEARCH
// =========================

const searchInput =
document.querySelector("#searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        let filter =
        searchInput.value.toLowerCase();

        let cards =
        document.querySelectorAll(".category-card");

        cards.forEach((card) => {

            let product =
            card.querySelector("p")
            .innerText.toLowerCase();

            if(product.includes(filter)){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }

        });

    });

}

// =========================
// VEHICLE SEARCH BUTTON
// =========================

const vehicleButton =
document.querySelector(".vehicle-search button");

if(vehicleButton){

    vehicleButton.addEventListener("click", () => {

        const selects =
        document.querySelectorAll(
            ".vehicle-search select"
        );

        let year = selects[0].value;
        let make = selects[1].value;
        let model = selects[2].value;
        let engine = selects[3].value;

        alert(
            "Searching for:\n" +
            year + " " +
            make + " " +
            model + " " +
            engine
        );

    });

}

// =========================
// FEEDBACK FORM
// =========================

const feedbackBtn =
document.querySelector(".submit-btn");

if(feedbackBtn){

    feedbackBtn.addEventListener("click", () => {

        alert(
            "Thank you for your feedback!"
        );

    });

}

// =========================
// CONTACT FORM
// =========================

const contactForm =
document.querySelector(".contact form");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Message sent successfully!"
        );

        contactForm.reset();

    });

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("a[href^='#']")
.forEach((anchor) => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"
        });

    });

});

// =========================
// PAGE LOADED
// =========================

window.addEventListener("load", () => {

    console.log(
        "Majestic Motor Spares Loaded"
    );

});