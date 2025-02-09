const employees = [ 
  {id:1, name: "sanjay", position: "developer"},
  {id:2, name: "yashas", position: "developer"},
  {id:3, name: "chetan", position: "developer"},
  {id:4, name: "rohan", position: "developer"}
]

const emplyeeListingDiv = document.querySelector("#employeeList")
const employeeListHTML = employees.map(employee => `
<div>
<strong> id: </strong>${employee.id}<br/>
<strong> Name: </strong> ${employee.name}<br/>
<strong> Position: </strong> ${employee.position}
<hr/>
</div)
`)

emplyeeListingDiv.innerHTML =  employeeListHTML.join('')





