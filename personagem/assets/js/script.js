const elementoMomento = document.querySelector('#momento')
const elementoImagem = document.querySelector('#imagem')
let elementoBotao = document.querySelector('#alterar')

elementoBotao.addEventListener('click', () =>{
  if(elementoBotao.value == 'primeiro'){
    elementoImagem.src = './assets/img/anakin-pesodomundo.png'
    elementoMomento.innerText = 'Anakin é finalmente aceito pelos Jedi. Obi-Wan recebeu Anakin como padawan.'
    elementoBotao.value = 'segundo'
  } else if(elementoBotao.value == 'segundo'){
    elementoImagem.src = './assets/img/anakin-padme.png'
    elementoMomento.innerText = 'Anakin cresceu. Não podia ter sentimentos, mas sentia falta da mãe, se sentia atraído pela Padmé e também tinha sentimentos pelo Obi-Wan.'
    elementoBotao.value = 'terceiro'
  } else if(elementoBotao.value == 'terceiro'){
    elementoImagem.src = './assets/img/anakin-mae.png'
    elementoMomento.innerText = 'A morte da mãe dele. Começaram as visões do sofrimento da mãe e ele foi encontrar ela. Anakin foi tomado de culpa, dor e fúria.'
    elementoBotao.value = 'quarto'
  } else if(elementoBotao.value == 'quarto'){
    elementoImagem.src = './assets/img/anakin-desesperado.png'
    elementoMomento.innerText = 'Anakin tinha algo que o ajudava a não sucumbir: Padmé. Padmé era a razão da vida dele. A única pessoa que ele não tinha perdido. Mas ele começa a ter as visões que teve na época da morte da mãe, mas desta vez mostrando a morte de Padmé. Ele se sentia perdido.'
    elementoBotao.value = 'quinto'
  } else if(elementoBotao.value == 'quinto'){
    elementoImagem.src = './assets/img/anakin-ladonegro.png'
    elementoMomento.innerText = 'Os Jedi decepcionavam e não o ajudavam em nada, mas existia uma figura demonstrando acreditar em Anakin desde o começo. Palpatine. Ele apresenta-lhe uma forma de salvar Padmé: o lado negro da Força.'
    elementoBotao.value = 'sexto'
  } else if(elementoBotao.value == 'sexto'){
    elementoImagem.src = './assets/img/anakin-louco.jpg'
    elementoMomento.innerText = 'Anakin perde o controle de si mesmo.'
    elementoBotao.value = 'setimo'
  } else if(elementoBotao.value == 'setimo'){
    elementoImagem.src = './assets/img/anakin-queimado.png'
    elementoMomento.innerText = 'Luta contra o próprio mestre e acaba mutilado e queimado.'
    elementoBotao.value = 'oitavo'
  } else if(elementoBotao.value == 'oitavo'){
    elementoImagem.src = './assets/img/anakin-mortepadme.png'
    elementoMomento.innerText = 'Anakin “volta” à vida e descobre que Padmé morreu. Anakin já não tinha motivos para viver, para amar, para ser bom. Tudo o que ele tinha, a partir dali, era a culpa, a dor, o tormento e o Lado Negro. Pela manipulação de Palpatine, e tudo isso ele se tornou o monstro que foi Darth Vader.'
    elementoBotao.value = 'nono'
  } else if(elementoBotao.value == 'nono'){
    elementoImagem.src = './assets/img/luke-mortedopai.png'
    elementoMomento.innerText = 'E então sua morte, seu filho o mata. Luke Skywalker, mata Anakin Skywalker.'
    elementoBotao.value = 'decimo'
  } else {
    elementoImagem.src = './assets/img/anakin-bebe.jpg'
    elementoMomento.innerText = 'Anakin tem 9 anos de idade. A única pessoa que ele tem é a mãe e os dois são escravos.'
    elementoBotao.value = 'primeiro'
  }
})