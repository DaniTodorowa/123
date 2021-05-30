function rectangle(w, h, c) {

    let rect = {}
    rect.width = w;
    rect.height = h;
    rect.color = getColour(c);
   rect.calcArea = function () {
       return this.width * this.height;
   }
    return rect

    function getColour(x) {
        let resColour = x[0].toUpperCase() + x.substring(1);
        return resColour;//console.log(resColour);
    }

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
