function generateHtml(data) {
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
                  <h5 class="card-title">${Manager.getName()}</h5>
                  <p class="card-text">${Manager.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush align-items-center">
                  <li class="list-group-item">ID: ${Manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:"> ${Manager.getEmail()}</a></li>
                  <li class="list-group-item">Office Number: ${Manager.getOfficeNumber()}</li>
                </ul>
            </div>

          <div class="card align-items-center" style="width: 18rem;">
            <div class="card-body align-items-center">
              <h5 class="card-title">${Engineer.getName()}</h5>
              <p class="card-text">${Engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush align-items-center">
              <li class="list-group-item">ID: ${Engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:"> ${Engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="${Engineer.getGitHub()}">${Engineer.gitHubUsername}</a></li>
            </ul>
          </div>

          <div class="card align-items-center" style="width: 18rem;">
            <div class="card-body align-items-center">
              <h5 class="card-title">${Intern.getName()}</h5>
              <p class="card-text">${Intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush align-items-center">
              <li class="list-group-item">ID: ${Intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:"> ${Intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
          </div>
        </body>
    </html>`;
}

module.exports = generateHtml;
