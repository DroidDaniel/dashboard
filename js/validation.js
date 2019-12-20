var fname = document.getElementById('fname');
var emailid = document.getElementById('emailid');
var number = document.getElementById('number');
var call = document.getElementById('tocall');

function checkErrors(){
var error_count = 0;

if(call.selectedIndex==0){
  document.getElementById('tocall').style.borderColor = "red";
  error_count++;
  }else{
  document.getElementById('tocall').style.borderColor = "transparent";
  }


  if(fname.value == ""){
  document.getElementById('fname').style.borderColor = "red";
  error_count++;
  }else{
  document.getElementById('fname').style.borderColor = "transparent";
  }

  if(emailid.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
   document.getElementById('emailid').style.borderColor = "transparent";
  }
  else{
     document.getElementById('emailid').style.borderColor = "red";
   error_count++
  }


  if(number.value == ""){
  document.getElementById('number').style.borderColor = "red";
  error_count++
  }else{
  document.getElementById('number').style.borderColor = "transparent";
  }

  if(error_count == 0){
    document.getElementById("formsec").submit();
    document.getElementById("formsec").reset();
     document.getElementById("thank_con").style.opacity = "1";
     document.getElementById('thank_con').innerHTML = "<h5>Thank you We will get back to you shortly.</h5>";

     var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {     
        if(this.responseText == "OKAY"){    
  
  

        }
      }
      };
     /*xhttp.open("GET", "comm.php?fname="+fname.value+"&emailid="+emailid.value+"&number="+number.value+"&loca="+loca.value, true);
   xhttp.send();*/
  }
}

document.getElementById("login-button").addEventListener("click", function(){
document.getElementById('errors').innerHTML = "";
checkErrors();


}
);