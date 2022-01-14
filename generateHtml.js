function generateHTML(manager, engineer, intern) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./assets/styles/style.css" />
        <title>Document</title>
      </head>
      <body>
        <h1>My Team</h1>
        <div class="container">
            <div class="row">
            ${createManager(manager)}
            ${createIntern(intern)}
            </div>
        </div>
        
      </body>
    </html>`;
}
function createManager(manager) {
  return `
<div class="col">
          <h2>${manager.getName()}</h2>
          <h3>Manager</h3>
          <ul>
            <li>Id: <span>${manager.getID()}</span></li>
            <li>Email: <span>${manager.getEmail()}</span></li>
            <li>Office <span>${manager.officeNum}</span></li>
          </ul>
        </div>`;
}
function createIntern(internArr) {
  internArr.map((intern) => {
    return `
        <div class="col">
        <h2>${intern.getName()}</h2>
        <h3>Intern</h3>
        <ul>
          <li>Id: <span>${intern.getID()}</span></li>
          <li>Email: <span>${intern.getEmail()}</span></li>
          <li>School: <span>${intern.school}</span></li>
        </ul>
      </div>`;
  });
}
// function createEngineer()
module.exports = generateHTML;
