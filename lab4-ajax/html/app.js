window.onload = function() {

    document.querySelector('#send').onclick = function() {

        let params = new Object();
        let myform = document.appForm;
        for(i = 0; i < myform.elements.length; i++) {
            if ( myform.elements[i].name != '') {
                params[ myform.elements[i].name ] = myform.elements[i].value;
            }
        }
        let esc = encodeURIComponent;
        let query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        getAjax('app.php',query, function(response){
            if (response.status == 200) {
                document.querySelector('#result').innerHTML = response.response.message;
                //document.appForm.style.display='none';            
            } else
            {
                document.querySelector('#result').innerHTML = response.response.message;
            }
        });
    }
}

function getAjax(url, post, callback) {
    var xhr = new XMLHttpRequest();
    var callback_function = callback || function(response) {};
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback_function(xhr.response);
        }
    }
    
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.send(post);

}