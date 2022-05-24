let bcolor;
let change;
let anchor = window.document.getElementById('anchor-1');

let sketch = function(p) {
    p.setup = function(){
      p.createCanvas(anchor.offsetWidth, anchor.offsetWidth);
      bcolor = 0;
      change = 1;
      p.background(bcolor);
    }
    p.draw = function(){
        p.background(bcolor);
        bcolor = bcolor + change;
        if (bcolor >= 255){
            change = -1;
        } else if (bcolor <= 0){
            change = +1;
        }
    }
};

new p5(sketch, anchor);

