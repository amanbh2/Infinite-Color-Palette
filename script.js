strips = document.querySelectorAll('.strips');
c_tags = document.querySelectorAll('h3');

strips.forEach(changecolor);
strips.forEach(fillcolor);

c_tags.forEach(copycolor);


document.body.onkeydown = function(e){
    if(e.keyCode == 32 && e.target == document.body){
        e.preventDefault();
        strips.forEach(changecolor);
    }
}
function fillcolor(box){
    box.addEventListener("click", function() {
        changecolor(box);
    });
}
function changecolor(box){
    generateColor();
    box.style.backgroundColor = hex;
    c= box.children;
    c[0].innerHTML=hex;
}
function copycolor(tag) {
    tag.addEventListener("click", function(e){
        var text = tag.innerText;
        var elem = document.createElement("textarea");
        document.body.appendChild(elem);
        elem.value = text;
        elem.select();
        document.execCommand("copy");
        document.body.removeChild(elem);
        e.stopPropagation();
    });
}

function generateColor(){
    r=Math.ceil((Math.random())*255);
    g=Math.ceil((Math.random())*255);
    b=Math.ceil((Math.random())*255);
    rh=Number(r).toString(16);
    if (r<16){
        rh = "0"+rh;
    }
    gh=Number(g).toString(16);
    if (g<16){
        gh = "0"+gh;
    }
    bh=Number(b).toString(16);
    if (b<16){
        bh = "0"+bh;
    }
    hex="#"+rh+gh+bh
}

