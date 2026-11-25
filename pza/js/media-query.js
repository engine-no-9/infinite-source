
const pizza_label = document.querySelector('.active');
const pizza_pie = document.querySelectorAll('.menu_item_pizza');
const cheese_burger = document.querySelectorAll('.menu_item_burger');
    
    
function labelReplace() {

const screenWidth = window.innerWidth;

if (screenWidth < 600) {
    
     pizza_label.innerText = 'Pizza';

  
} else if (screenWidth > 600) {
    
     pizza_label.innerText = 'Pizza Pie';
    
}


   
pizza_pie.forEach(pizza => {
    
    if (screenWidth > 960) {

     pizza.style.display = "none";
      
     // pizza.style.width = '70%';
      
} else if (screenWidth > 768 && screenWidth < 960) {
    

     console.log('hello 1')

     // pizza.style.width = '50%';


} else {

        pizza.style.display = "block";

   

}

})




cheese_burger.forEach(pizzas => {
    
    if (screenWidth > 610) {
      
     pizzas.style.width = '190px';
      
} else if (screenWidth < 610)
    
     pizzas.style.width = '30vh';
})


}    


// window.addEventListener("load resize", labelReplace);

["DOMContentLoaded", "resize"].forEach(eventType => {
  window.addEventListener(eventType, labelReplace);
});