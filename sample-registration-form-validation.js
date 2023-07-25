// var mail="";
// var pass="";
// var rmail="hi";
// var rpass="";
// function action()
// {
//     mail=document.getElementById("mail").value;
//     pass=document.getElementById("pass").value;
//     alert(mail);
// }
function logn()
{
    // window.open('main.html');
    var nm=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    localStorage.setItem("Username",nm);
    window.open('signup.html');
    
}
