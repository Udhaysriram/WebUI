function cal(){
    let a = new Date();
    let hr = a.getHours();
    if(hr>=12 && hr<=23)
        document.getElementById('ampm').innerHTML = "PM"
    let min = a.getMinutes();
    let sec = a.getSeconds();
    console.log(hr,min,sec)
    if(hr>12)
        hr = hr - 12
    document.getElementById("hour").innerHTML = addzero(hr)
    document.getElementById("minute").innerHTML = addzero(min)
    document.getElementById("second").innerHTML = addzero(sec)
}
function addzero(num){
    return num<10?"0"+num:num
}
setInterval(cal,1000)