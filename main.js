let seconds = JSON.parse(localStorage.getItem("time"));
let minutes = JSON.parse(localStorage.getItem("minutes"));
let timer_field = document.querySelector(".timer")

setInterval(function(){
    localStorage.setItem("time", seconds += 1);

    timer_field.innerHTML =
      "Скільки часу ти розглядав проект: " +
      JSON.parse(localStorage.getItem("time")) +
      "sec";

    if(seconds % 60 == 0){
        seconds = 0
        minutes += 1      
    }
    localStorage.setItem("minutes", minutes);
    if (minutes > 0){
        timer_field.innerHTML =
          "TСкільки часу ти розглядав проект: " +
          JSON.parse(localStorage.getItem("minutes")) +
          " min " +
          JSON.parse(localStorage.getItem("time")) +
          " sec "; 
    }
    

}, 1000)

