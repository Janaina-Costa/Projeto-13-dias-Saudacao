const today = new Date()
let hourNow = today.getHours()
let greeting


if(hourNow >=18){
    greeting = 'Good everning'
    document.querySelector('body').style.backgroundColor= '#1C1C1C'
    document.querySelector('body').style.color = 'white'

}else if(hourNow >=12){
    greeting = 'Good afternoon'
    document.querySelector('body').style.backgroundColor= '#FF8C00'
    document.querySelector('body').style.color = 'white'
}else if(hourNow >=0){
    greeting='Good Morning'
    document.querySelector('body').style.backgroundColor= '#00BFFF'
    document.querySelector('body').style.color = 'white'
}

document.write('<h3>'+greeting+'</h3>')