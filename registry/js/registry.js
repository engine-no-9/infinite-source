
let filterInput = document.getElementById('filterInput');

    

const filterNames = document.addEventListener('input', (event) => {
    
let filterVal = document.getElementById('filterInput').value.toUpperCase();

let ul = document.getElementById('names');
 
let li = ul.querySelectorAll('li.collection-item');

let letterHeader = ul.querySelectorAll('li.collection-header');



    
for (let i = 0; i < li.length; i++) {
    
 let a = li[i].getElementsByTagName('a')[0];
  
 if (a.innerHTML.toUpperCase().indexOf(filterVal) > -1) {
  
 li[i].style.display = '';
   
 } else {
   
 li[i].style.display = 'none';   
   
}

}
 

for (let j = 0; j < letterHeader.length; j++) {

let b = letterHeader[j].querySelector('H4');

if (b.innerHTML.indexOf(filterVal) > -1) { 

letterHeader[j].style.display = 'block'; 

} else {

letterHeader[0].style.display = letterHeader[1].style.display = letterHeader[2].style.display = letterHeader[3].style.display = 'none';

} 

}

})


// When filtering, clearing an input returns the default content because an empty string ("") is considered a substring of every possible string.

filterInput.addEventListener('keyup', filterNames);