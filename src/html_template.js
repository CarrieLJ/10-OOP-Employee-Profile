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
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">${data.title}</p>
                </div>
                <ul class="list-group list-group-flush align-items-center">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">Email: <a href="url"> ${data.email}</a></li>
                  <li class="list-group-item">Office Number: ${data.number}</li>
                  <li class="list-group-item">GitHub: <a href="url"> ${data.github}</a></li>
                  <li class="list-group-item">School: ${data.school}</li>
                </ul>
              </div>
        </body>
    </html>`
  }
  
  module.exports = generateHtml;