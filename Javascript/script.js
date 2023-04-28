

function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'demouser@gmail.com' || a == 'lkchittajallu@gainsight.com' || a == 'dpraj@gainsight.com')
    { 
        var b= a.substr(0,5);

        alert('valid user');
        location.href = "Page1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demouser@gmail.com as username');
    }
}

function addtocart()
{
    alert("Added to cart");
}
