// /**
//  * Data Catalog Project Starter Code - SEA Stage 2
//  *
//  * This file is where you should be doing most of your work. You should
//  * also make changes to the HTML and CSS files, but we want you to prioritize
//  * demonstrating your understanding of data structures, and you'll do that
//  * with the JavaScript code you write in this file.
//  * 
//  * The comments in this file are only to help you learn how the starter code
//  * works. The instructions for the project are in the README. That said, here
//  * are the three things you should do first to learn about the starter code:
//  * - 1 - Change something small in index.html or style.css, then reload your 
//  *    browser and make sure you can see that change. 
//  * - 2 - On your browser, right click anywhere on the page and select
//  *    "Inspect" to open the browser developer tools. Then, go to the "console"
//  *    tab in the new window that opened up. This console is where you will see
//  *    JavaScript errors and logs, which is extremely helpful for debugging.
//  *    (These instructions assume you're using Chrome, opening developer tools
//  *    may be different on other browsers. We suggest using Chrome.)
//  * - 3 - Add another string to the titles array a few lines down. Reload your
//  *    browser and observe what happens. You should see a fourth "card" appear
//  *    with the string you added to the array, but a broken image.
//  * 
//  */


const FRESH_PRINCE_URL = "https://www.drinkuncharted.com/cdn/shop/files/hi_res-b0-Uncharted_Coffee_Supply_Inc_r1_04D_1084_1x1_e0c6090d-34a1-4a2d-b144-600e436bf877.jpg?crop=center&height=2000&v=1698331289&width=2000";
const CURB_POSTER_URL = "https://www.drinkuncharted.com/cdn/shop/files/AR700401_1.jpg?v=1698331703&width=2000";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// // This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];
// // Your final submission should have much more data than this, and 
// // you should use more than just an array of strings to store it all.


// // This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");
    
//     for (let i = 0; i < titles.length; i++) {
//         let title = titles[i];

//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let imageURL = "";
//         if (i == 0) {
//             imageURL = FRESH_PRINCE_URL;
//         } else if (i == 1) {
//             imageURL = CURB_POSTER_URL;
//         } else if (i == 2) {
//             imageURL = EAST_LOS_HIGH_POSTER_URL;
//         }

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }

// function editCardContent(card, newTitle, newImageURL) {
//     card.style.display = "block";

//     const cardHeader = card.querySelector("h2");
//     cardHeader.textContent = newTitle;

//     const cardImage = card.querySelector("img");
//     cardImage.src = newImageURL;
//     cardImage.alt = newTitle + " Poster";

//     // You can use console.log to help you debug!
//     // View the output by right clicking on your website,
//     // select "Inspect", then click on the "Console" tab
//     console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }



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
        edit_post_content(edited_post, post_object);        //edit the post
        post_container.appendChild(edited_post)             //add the the data
    }
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
        show_posts();
    }
}

function edit_post_content(edited_post, post_object){
    const post_title = edited_post.querySelector("h1");
    post_title.textContent = post_object.name;

    const post_des = edited_post.querySelector("h2");
    post_des.textContent = post_object.description;

    const post_available_location = edited_post.querySelector("h3");
    post_available_location.textContent = post_object.avalaible_location;

    const post_image = edited_post.querySelector("img");
    post_image.src = post_object.url;

    console.log(post_object);

}

