function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    
    if (!menu || !icon) {
        console.error("Menu or icon not found");
        return;
    }


    menu.classList.toggle("open");  
    icon.classList.toggle("open");


}





// function toggleMenu() {
//     // Select the menu and icon elements
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");

//     // Check if elements are found
//     if (!menu || !icon) {
//         console.error("Menu or icon not found");
//         return;
//     }

//     // Log the current class lists before toggling
//     console.log("Before toggle - Menu classes:", menu.classList.toString());
//     console.log("Before toggle - Icon classes:", icon.classList.toString());

//     // Toggle the 'open' class on menu and icon
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");

//     // Log the class lists after toggling
//     console.log("After toggle - Menu classes:", menu.classList.toString());
//     console.log("After toggle - Icon classes:", icon.classList.toString());
// }

// // Example usage (attach to a button click event)
// document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);