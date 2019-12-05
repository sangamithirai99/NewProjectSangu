var Class1 = {   'Student1': ['Viswanathan', 'Mohan'],
                 'Student2': ['Sangu', 'VNMohan'],
                 'Student3': ['Rathan', 'Viswanathan'],
                 'Student4': ['Thara', 'Gopinath']};
                 
var Class2 = {   'Student1': {'FirstName': 'Viswanathan', 'LastName':'Mohan'},
                 'Student2': {'FirstName': 'Sangu', 'LastName':'VNMohan'},
                 'Student3': {'FirstName': 'Rathan', 'LastName':'Viswanathan'},
                 'Student4': {'FirstName': 'Thara', 'LastName':'Gopinath'}};

document.querySelector("#timebutton").addEventListener("click", function(){
  UpdateShowTime();
  document.getElementById("sFirstName").innerHTML = Class1.Student2[0]
  document.getElementById("sLastName").innerHTML = Class1.Student2[1]

  document.getElementById("sFirstName").innerHTML = Class2.Student1.FirstName
  document.getElementById("sLastName").innerHTML = Class2.Student1.LastName

  });


  
function GetTime(){
  var today = new Date();
  return today.toLocaleTimeString();
}

function UpdateShowTime(){
    document.getElementById("ShowTime").innerHTML = GetTime();
  }
