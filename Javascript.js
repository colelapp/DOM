

function showTable(){
let userInput = Number(document.getElementById("user").value);

let output = ""

for(let  i = 1; i<=10; i++){
    output += `${userInput} X ${i} = ${userInput * i}<br>`;
}
document.getElementById("output").innerHTML = output;
}
let buttons = document.querySelectorAll("button")
let oldColors = [];

for(let i =0;i<buttons.length;i++){
    oldColors.push(buttons[i].style.backgroundColor);
}

function changeColor(){
    let choice = document.getElementById("color").value;

    for(let i = 0; i<buttons.length; i++){
        if (choice == "Reset"){
            buttons[i].style.backgroundColor = oldColors[i];
        }else if (choice == "Random"){
            let colors = ["#FF0000","#0000FF","#008000"];
            buttons[i].style.backgroundColor = colors[Math.floor(Math.random()*3)];
        }else{
            buttons[i].style.backgroundColor = choice;
        }
    }
}