const button = document.querySelector('button');

button.onclick = function(){
    const lamp = document.getElementById('l');
    if (lamp.style.visibility === 'hidden'){
        lamp.style.visibility = 'visible';
        button.style.color = 'hsl(139deg 59% 55%)';
        button.style.borderColor = 'hsl(139deg 59% 55%)';
        button.style.transform = 'scale(1.1)';
    }
    else{
        lamp.style.visibility = 'hidden';
        button.style.color = 'rgb(252, 252, 90)';
        button.style.borderColor = 'rgb(252, 252, 90)';
        button.style.transform = 'scale(1.1)';
    } 
}



