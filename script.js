const botao = document.getelementsbyid('btnTema');

function alterarmodoescuro() {

    document.body.classlist.togle('modo-escuro');

}

botao.addeventlistener('click', alterarmodoescuro);

if (document.body.classlist.contains('modo-escuro')){

    botao.textcontent = "modo claro";

} else {

    botao.textcontent = "modo escuro";

}
