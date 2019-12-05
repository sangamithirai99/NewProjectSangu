function showName(name) {
    console.log(name)
}
document.querySelector("#timebutton").addEventListener("click", function(){
  UpdateShowTime();
  });

  
function GetTime(){
  var today = new Date();
  return today.toLocaleTimeString();
}

  function UpdateShowTime(){
    document.getElementById("ShowTime").innerHTML = GetTime();
  }


showName('Sangamithirai')