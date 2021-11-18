function age() {
    var birthYear = document.getElementById("birth-year").value;
    var date = new Date();
    var currentYear = date.getFullYear();
    var age = currentYear - birthYear;

    if (birthYear === null || birthYear ===""){
        document.getElementById("print").innerHTML = "Enter your birth year";
        return false;
    }

    else if (birthYear == currentYear) {
       document.getElementById("print").innerHTML = "You are new born";
       return false;
    }

    else if (birthYear > currentYear) {
       document.getElementById("print").innerHTML = "Birth year cannot be greater than the current year (" + currentYear + ").";
       return false;
    }
    
    else if (age >= 18){
       document.getElementById("print").innerHTML = "You are adult and you are: " + age + " years old";
    }

    else if (age < 18){
       document.getElementById("print").innerHTML = "You are Minor and you are: " + age + " years old";
    }
}