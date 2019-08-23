/**
 * Consumindo Endpoint usando AJAX
 */

var xhr = new XMLHttpRequest();

xhr.open('GET' , 'https://api.github.com/users/willbigas'); // 
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // 4 - Voltou resposta
        console.log(JSON.parse(xhr.responseText));
    }
}

