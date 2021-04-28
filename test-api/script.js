
const url = "https://formula-tesla.herokuapp.com/"

function getData(route){
  route = url + route
  console.log(route)
  let request = new XMLHttpRequest()
  request.open("GET", route, false)
  request.send()
  return request.responseText
}

function teste(email, senha){
  console.log(email, senha)
}

function main(){
  
  let data = getData("userTest")
  let user = JSON.parse(data)
  console.log(user)


  
}



main()