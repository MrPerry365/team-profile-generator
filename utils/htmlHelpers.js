function writeEngineerCard(employee) {
  console.log(employee);

  return `
  
  <div class="card mx-4 mt-4" id="engineerCard" style="width: 18rem;">
  <div class="card-body our. text-bg-info mb-3">
    <h5 class="card-title text-center fw-bold .fs-1">Name: ${employee.name}</h5>
    <p class="card-text text-center .fs-2 bi bi-wrench-adjustable">Engineer</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-center text-center">ID: ${employee.id}</li>
    <a href= mailto:${employee.email} class="card-link text-center">Email: ${employee.email}</a>        
  </ul>
  <div class="card-body text-center">
   
    <a href= "https://github.com/${employee.github}" class="card-link">Github: ${employee.github}</a>
  </div>
</div>
  `;
}

function writeInternCard(employee) {
console.log(employee);

return `
<div class="card mx-4 mt-4" id="internCard" style="width: 18rem;">
<div class="card-body our. text-bg-info mb-3">
  <h5 class="card-title text-center fw-bold .fs-1">Name: ${employee.name}</h5>
  <p class="card-text text-center .fs-2 bi bi-person-rolodex">Intern</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item text-center text-center">ID: ${employee.id}</li>
  <a href= mailto:${employee.email} class="card-link text-center">Email: ${employee.email}</a>

</ul>
<div class="card-body text-center">
 
    <li class="list-group-item text-center text-center">School: ${employee.school}</li>
</div>
</div> 
`;
}

function writeManagerCard(employee) {
console.log(employee);

return`
<div class="card mx-4 mt-4" id="managerCard"style="width: 18rem;">
<div class="card-body our. text-bg-info mb-3">
  <h5 class="card-title text-center fw-bold .fs-1">Name: ${employee.name}</h5>
  <p class="card-text text-center .fs-2 bi bi-diagram-3">Manager</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item text-center text-center">ID: ${employee.id}</li>
  <a href="mailto:${employee.email}" class="card-link text-center">Email: ${employee.email}</a>

</ul>
<div class="list-group-item text-center">Office: ${employee.officeNumber}</li>
 
</div>
</div>
`
};

function generateHtmlLayout(team) {
  let writeString = "";

  for (let i = 0; i < team.length; i++) {
    let cardHtml = "";
    const employee = team[i];
    const role = employee.getEmployeeRole();
    if (role === "Engineer") {
      cardHtml = writeEngineerCard(employee);
    }
    else if (role === "Manager") {
        cardHtml = writeManagerCard(employee);
    
    }
    else if (role === "Intern") {
        cardHtml = writeInternCard(employee);
    
    };

    writeString += cardHtml;
  }
  console.log(writeString);
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
      />
      <title>My Team</title>
    </head>
    <body>
    <header our. text-bg-danger mb-3>
    <h1 class="our. text-bg-danger mb-3 text-center">My Team</h1>
    </header>
    <div class="container">
        <div class="row justify-content-center">
      <div id="mainDiv">
        <ul class="list-group-item" id="card-list"></ul>
       </div> 
    ${writeString}
     
      </div> 
      </div> 
  

      <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
      ></script>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  
    `;
}

module.exports = {
  generateHtmlLayout,
};
