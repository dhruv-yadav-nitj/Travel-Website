const header = document.querySelector("header") ;
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 20)
});

/* This JavaScript code adds an event listener to the window object that listens for the "scroll" event. When the user scrolls the web page, it checks the vertical scroll position (window.scrollY) and toggles a CSS class on the <header> element based on the scroll position.

Here's a breakdown of what this code does:

It selects the <header> element in the HTML document using document.querySelector("header") and assigns it to the header variable.

It adds an event listener to the window object that listens for the "scroll" event. When the user scrolls the page, the function inside the event listener is executed.

Inside the event listener function, it checks if the window.scrollY value (the vertical scroll position in pixels) is greater than 60 pixels.

If the condition window.scrollY > 60 is true (meaning the user has scrolled more than 60 pixels down the page), it adds the "sticky" class to the <header> element using header.classList.toggle("sticky", true). This class is added to change the styling of the header, often used to make it "stick" to the top of the viewport when the user scrolls past a certain point.

If the condition is false (i.e., the user has scrolled less than or equal to 60 pixels), it removes the "sticky" class from the <header> element using header.classList.toggle("sticky", false).

In summary, this code makes the header element "sticky" (i.e., it sticks to the top of the page) when the user scrolls down more than 60 pixels, and it removes the "sticky" behavior when the user scrolls back up to or above 60 pixels. This is a common technique used for creating sticky headers in web design. */

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar') ;

menu.onclick = () => {
    menu.classList.toggle('bx-x') ;
    navbar.classList.toggle('open') ;
};