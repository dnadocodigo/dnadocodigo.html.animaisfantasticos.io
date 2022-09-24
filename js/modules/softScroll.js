export default function softScrollInit(){
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function softScroll(event){
    event.preventDefault();
   const hrefs = event.currentTarget.getAttribute('href');
   const sections = document.querySelector(hrefs);

   sections.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
   });

    // Método altenativo
        // const top = sections.offsetTop;

        // window.scrollTo({
        //     top : top,
        //     behavior: 'smooth'
        // });

  }

  links.forEach((link)=>{
    link.addEventListener('click', softScroll);
  });
}