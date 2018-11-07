function regForm()
{
    //ha elhagyom a var-t, akkor globális lesz a változó, ha eléírom, hogy let, akkor lokális
    form = document.getElementsByTagName("input");
    return form;    
}

function userCheck()
{
    document.getElementById("userNameError").innerHTML = "";
    var userName = document.getElementById("username").value;
    userName = userName.trim();
    console.log(userName.length);
    if (userName.length > 7 && userName.length < 26)
    {
        if (isFinite(userName[0]))
        {
            document.getElementById("userNameError").innerHTML = "Nem kezdődhet számmal";
        }
    }
    else
    {
        document.getElementById("userNameError").innerHTML = "8 és 25 karakter közöttinek kell lennie vagy nem számmal kezdődik.";
    }
}

function userCheck2(urlap)
{
    console.log(urlap[0].value);
}