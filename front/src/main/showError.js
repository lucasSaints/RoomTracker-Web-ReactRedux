export function show(stringNomeDaClasse, texto) {
    var x = document.getElementById("snackbarra");
    x.innerText=texto;
    x.className = stringNomeDaClasse;
    setTimeout(function(){ x.className = x.className.replace(stringNomeDaClasse, ""); }, 4200);
}