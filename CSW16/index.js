function a() {
    let y = document.getElementById("input").value;
    let message = document.getElementById("message");
    // alert(year);
    // y = y.value;
    if((y%400 == 0) || (y%4 == 0)) {
       message.innerText="Yes, "+y+" is a leap Year.";
    }
    else {
        message.innerText = y+" is not a leap Year.";
    }
}