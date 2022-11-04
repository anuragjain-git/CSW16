function bmi() {
    var w = document.getElementById("w").value;
    var h = document.getElementById("h").value;
    var message= document.getElementById("message");
    var health = document.getElementById("health");
    var bmi =((1.3 * w) / Math.pow(h,2.5));
    message.innerText = "BMI is "+bmi;
    if (bmi<18.8) {
        health.innerText = "Underweight";
    }
    else if ((bmi>18.8)&&(bmi<=25)) {
        health.innerText = "Healthy";
    }
    else if ((bmi>25)&&(bmi<=30)) {
        health.innerText = "OverWeight";
    }
    else if ((bmi>30)&&(bmi<=40)) {
        health.innerText = "Obese";
    }
    else {
        health.innerText = "Morbidly Obese";
    }
}