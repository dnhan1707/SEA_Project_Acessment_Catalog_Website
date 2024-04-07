
// const FRESH_PRINCE_URL = "./img/coffee_1";
// const CURB_POSTER_URL = "https://unsplash.com/fr/photos/une-personne-utilisant-un-telephone-cellulaire-sur-un-comptoir-hKPFjrNmoHU";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";



//Data Set
let post_data = [
    {
        name: "Coffee 1",
        description: "This is des of coffee 1",
        rating: 3.5,
        price: 13,
        in_stock: false,
        url: "./img/coffee_1.jpg"
    },
    {
        name: "Coffee 2",
        description: "This is des of coffee 2",
        rating: 4,
        price: 10,
        in_stock: true,
        url: "./img/coffee_2.jpg"
    },
    {
        name: "Coffee 3",
        description: "This is des of coffee 3",
        rating: 2,
        price: 14,
        in_stock: true,
        url: "./img/coffee_3.jpg"
    },
    {
        name: "Coffee 4",
        description: "This is des of coffee 1",
        rating: 5,
        price: 23,
        in_stock: false,
        url: "./img/coffee_1.jpg"
    },
    {
        name: "Coffee 5",
        description: "This is des of coffee 2",
        rating: 4.5,
        price: 45,
        in_stock: true,
        url: "./img/coffee_2.jpg"
    },
    {
        name: "Coffee 6",
        description: "This is des of coffee 3",
        rating: 4.5,
        price: 56,
        in_stock: true,
        url: "./img/coffee_3.jpg"
    },
    {
        name: "Coffee 7",
        description: "This is des of coffee 1",
        rating: 3,
        price: 3,
        in_stock: false,
        url: "./img/coffee_1.jpg"
    },
    {
        name: "Coffee 8",
        description: "This is des of coffee 2",
        rating: 4,
        price: 4,
        in_stock: true,
        url: "./img/coffee_2.jpg"
    },
    {
        name: "Coffee 9",
        description: "This is des of coffee 3",
        rating: 3,
        price: 15,
        in_stock: true,
        url: "./img/coffee_3.jpg"
    }
];


function show_posts(){


    const post_container = document.getElementById("post-container");
    post_container.innerHTML = "";
    const templated_post = document.querySelector(".post");
    
    let filtered_post = applyFilters(post_data);
    filtered_post = apply_sort(filtered_post);
    console.log("filtered post", filtered_post);

    for(let i = 0; i < filtered_post.length; i++){
        let post_object = filtered_post[i];                     //get each post from the data

        const edited_post = templated_post.cloneNode(true); //copy the templated post to edit
        edit_post_content(edited_post, post_object, i);        //edit the post
        post_container.appendChild(edited_post)             //add the the data
    }
    
}

//CRUD

//Add new post
function show_add_newpost_form(){
    document.getElementById("add_new_post").style.display = "block";
}

function add_post(){
    const new_title = document.getElementById("title").value;
    const new_des = document.getElementById("description").value;
    const new_rating = document.getElementById("rating").value;
    const new_price= document.getElementById("price").value;
    const new_url = document.getElementById("url").value;

    let new_availability = false;

    var availability_check_box = document.getElementById("is-in-stock");
    if(availability_check_box.checked){
        new_availability = true;
    }

    const new_post = {
        name: new_title,
        description: new_des,
        rating: new_rating,
        price: new_price,
        in_stock: new_availability,
        url: new_url
    }
    post_data.push(new_post);
    document.getElementById("add_new_post").style.display = "none";
    show_posts();
}

document.addEventListener("DOMContentLoaded", show_posts);


//Remove
function remove_post(event)
{
    const post_id = event.closest('.post').id;
    console.log("Remove with id: ", post_id);

    post_data.splice(post_id, 1);
    show_posts();
}


//Update
function show_update_post_form(obj){
    disable_other_update_btn(obj);
    const post_id = obj.closest('.post').id;
    console.log("Updating post: ", post_id);
    const post_to_update = document.getElementById(post_id)
    post_to_update.querySelector("#update_post_form").style.display = "block";

    post_to_update.querySelector("#update_title").value = post_data[post_id].name;
    post_to_update.querySelector("#update_description").value = post_data[post_id].description;
    post_to_update.querySelector("#update_rating").value = post_data[post_id].rating;
    post_to_update.querySelector("#update_price").value = post_data[post_id].price;
    post_to_update.querySelector("#update_url").value = post_data[post_id].url;
    
}

