// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
// const rows = document.querySelectorAll('tbody tr');
//    function onClick() {
//       const input = document.querySelector('#searchField').value.toLowerCase();
//       for(let row of rows) {
//          if(row.textContent.toLowerCase().includes(input)){
//             row.classList.add('select');
//          }else {
//             row.removeAttribute('class');
//          }
//       }
//    }
// }

// function solve(){
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
//
//    const rows = document.querySelectorAll('tbody tr');
//
//    function onClick(){
//       const input = document.querySelector('#searchField').value.toLowerCase();
//       for(let row of rows){
//          if(row.textContent.toLowerCase().includes(input)){
//             row.setAttribute('class','select');
//          }else {
//             row.removeAttribute('class');
//          }
//       }
//    }
//
// }
function solve(){
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const input = document.getElementById('searchField');
   const rows = document.querySelectorAll('tbody tr')
   function onClick() {

         for (let cell of rows) {
            if ((cell.textContent).toLowerCase().includes((input.value).toLowerCase())) {
               cell.setAttribute('class', 'select');
            } else {
               cell.removeAttribute('class');
            }
         }

   }

}