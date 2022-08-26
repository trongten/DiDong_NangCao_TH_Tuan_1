var root = document.getElementById("root")

var input1 = document.createElement("INPUT")
input1.setAttribute("type", "text");

var input2 = document.createElement("INPUT")
input2.setAttribute("type", "text");

var label1 = document.createTextNode("A ")
var label2 = document.createTextNode("B ")

var lable3 = document.createTextNode("Sum ")
var label4 = document.createTextNode("  KQ: ")


var button = document.createElement('button')
button.innerText = "CLICK"


root.appendChild(label1)
root.appendChild(input1)
root.appendChild(document.createElement("br"))
root.appendChild(document.createElement("br"))
root.appendChild(label2)
root.appendChild(input2)
root.appendChild(document.createElement("br"))
root.appendChild(document.createElement("br"))
root.appendChild(lable3)
root.appendChild(button)
root.appendChild(label4)

button.addEventListener("click", () => {
    var txt1 = input1.value
    var txt2 = input2.value
    var sum = txt1 * 1 + txt2 * 1
    label4.nodeValue = " " + sum
})