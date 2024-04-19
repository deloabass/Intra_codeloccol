const navbarDiv = document.getElementById('NAV')
let scroll =false;
navbarDiv.addEventListener('mouseenter' , () =>{
  
        const navbars = navbarDiv.querySelectorAll('.navbar');
        navbars.forEach(nav => {
            const links = nav.querySelectorAll('a');
            nav.style.background = 'rgba(92, 153, 245, 0.856)';
            links.forEach(link => {
                link.style.color = 'white';
            });
        })
   
    
})

navbarDiv.addEventListener('mouseleave' , () =>{
    if (!scroll){
        const navbars = navbarDiv.querySelectorAll('.navbar');
        navbars.forEach(nav => {
            const links = nav.querySelectorAll('a');
            nav.style.background = 'transparent';
            links.forEach(link => {
                link.style.color = '';
            });
        })
    }
})

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navbars = document.querySelectorAll('.navbar');
    navbars.forEach(nav => {
        const links = nav.querySelectorAll('a');
        if (scrollPosition > 100) {
            scroll = true;
            nav.style.background = 'rgba(92, 153, 245, 0.856)';
            links.forEach(link => {
                link.style.color = 'white';
            });
        } else {
            scroll = false;
            nav.style.background = 'transparent';
            links.forEach(link => {
                link.style.color = ''; 
            });
        }
    });
});
