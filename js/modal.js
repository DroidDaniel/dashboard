var mfname = document.getElementById('mfname');
var memailid = document.getElementById('memailid');
var mnumber = document.getElementById('mnumber');
var mcall = document.getElementById('mtocall');

function mcheckErrors(){
var error_count = 0;

if(mcall.selectedIndex==0){
  document.getElementById('mtocall').style.borderColor = "red";
  error_count++;
  }else{
  document.getElementById('mtocall').style.borderColor = "transparent";
  }


  if(mfname.value == ""){
  document.getElementById('mfname').style.borderColor = "red";
  error_count++;
  }else{
  document.getElementById('mfname').style.borderColor = "transparent";
  }

  if(memailid.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
   document.getElementById('memailid').style.borderColor = "transparent";
  }
  else{
     document.getElementById('memailid').style.borderColor = "red";
   error_count++
  }


  if(mnumber.value == ""){
  document.getElementById('mnumber').style.borderColor = "red";
  error_count++
  }else{
  document.getElementById('mnumber').style.borderColor = "transparent";
  }

  if(error_count == 0){
    document.getElementById("mformsec").submit();
    document.getElementById("mformsec").reset();
     document.getElementById("mthank_con").style.opacity = "1";
     document.getElementById('mthank_con').innerHTML = "<h5>Thank you We will get back to you shortly.</h5>";

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

document.getElementById("mlogin-button").addEventListener("click", function(){
document.getElementById('merrors').innerHTML = "";
mcheckErrors();


}
);