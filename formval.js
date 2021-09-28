function formvalidation(){
    var var_email = document.getElementById("mail").value;
    var var_password = document.getElementById("pswd").value;
   
    if (var_email == null || var_email =="") {
        alert('please enter a valid email id');
        window.location="login.html";
    }
    else{
        if(var_password == null|| var_password ==""){
           alert('Please enter a password');
            window.location="login.html";
        }
        else{
            window.location ="home.html";
        }
    }  
}

function regvalidation(){
    var var_email = document.getElementById("email").value;
    var var_password = document.getElementById("paswd").value;
   
    if (var_email == null || var_email =="") {
        alert('please enter a valid email id');
        window.location="register.html";
    }
    else{
        if(var_password == null|| var_password ==""){
           alert('Please enter a password');
            window.location="register.html";
        }
        else{
            window.location ="login.html";
        }
    }  
}

   
function counter(){
    timeleft = 10;
    for (i=0;i<=10;i++){
    setTimeout(function count(){
        document.getElementById('timeid').innerHTML = "00."+timeleft;
        timeleft = timeleft-1;
        console.log(timeleft);
        if(timeleft<0){
            document.getElementById('finishid').innerHTML = "Finished"
        }
    },i*1000);
   
    }
}
     
   
   
   