function gerarFraseMotivacional (params) {
    
    const frases = [
    "Acredite em si mesmo e você será imparável",
    "A persistência leva ao sucesso",
    "Cada dia é uma nova oportunidade para brilhar",
    "Se você pode sonhar, pode realizar",
    "A jornada mais longa começa com um único passo",
    "Sua determinação é sua maior força",
    "Tudo que você pode fazer, ou sonha que pode, comece",
    "O verdadeiro teste não está em evitar o fracasso, pois isso é impossível",
    "O sucesso não é definitivo, e o fracasso não é fatal",
    "A vida é 10% o que acontece a você e 90% como você reage a isso"
  ]

  const numeroAleatio = Math.floor(Math.random() * 10)
  const frase = frases [numeroAleatio]

  document.getElementById('frase').innerHTML = frase 
  }