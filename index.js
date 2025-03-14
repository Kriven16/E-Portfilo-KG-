// template_t37ax3i
// service_9l2324l
// tQESV_K5VkYV1fyjx
let isModalOpen= false
let constrastToggle=false
const scaleFactor=1/20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      // Added rotate after tutorial
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }
function toggleContrast(){
    constrastToggle=!constrastToggle
    if(constrastToggle){

        document.body.classList+= " dark-theme"
    }else{
        document.body.classList.remove("dark-theme")
    }
}
function contact(event){

    event.preventDefault();
    const loading =document.querySelector('.modal__overlay--loading')
    const success=document.querySelector('.modal__overlay--success')
    loading.classList+= " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_9l2324l',
            'template_me870m9',
            event.target,
            'tQESV_K5VkYV1fyjx'

        ).then(()=> {
            // throw new Error("error")
            loading.classList.remove("modal__overlay--visible");
            success.classList+=" modal__overlay--visible"
            
        }).catch(() =>{
            
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is directly unavailable .Please contact me directly @kriven.govender07@gmail.com"
            )
                
            
        })
   
   
}

function toggleModal(){
   
    if(isModalOpen){
        isModalOpen=false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    
   document.body.classList +=" modal--open"
    
}