var count=0;

a = document.getElementById("button1");
b = document.getElementById("button2");
c = document.getElementById("button3");

b.addEventListener("click" , fntn1);
a.addEventListener("click" , fntn2);
c.addEventListener("click" , fntn3);




function fntn1 () {
    count++;
    document.getElementById("main1").innerHTML =  count;
    
    console.log(count);
}


function fntn2 () {
    count--;
    document.getElementById("main1").innerHTML =  count;
    console.log(count)
}

function fntn3 () {
    count=0;
    document.getElementById("main1").innerHTML =  count;
    console.log(count)
}

