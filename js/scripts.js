/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
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

    // Retreive github pinned repos for the projects section
    // reload_gh_pinned();
});

var btn = document.querySelector('#downloadBtn')

function startDownload() {
  btn.addEventListener('click', function() {
    this.classList.add('is-active')
    window.open('assets/Kyle_Levy_Resume.pdf', '_self');
    setTimeout(function() {
      btn.classList.add('dl-completed')
      btn.classList.add('animation-ended')
    }, 1200)
  })
}

function reload_gh_pinned(){
    var projectContent = document.getElementById('gh-pinned');
        
    fetch('https://gh-pinned-api.vercel.app/api?user=kylelevy').then(
    json => json.json()
    ).then(callback => { 
       var results = callback;

       for (i=0; i<6; i++)
       {
            html = `
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                 <div class="flex-grow-1">
                     <a href="`+results[i].url+`"><h3 class="mb-0">`+results[i].name+`</h3></a>
                     <div>`+results[i].description+`</div>
                 </div>
             </div>
            `;
            projectContent.insertAdjacentHTML('afterend', html);
        }
       
    })
}

startDownload();