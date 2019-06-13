var ulElement = document.querySelector("ul");
var inputElement = document.querySelector("body input");
var btnElement = document.querySelector("body button");

btnElement.onclick = onSearchClick;

function onSearchClick() {
    ulElement.innerHTML = '<li>Carregando...</li>';
    axios.get("https://api.github.com/users/"+inputElement.value+"/repos")
        .then(function (response) {
            ulElement.innerHTML = '';
            for (repo of response.data) {
                const textElement = document.createTextNode(repo.name);
                const liElement = document.createElement('li');
                liElement.appendChild(textElement);
                ulElement.appendChild(liElement);
            }
        })
        .catch(function (error) {
            if (error.response.status === 404) {
                ulElement.innerHTML = "Usuário inexistente!"
            }
            console.log('deu ruim ' + error);
        })
}