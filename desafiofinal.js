function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (idade > 18) {
                resolve("Maior que 18")
            } else {
                reject("Menor que 18")
            }
        }, 2000)
    })
}

checaIdade(5)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });