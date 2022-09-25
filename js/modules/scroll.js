export default function scrollInit(){
  const classActive = 'active';
  function softScrollInit(){
    const links = document.querySelectorAll('.js-menu a[href^="#"]');
    
      function softScroll(event){
        event.preventDefault();
      const hrefs = event.currentTarget.getAttribute('href');
      const sectionsHref = document.querySelector(hrefs);
  
      sectionsHref.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  
        // Método altenativo
            // const top = sectionsHref.offsetTop;
  
            // window.scrollTo({
            //     top : top,
            //     behavior: 'smooth'
            // });
  
      }
  
      links.forEach((link)=>{
        link.addEventListener('click', softScroll);
      });
  }
  function ScrollanimeInit(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
      const halfWindow = window.innerHeight * 0.5;

      function scrollanimed(){
        sections.forEach((section) =>{
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisibility = (sectionTop - halfWindow) < 0;

          if(isSectionVisibility){
            section.classList.add(classActive);
          }
        })
      }
      scrollanimed();
      window.addEventListener('scroll', scrollanimed);
    }
  }

  softScrollInit();
  ScrollanimeInit();
}