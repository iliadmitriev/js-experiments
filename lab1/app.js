// Учебный файл

var div=document.querySelector("#text");

//print_object_fields(text);

function print_object_fields(obj){
var res='';

res += '<ol>';

for (prop in obj.style) {
        res += '<li><b>'+ prop + '</b> - ' + obj[prop] + '</li>';
    }
    
res += '</ol>';

document.write(res);

}

div.onclick = function() {
    div.style.color = 'red';
    div.innerHTML='ура!';
    div.className = 'test';
    div.style.fontSize = '30px';
}