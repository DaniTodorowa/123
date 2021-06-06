function extractText() {
   let itemNodes = document.querySelectorAll('ul#items li');
   let textarea = document.querySelector("#result");
   for(let node of itemNodes){
       textarea.value += node.textContent + "\n";
   }
}
function  extractText(){
    let elements = document.querySelectorAll('li');
    let elementsText = Array.from(elements).map(e=>e.textContent);
   let result = document.getElementById('result');
   result.value = elementsText.join('\n');

}
