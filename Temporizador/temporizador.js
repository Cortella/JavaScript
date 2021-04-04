const tempController = 1000

setInterval(showTime, tempController)

function Timer(hora, min ,seg){
  this.hora = hora
  this.min = min
  this.seg =seg
  
}

function showTime() {
  let secondDay = 86400

  let date = new Date()
  let horaAtual = new Timer(date.getHours() , date.getMinutes(), date.getSeconds())

  let h = horaAtual.hora*60*60 
  let m = horaAtual.min*60

  let totalPassed = h + m + horaAtual.seg
  let se = secondDay - totalPassed
  let hr = Math.floor(se / 3600)
  se = se - (hr*3600)
  let mi = Math.floor(se/60)
  se = se - (mi*60)
  
  str_second = new String(se)
  if(str_second.length == 1){
    se = "0" + str_second
  }

  str_minute = new String(mi)
  if(str_minute.length == 1){
    mi = "0" + str_minute
  }

  str_hora = new String(hr)
  if(str_hora.length == 1){
    hr = "0" + str_hora
  }
  
  let regressivo = new Timer(hr,mi,se)
  let txt = regressivo.hora+':'+ regressivo.min+':'+ regressivo.seg
  document.querySelector('.temp').innerHTML = txt
}

