export default function accordionListInit(){
  const classActive = 'active';
  const accordionList = document.querySelectorAll('.js-accordion dt');
  
    if(accordionList.length){
      accordionList[0].classList.add(classActive);
      accordionList[0].nextElementSibling.classList.add(classActive);

      function activeAccordion(){
        this.classList.toggle(classActive);
        this.nextElementSibling.classList.toggle(classActive);
      }
      accordionList.forEach((item) =>{
        item.addEventListener('click', activeAccordion);
      });
    }
}