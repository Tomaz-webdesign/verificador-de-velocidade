function calculo() {

var num1 =window.document.getElementById('text1')

var res =window.document.getElementById('mens')



var vel = Number(num1.value)


 res.style.color="yellow"

if ( vel <= 60 ) {

res.innerHTML=(`Dirija sempre usando cinto e segurança!`)


}

else if( vel <= 80 ) {

    res.innerHTML=(`Voçê está multado Infração grave 5 pontos!`)
}

else {

    res.innerHTML=(`Voçê está voando nas rodovias multado infração gravissima 7 pontos!`)
}


}
