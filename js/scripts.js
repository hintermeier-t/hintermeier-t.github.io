import en from '../assets/content.json';
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function fetchJSONData(lang) {
    
    console.log(en);
    }
window.addEventListener('DOMContentLoaded', event => {
var french = true;
        var el = document.getElementById("language");
        console.log(el);
        el.onclick = (
            function () {
                if (french) {
                    console.log(fetchJSONData("en"));
                    french = false;
                }else{
                    console.log(fetchJSONData("fr"));
                    french = true; 
                }
            }
        )
        
    
});