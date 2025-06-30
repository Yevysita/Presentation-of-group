let seconds = 0
let minutes = 0
let timer_field = document.querySelector(".timer")

setInterval(function(){
    seconds += 1

    timer_field.innerHTML = "Time: " + seconds +"sec"

    if(seconds % 60 == 0){
        seconds = 0
        minutes += 1   
            
    }
    if (minutes > 0){
        timer_field.innerHTML = "Time: " + minutes + " min " + seconds + " sec " 
    }
    

}, 1000)