function update(obj){
    const post_id = obj.closest('.post').id;
    const post_to_update = document.getElementById(post_id)

    const new_title = post_to_update.querySelector("#update_title").value;
    const new_des = post_to_update.querySelector("#update_description").value;
    const new_rating = post_to_update.querySelector("#update_rating").value;
    const new_price= post_to_update.querySelector("#update_price").value;
    const new_url = post_to_update.querySelector("#update_url").value;

    let new_availability = false;

    var availability_check_box = post_to_update.querySelector("#update-is-in-stock");
    if(availability_check_box.checked){
        new_availability = true;
    }

    post_data[post_id].name = new_title;
    post_data[post_id].description = new_des;
    post_data[post_id].rating = new_rating;
    post_data[post_id].price = new_price;
    post_data[post_id].url = new_url;
    post_data[post_id].in_stock = new_availability;

    post_to_update.querySelector("#update_post_form").style.display = "none";
    enable_all_update_btn();
    show_posts();
}

//Edit template post
function edit_post_content(edited_post, post_object, index){
    const post_title = edited_post.querySelector("h1");
    post_title.textContent = post_object.name;


    const post_description = edited_post.querySelector("h2");
    post_description.textContent = post_object.description;

    const post_availability = edited_post.querySelector("h3");
    post_availability.textContent = post_object.in_stock;

    const post_price = edited_post.querySelector("p");
    post_price.textContent = post_object.price + "$";

    const post_image = edited_post.querySelector("img");
    post_image.src = post_object.url;

    edited_post.style.display = "block"
    edited_post.id = index;
    console.log(edited_post.id);

}

function disable_other_update_btn(obj){
    const updateButtons = document.querySelectorAll('.show-update-post-form-btn');
    updateButtons.forEach(button => {
        if (button !== obj) {
            button.disabled = true;
        }
    });
}

function enable_all_update_btn(){
    const updateButtons = document.querySelectorAll('.show-update-post-form-btn');
    updateButtons.forEach(button => {
        button.disabled = false;
    });
}

//Apply filter
function applyFilters(post_data) {
    const filters = [
        {
            id: "range-smaller-10", 
            filter_func: post => post.price < 10
        },
        {
            id: "range-10-to-20", 
            filter_func: post => post.price >= 10 && post.price <= 20
        },
        {
            id: "range-20-to-30", 
            filter_func: post => post.price > 20 && post.price <= 30
        },
        {
            id: "range-larger-30", 
            filter_func: post => post.price > 30
        },
        {
            id: "instock-option", 
            filter_func: post => post.in_stock
        },
        {
            id: "out-of-stock-option", 
            filter_func: post => !post.in_stock
        }
    ];

    let filtered_data = post_data;

    filters.forEach(filter => {
        const check_box = document.getElementById(filter.id);

        if(check_box.checked == true){
            filtered_data = filtered_data.filter(filter.filter_func);
        }
    });

    return filtered_data;
}


//Sort functions
function apply_sort(post_data){
    const sort_checkboxes = document.querySelectorAll(".sort-check-box");

    let selected_checked_box = null;

    sort_checkboxes.forEach(check_box => {
        if(check_box.checked){
            selected_checked_box = check_box.id;
        }
    });

    switch (selected_checked_box) {
        case "sort-by-best-selling":
            return sort_by_best_selling(post_data);
        case "sort-by-price-low-to-high":
            return sort_by_price_low_to_high(post_data);
        case "sort-by-price-high-to-low":
            return sort_by_price_high_to_low(post_data);
        case "sort-by-alpha-A-Z":
            return sort_by_alpha_A_Z(post_data);
        case "sort-by-alpha-Z-A":
            return sort_by_alpha_Z_A(post_data);
        default:
            return post_data;
    }
}

function sort_by_best_selling(post_data){
    return post_data.slice().sort(function(a, b){return b.rating - a.rating});
}

function sort_by_price_low_to_high(post_data){
    return post_data.slice().sort(function(a, b){return a.price - b.price});
}

function sort_by_price_high_to_low(post_data){
    return post_data.slice().sort(function(a, b){return b.price - a.price});
}

function sort_by_alpha_A_Z(post_data){
    return post_data.slice().sort(function(a, b){
        const title_a = a.name.toLowerCase();
        const title_b = b.name.toLowerCase();

        //sort in order

        if(title_a < title_b){
            return -1;
        }
        if(title_a > title_b){
            return 1;
        }

        return 0;
    });
}


function sort_by_alpha_Z_A(post_data){
    return post_data.slice().sort(function(a, b){
        const title_a = a.name.toLowerCase();
        const title_b = b.name.toLowerCase();

        //sort in order

        if(title_a > title_b){
            return -1;
        }
        if(title_a < title_b){
            return 1;
        }

        return 0;
    });
}

function sort_checked_box_change(event){ 
    var check_boxes = document.getElementsByClassName("sort-check-box");
    
    for(var i = 0; i < check_boxes.length; i++){
        check_boxes[i].checked = false;
    }
    event.checked = true
    show_posts();
}