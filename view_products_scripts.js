const FRESH_PRINCE_URL = "https://www.drinkuncharted.com/cdn/shop/files/hi_res-b0-Uncharted_Coffee_Supply_Inc_r1_04D_1084_1x1_e0c6090d-34a1-4a2d-b144-600e436bf877.jpg?crop=center&height=2000&v=1698331289&width=2000";
const CURB_POSTER_URL = "https://www.drinkuncharted.com/cdn/shop/files/AR700401_1.jpg?v=1698331703&width=2000";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";



//Data Set
let post_data = [
    {
        name: "Coffee 1",
        description: "This is des of coffee 1",
        avalaible_location: "Vietnamese",
        price: "13$",
        url: FRESH_PRINCE_URL
    },

    {
        name: "Coffee 2",
        description: "This is des of coffee 2",
        avalaible_location: "Vietnamese",
        price: "10$",
        url: CURB_POSTER_URL
    },
    {
        name: "Coffee 3",
        description: "This is des of coffee 3",
        avalaible_location: "Vietnamese",
        price: "14$",
        url: EAST_LOS_HIGH_POSTER_URL
    }
]


function view_post_detail(event){
    const post_id = event.closest('.post').id;
    window.location.href = 'view_product.html?id=' + post_id;
}

function show_product_detail(id){
    console.log("get to show product");
    const product_info = post_data[id]; // get data by ID

    const product_container = document.getElementById("product-detail-container");
    product_container.innerHTML = "";
    const templated_product_detail = document.querySelector(".product-detail"); //copy the templated product to edit

    const edited_product_detail = templated_product_detail.cloneNode(true); //copy the templated product to edit
    edited_product_detail(edited_product_detail, product_info);
    product_container.appendChild(edited_product_detail);
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Call function to display product details based on postId
    show_product_detail(postId);
});


function edited_product_detail(edited_post, post_object){
    const product_title = edited_post.getElementByClass("");
    product_title.textContent = post_object.name;
    edited_post.style.display = "block";
    
    // const product_title = edited_post.querySelector("");
    // product_title.textContent = post_object.name;

    // const product_title = edited_post.querySelector("");
    // product_title.textContent = post_object.name;

    // const product_title = edited_post.querySelector("");
    // product_title.textContent = post_object.name;
}
