const Accordions = document.querySelectorAll('.accordion');


for(let Accordion of Accordions) {
    
    Accordion.addEventListener('click', function() {
        
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('accActive');

    })

}