text = document.getElementById("texto-entrada").textContent.toLowerCase();


function searchLetters(text) {
    //TODO este metodo permite pasar todas las letras a minisculas y ademas guardas dentro de un array, separadas por un espacio vacio
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
    results = [];
    for (i=0; i < alphabet.length; i++) {
        resultHtml = document.getElementById("resultados");
        let letter = alphabet[i]; 
        let n = text.split(letter).length - 1;   
        results.push(`${letter} ${n}`);
        resultHtml.innerHTML = resultHtml.innerHTML + `<p><strong>${letter} ${n}</strong></p><br>`
    }
    return results;
}

function searchWord(text) {
    //TODO este metodo permite pasar todas las palabras a minisculas y ademas guardas dentro de un array, separadas por un espacio vacio
    let textmodify = text.replace(/[0-9.,:\r\s]/gm," ").split(" ");
    let notduplicated = [...new Set(textmodify)];
    results = [];
    for (i=1; i < notduplicated.length; i++) {
        resultHtml = document.getElementById("resultados2");
        let word = notduplicated[i]; 
        let n = text.split(word).length - 1;   
        results.push(`${word} ${n}`);
        resultHtml.innerHTML = resultHtml.innerHTML + `<p><strong>${word} ${n}</strong></p><br>`
    }
    return results;
}

console.log(searchLetters(text));
console.log(searchWord(text));