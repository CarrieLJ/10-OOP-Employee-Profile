function generateHtml(Manager, Engineer, Intern) {
  console.log(Manager);
  return `<!DOCTYPE html>
    <html lang="en-US">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    
    
        <head>
            <title>Employee Profiles</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
    
        <body class="container align-items-center">
            <header class="jumbotron">
                <h1 class="display-3 align-items-center">Employee Profiles</h1>
            </header>

            <div class="card align-items-center" style="width: 18rem;">
                <div class="card-body align-items-center">
                  <h5 class="card-title">${Manager.name}</h5>
                  <p class="card-text">${Manager.role}</p>
                </div>
                <ul class="list-group list-group-flush align-items-center">
                  <li class="list-group-item">ID: ${Manager.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:"> ${Manager.email}</a></li>
                  <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
                </ul>
            </div>

          <div class="card align-items-center" style="width: 18rem;">
            <div class="card-body align-items-center">
              <h5 class="card-title">${Engineer.name}</h5>
              <p class="card-text">${Engineer.role}</p>
            </div>
            <ul class="list-group list-group-flush align-items-center">
              <li class="list-group-item">ID: ${Engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:"> ${Engineer.email}</a></li>
              <li class="list-group-item">GitHub: <a href="${Engineer.gitHub}">${Engineer.gitHubUsername}</a></li>
            </ul>
          </div>

          <div class="card align-items-center" style="width: 18rem;">
            <div class="card-body align-items-center">
              <h5 class="card-title">${Intern.name}</h5>
              <p class="card-text">${Intern.role}</p>
            </div>
            <ul class="list-group list-group-flush align-items-center">
              <li class="list-group-item">ID: ${Intern.id}</li>
              <li class="list-group-item">Email: <a href="mailto:"> ${Intern.email}</a></li>
              <li class="list-group-item">School: ${Intern.school}</li>
            </ul>
          </div>
        </body>
    </html>`;
}

module.exports = generateHtml;
