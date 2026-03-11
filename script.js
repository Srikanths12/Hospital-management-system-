
function addPatient(){

const name=document.getElementById("name").value
const age=document.getElementById("age").value
const disease=document.getElementById("disease").value

fetch("/addPatient",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({name,age,disease})
})
.then(res=>res.json())
.then(d=>alert(d.message))

}

function loadPatients(){

fetch("/patients")
.then(res=>res.json())
.then(data=>{

let list=document.getElementById("list")
list.innerHTML=""

data.forEach(p=>{
 let li=document.createElement("li")
 li.innerText=p.name+" | Age:"+p.age+" | "+p.disease
 list.appendChild(li)
})

})

}
