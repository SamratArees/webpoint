function view(num) {
    document.getElementById("result").value += num;
}

function compute() {

    let lastCharacter = document.getElementById("result").value;

    /**  If user end up entering any operator at end and press enter.There will be no outome.
      for example if user enter 1+ and enter = , there will be no outpu. So in such case,I have created 
      alert to remind user to type valid expression
    */
    let lastchar = lastCharacter.substr(-1);
    if (lastchar == '+' || lastchar == '-' || lastchar == '/' || lastchar == '*') {
        alert("please enter correctly");
    }

    let y = eval(lastCharacter);  //eval is an inbuilt javascript function.It evalutes any expression
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value = "";

}

function updateform() {
    // This function will hide all the form at first
    document.getElementById("id_inputs_circle").hidden = true;
    document.getElementById("id_inputs_triangle").hidden = true;
    document.getElementById("id_inputs_square").hidden = true;
    document.getElementById("id_inputs_rectangle").hidden = true;

    let shape = document.getElementById("id_shapes").value;

    switch (shape) {

        case "circle":
            document.getElementById("id_inputs_circle").hidden = false;
            break;

        case "triangle":
            document.getElementById("id_inputs_triangle").hidden = false;
            break;

        case "square":
            document.getElementById("id_inputs_square").hidden = false;
            break;

        case "rectangle":
            document.getElementById("id_inputs_rectangle").hidden = false;
            break;

    }
}

function calculateArea() {
    let shape = document.getElementById("id_shapes").value;
    let area = 0;

    switch (shape) {
        case "circle":
            let radius = document.getElementById("id_radius").value;
            area = Math.PI * radius * radius;
            break;

        case "triangle":
            let base = document.getElementById("id_base").value;
            let height = document.getElementById("id_height").value;
            area = 0.5 * height * base;
            break;

        case "square":
            let side = document.getElementById("id_side").value;
            area = side * side;
            break;

        case "rectangle":
            let length = document.getElementById("id_length").value;
            let width = document.getElementById("id_width").value;
            area = length * width;
            break;
    }

    document.getElementById("id_output").innerHTML = "Area = " + area;

}

function changeToCelsius() {
    let celciusOrKelvininput = document.getElementById("change").value;
    let userInputFarValue = document.getElementById("farenheight").value;

    if (celciusOrKelvininput == "celcius") {
        var cel = (userInputFarValue - 32) * (5 / 9);
        document.getElementById("output").innerHTML = cel;
    }
    else {
        var cel = (userInputFarValue - 32) * (5 / 9) + 273.15;
        document.getElementById("output").innerHTML = cel;
    }
}
function checkLeapYear(){

    let inputLeapYear =  document.getElementById("leapYear").value;

    if (inputLeapYear % 4 == 0) {

        document.getElementById("leapOutput").innerHTML= inputLeapYear + (" is a Leap Year.");
    }
    else if (inputLeapYear % 100 == 0) {
        document.getElementById("leapOutput").innerHTML= inputLeapYear + (" is a Leap Year.");
    }
    else if (inputLeapYear % 400 == 0) {
        document.getElementById("leapOutput").innerHTML= inputLeapYear + (" is a Leap Year.");
    }

    else
    document.getElementById("leapOutput").innerHTML= inputLeapYear + ("is not a Leap Year.");
}


