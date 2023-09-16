const section = document.querySelectorAll('main section');
const links = document.querySelectorAll('.navlist ul li a');
const navbar = document.querySelector('header');

window.onscroll = () => {
    section.forEach(s => {
        let top = window.scrollY;
        let offset = s.offsetTop - 150;
        let height = s.offsetHeight;
        let id = s.getAttribute('id');
        let nav = navbar.clientHeight * 1.5;

        if(top > nav){
            navbar.classList.add('fixed-navbar-top');
        }
        else {
            navbar.classList.remove('fixed-navbar-top');
        }

        if(top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navlist ul li a[href*='+ id +']').classList.add('active');
            });
        }

    });
};

/* program
class Program {
    main(){
        console.log('PRINT!')
    }
}

let p = new Program();
p.main();
*/