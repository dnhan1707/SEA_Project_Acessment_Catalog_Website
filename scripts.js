
//Data Set
let coffee_data = [
    {
        name: "Ethiopian Yirgacheffe",
        description: "Known for its floral and fruity flavors with a hint of wine-like acidity. Ethiopian Yirgacheffe coffee beans are grown in the Yirgacheffe region of Ethiopia, where they are handpicked and processed using traditional methods.",
        rating: 4.5,
        price: 20,
        in_stock: true,
        url: "./img/ethiopian_yirgacheffe.jpg"
    },
    {
        name: "Colombian Supremo",
        description: "Medium-bodied with a balanced acidity and notes of caramel and nuts. Colombian Supremo coffee beans are sourced from high-altitude regions of Colombia, where they are carefully harvested and processed to preserve their quality.",
        rating: 4.2,
        price: 18,
        in_stock: false,
        url: "./img/colombian_supremo.jpg"
    },
    {
        name: "Costa Rican Tarrazu",
        description: "Full-bodied with bright acidity, offering flavors of citrus and chocolate. Costa Rican Tarrazu coffee beans are grown in the Tarrazu region of Costa Rica, known for its rich volcanic soil and ideal climate for coffee cultivation.",
        rating: 4.3,
        price: 22,
        in_stock: false,
        url: "./img/costa_rican_tarrazu.jpg"
    },
    {
        name: "Brazilian Santos",
        description: "Smooth and nutty with low acidity, featuring chocolate and caramel undertones. Brazilian Santos coffee beans are sourced from various regions of Brazil, where they are carefully selected and processed to deliver a consistent flavor profile.",
        rating: 4.0,
        price: 16,
        in_stock: true,
        url: "./img/brazilian_santos.jpg"
    },
    {
        name: "Kenyan AA",
        description: "Bright and acidic with fruity notes, often described as complex and winey. Kenyan AA coffee beans are grown at high altitudes in Kenya's central highlands, where they benefit from rich volcanic soil and ample rainfall.",
        rating: 4.4,
        price: 24,
        in_stock: false,
        url: "./img/kenyan_aa.jpg"
    },
    {
        name: "Guatemalan Antigua",
        description: "Medium-bodied with a rich, chocolatey flavor and a hint of spice. Guatemalan Antigua coffee beans are cultivated in the Antigua region of Guatemala, known for its fertile soil and ideal climate for coffee production.",
        rating: 4.1,
        price: 19,
        in_stock: true,
        url: "./img/guatemalan_antigua.jpg"
    },
    {
        name: "Sumatran Mandheling",
        description: "Bold and earthy with a syrupy body and herbal undertones. Sumatran Mandheling coffee beans are grown on the island of Sumatra in Indonesia, where they are processed using the unique wet-hulling method to enhance their flavor.",
        rating: 4.3,
        price: 21,
        in_stock: false,
        url: "./img/sumatran_mandheling.jpg"
    },
    {
        name: "Jamaican Blue Mountain",
        description: "Smooth and mild with a balanced acidity, prized for its rarity and sweetness. Jamaican Blue Mountain coffee beans are cultivated in the Blue Mountains of Jamaica, where they benefit from the region's high elevation and cool climate.",
        rating: 4.6,
        price: 30,
        in_stock: false,
        url: "./img/jamaican_blue_mountain.jpg"
    },
    {
        name: "Hawaiian Kona",
        description: "Mild and delicate with a bright acidity, offering subtle floral and fruity notes. Hawaiian Kona coffee beans are grown in the Kona district of Hawaii's Big Island, where they are handpicked and sun-dried to preserve their unique flavor profile.",
        rating: 4.5,
        price: 28,
        in_stock: true,
        url: "./img/hawaiian_kona.jpg"
    }
];



function show_posts(){
    const post_container = document.getElementById("post-container");
    post_container.innerHTML = "";
    const templated_post = document.querySelector(".post");

    //Apply all kind of filter, if filter is not used, it return the original data
    let filtered_post = filter_by_search(coffee_data);  
    filtered_post = apply_filters(filtered_post);
    filtered_post = apply_sort(filtered_post);
    // console.log("filtered post", filtered_post);

    for(let i = 0; i < filtered_post.length; i++){
        let post_object = filtered_post[i];                     //get each post from the data

        const edited_post = templated_post.cloneNode(true); //copy the templated post to edit
        edit_post_content(edited_post, post_object, i);        //edit the post
        post_container.appendChild(edited_post)             //add the the data
    }
    
}

//CRUD

//Show new post
function show_add_newpost_form(){
    document.getElementById("add_new_post").style.display = "block";
}

//Edit the new post templated div
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
    coffee_data.push(new_post);
    document.getElementById("add_new_post").style.display = "none";
    show_posts();
}

document.addEventListener("DOMContentLoaded", show_posts);


//Remove
function remove_post(event)
{
    const post_id = event.closest('.post').id;
    console.log("Remove with id: ", post_id);

    coffee_data.splice(post_id, 1);
    show_posts();
}


//Update

