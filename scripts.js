

const FRESH_PRINCE_URL = "https://www.drinkuncharted.com/cdn/shop/files/hi_res-b0-Uncharted_Coffee_Supply_Inc_r1_04D_1084_1x1_e0c6090d-34a1-4a2d-b144-600e436bf877.jpg?crop=center&height=2000&v=1698331289&width=2000";
const CURB_POSTER_URL = "https://www.drinkuncharted.com/cdn/shop/files/AR700401_1.jpg?v=1698331703&width=2000";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";



//Data Set
let post_data = [
    {
        name: "Coffee 1",
        description: "This is des of coffee 1",
        avalaible_location: "Vietnamese",
        url: FRESH_PRINCE_URL
    }
]

function show_posts(){
    console.log("in show post");
    const post_container = document.getElementById("post_container");
    post_container.innerHTML = "";
    const templated_post = document.querySelector(".post");

    for(let i = 0; i < post_data.length; i++){
        let post_object = post_data[i];                     //get each post from the data

        const edited_post = templated_post.cloneNode(true); //copy the templated post to edit
        edit_post_content(edited_post, post_object, i);        //edit the post
        post_container.appendChild(edited_post)             //add the the data
    }
}

function show_add_newpost_form(){
    document.getElementById("add_new_post").style.display = "block";
}


document.addEventListener("DOMContentLoaded", show_posts);

function add_post(){
    const add = document.getElementById("add_new_post");
    if(add){
        const new_post_title = document.getElementById("new_post_title").value;
        const new_post_description = document.getElementById("new_post_description").value;
        const new_post_available_location = document.getElementById("new_post_available_location").value;
        const new_post_image_url = document.getElementById("new_post_image_url").value;
    
        const new_post = {
            name: new_post_title,
            description: new_post_description,
            avalaible_location: new_post_available_location,
            url: new_post_image_url
        }
        // Add new post to post_data array
        post_data.push(new_post);
        document.getElementById("add_new_post").style.display = "none";
        show_posts();
    }
}

function remove_post()
{
    
}
function edit_post_content(edited_post, post_object, index){
    const post_title = edited_post.querySelector("h1");
    post_title.textContent = post_object.name;

    const post_des = edited_post.querySelector("h2");
    post_des.textContent = post_object.description;

    const post_available_location = edited_post.querySelector("h3");
    post_available_location.textContent = post_object.avalaible_location;

    const post_image = edited_post.querySelector("img");
    post_image.src = post_object.url;

    edited_post.style.display = "block"
    edited_post.id = index;
    console.log(edited_post.id);

}

