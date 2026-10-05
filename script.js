/* =====================================
   SERVICES DATA
===================================== */

const services = [

    {
        name: "Dry Cleaning",
        price: 200,
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1000&q=80"
    },

    {
        name: "Ironing",
        price: 30,
        image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80"
    },

    {
        name: "Wash & Fold",
        price: 140,
        image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1000&q=80"
    },

    {
        name: "Leather & Suede Cleaning",
        price: 999,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80"
    },

    {
        name: "Wedding Dress Cleaning",
        price: 2400,
        image: "https://images.unsplash.com/photo-1594552072238-5c6b7f5f4c1a?auto=format&fit=crop&w=1000&q=80"
    },

    {
        name: "Stain Removal",
        price: 500,
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80"
    }

];


/* =====================================
   VARIABLES
===================================== */

let currentServiceIndex = 0;

let addedServices = [];

let totalPrice = 0;


/* =====================================
   HTML ELEMENTS
===================================== */

const serviceImageElement =
    document.getElementById("serviceImage");

const serviceNameElement =
    document.getElementById("serviceName");

const servicePriceElement =
    document.getElementById("servicePrice");

const addButtonElement =
    document.getElementById("addBtn");

const skipButtonElement =
    document.getElementById("skipBtn");

const cartElement =
    document.getElementById("cartItems");

const totalElement =
    document.getElementById("totalAmount");


/* =====================================
   SHOW SERVICE
===================================== */

function showCurrentService() {

    const service =
        services[currentServiceIndex];


    serviceNameElement.textContent =
        service.name;


    servicePriceElement.textContent =
        "₹" + service.price.toFixed(2);


    serviceImageElement.src =
        service.image;


    serviceImageElement.alt =
        service.name;

}


/* =====================================
   NEXT SERVICE
===================================== */

function showNextService() {

    currentServiceIndex++;

    if (
        currentServiceIndex >=
        services.length
    ) {
        currentServiceIndex = 0;
    }

    showCurrentService();

}


/* =====================================
   ADD ITEM
===================================== */

addButtonElement.addEventListener(
    "click",
    function () {

        const service =
            services[currentServiceIndex];


        /* Add service into cart */

        addedServices.push(service);


        /* Calculate total */

        totalPrice =
            totalPrice + service.price;


        /* Update cart */

        updateCart();


        /* Move to next service */

        showNextService();

    }
);


/* =====================================
   SKIP ITEM
===================================== */

skipButtonElement.addEventListener(
    "click",
    function () {

        showNextService();

    }
);


/* =====================================
   UPDATE CART
===================================== */

function updateCart() {

    /* Clear table */

    cartElement.innerHTML = "";


    /* If nothing added */

    if (addedServices.length === 0) {

        cartElement.innerHTML = `
            <tr>
                <td colspan="3" id="emptyCell">
                    No Items Added
                </td>
            </tr>
        `;

    }


    /* If items exist */

    else {

        addedServices.forEach(
            function (service, index) {

                const row =
                    document.createElement("tr");


                row.innerHTML = `
                    <td>
                        ${index + 1}
                    </td>

                    <td>
                        ${service.name}
                    </td>

                    <td>
                        ₹${service.price.toFixed(2)}
                    </td>
                `;


                cartElement.appendChild(row);

            }
        );

    }


    /* Update total */

    totalElement.textContent =
        "₹" + totalPrice.toFixed(2);

}


/* =====================================
   BOOK NOW
===================================== */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const message =
            document.getElementById(
                "bookingMessage"
            );


        if (addedServices.length === 0) {

            message.textContent =
                "Please add at least one service.";

            message.style.color =
                "red";

            return;

        }


        const customerName =
            document.getElementById(
                "fullName"
            ).value;


        message.textContent =
            "Thank you " +
            customerName +
            "! Your booking has been confirmed.";


        message.style.color =
            "green";

    }
);


/* =====================================
   LOGOUT
===================================== */

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        function () {

            alert("You have been logged out.");

        }
    );


/* =====================================
   INITIAL DISPLAY
===================================== */

showCurrentService();

updateCart();