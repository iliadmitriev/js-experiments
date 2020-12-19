window.onload = function() {

    var btnGetIP = document.querySelector("#btn_get_ip");

    btnGetIP.onclick = function() {
        ajaxGet('ajax.php', function(response){
            document.querySelector("#myip").innerHTML = response.info.ip;
        });
    }

}

function ajaxGet(url, callback){

    var xhr = new XMLHttpRequest();
    
    var f = callback || function(data) {};

    xhr.onreadystatechange = function() {
        if ( xhr.readyState == 4 && xhr.status == 200 ) {
            f(xhr.response);
        }
    }
    
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    
}