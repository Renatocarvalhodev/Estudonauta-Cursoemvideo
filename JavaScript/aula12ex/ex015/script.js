function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano') 
    var res = document.querySelector('div#res')  
    if ( fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}