//Put all the orginal info of that post into the update form
function show_update_post_form(obj){
    disable_other_update_btn(obj);
    const post_id = obj.closest('.post').id;
    console.log("Updating post: ", post_id);
    const post_to_update = document.getElementById(post_id)
    post_to_update.querySelector("#update_post_form").style.display = "block";

    post_to_update.querySelector("#update_title").value = coffee_data[post_id].name;
    post_to_update.querySelector("#update_description").value = coffee_data[post_id].description;
    post_to_update.querySelector("#update_rating").value = coffee_data[post_id].rating;
    post_to_update.querySelector("#update_price").value = coffee_data[post_id].price;
    post_to_update.querySelector("#update_url").value = coffee_data[post_id].url;
    
}


//Update the post  after submit the update form
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

    coffee_data[post_id].name = new_title;
    coffee_data[post_id].description = new_des;
    coffee_data[post_id].rating = new_rating;
    coffee_data[post_id].price = new_price;
    coffee_data[post_id].url = new_url;
    coffee_data[post_id].in_stock = new_availability;

    post_to_update.querySelector("#update_post_form").style.display = "none";
    enable_all_update_btn();
    show_posts();
}


//Search
function get_input_from_search(){
    const search_input = document.querySelector(".search-input").value.toLowerCase();

    console.log("input", search_input);
    return search_input;
}

//Edit template post
function edit_post_content(edited_post, post_object, index){
    const post_title = edited_post.querySelector("h1");
    post_title.textContent = post_object.name;


    const post_description = edited_post.querySelector("h3");
    post_description.textContent = post_object.description;

    // const post_availability = edited_post.querySelector("h3");
    // post_availability.textContent = post_object.in_stock;

    const post_price = edited_post.querySelector("p");
    post_price.textContent = "Price: " + post_object.price + "$";

    const post_image = edited_post.querySelector("img");
    post_image.src = post_object.url;

    edited_post.style.display = "block"
    edited_post.id = index;
    console.log(edited_post.id);

}

function disable_other_update_btn(obj){
    const updateButtons = document.querySelectorAll('.show-update-post-form-btn');
    const remove_btn = document.querySelectorAll(".remove-btn");

    updateButtons.forEach(button => {
        if (button !== obj) {
            button.disabled = true;
        }
    });

    remove_btn.forEach(button => {
        if (button !== obj) {
            button.disabled = true;
        }
    });
}

function enable_all_update_btn(){
    const updateButtons = document.querySelectorAll('.show-update-post-form-btn');
    const remove_btn = document.querySelectorAll(".remove-btn");

    updateButtons.forEach(button => {
        button.disabled = false;
    });

    remove_btn.forEach(button => {
        button.disabled = false;
    });
}

function unclick_all_sort_check_box(){
    const sort_boxes = document.querySelectorAll(".sort-check-box")

    sort_boxes.forEach(check_box => {
        check_box.checked = false;
    });
    show_posts();
}

//Apply filter
function apply_filters(coffee_data) {
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

    let filtered_data = coffee_data;

    filters.forEach(filter => {
        const check_box = document.getElementById(filter.id);

        if(check_box.checked == true){
            filtered_data = filtered_data.filter(filter.filter_func);
        }
    });

    return filtered_data;
}


//Searching
function filter_by_search(coffee_data) {
    const input = get_input_from_search();
    if (!input) {
        return coffee_data; // Return the original data if no input is provided
    }

    const filtered_data = coffee_data.filter(post => {
        // Check if the coffee name contains the search term (case-insensitive)
        return post.name.toLowerCase().includes(input);
    });

    return filtered_data; // Return the filtered data
}

//Sort functions
function apply_sort(coffee_data){
    const sort_checkboxes = document.querySelectorAll(".sort-check-box");

    let selected_checked_box = null;

    sort_checkboxes.forEach(check_box => {
        if(check_box.checked){
            selected_checked_box = check_box.id;
        }
    });

    switch (selected_checked_box) {
        case "sort-by-best-selling":
            return sort_by_best_selling(coffee_data);
        case "sort-by-price-low-to-high":
            return sort_by_price_low_to_high(coffee_data);
        case "sort-by-price-high-to-low":
            return sort_by_price_high_to_low(coffee_data);
        case "sort-by-alpha-A-Z":
            return sort_by_alpha_A_Z(coffee_data);
        case "sort-by-alpha-Z-A":
            return sort_by_alpha_Z_A(coffee_data);
        default:
            return coffee_data;
    }
}

function sort_by_best_selling(coffee_data){
    return coffee_data.slice().sort(function(a, b){return b.rating - a.rating});
}

function sort_by_price_low_to_high(coffee_data){
    return coffee_data.slice().sort(function(a, b){return a.price - b.price});
}

function sort_by_price_high_to_low(coffee_data){
    return coffee_data.slice().sort(function(a, b){return b.price - a.price});
}

function sort_by_alpha_A_Z(coffee_data){
    return coffee_data.slice().sort(function(a, b){
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


function sort_by_alpha_Z_A(coffee_data){
    return coffee_data.slice().sort(function(a, b){
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