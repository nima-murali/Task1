function formvalidation(){
 var var_email = document.getElementById("mail").value;
 var var_password = document.getElementById("pswd").value;

  if (var_email == null || var_email =="") {
    alert('please enter a valid email id');
    window.location="index.html";
    }
  else{
    if(var_password == null|| var_password ==""){
      alert('Please enter a password');
      window.location="index.html";
    }
    else{
      window.location ="home.html";
    }
  }
  
  
}
/*
function counter(){
  var timer = 10;

  let x = setInterval(function(){
    now = 0;
    if(timer<0){
      clearInterval(x);
    }
    timeLeft = timer - now;
    console.log("Our service will be rady in 00."+timeLeft+"seconds");
    now = now+1;
    },1000)
}
    /*if (timeLeft<0){
      clearInterval(x);
      console.log("Countdown Finished")
    }*/

function counter(){
  timeleft = 10;
  for (i=0;i<=10;i++){
    setTimeout(function fun1(){
        document.getElementById('timeid').innerHTML = "00."+timeleft;
        timeleft = timeleft-1;
        console.log(timeleft);
        if(timeleft<0){
          document.getElementById('finishid').innerHTML = "Finished"
        }
    },i*1000);

  }
}
  


