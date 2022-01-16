function generateHTML(manager, engineerArr, internArr) {
  // console.log(internArr);
  // console.log(manager);
  // console.log(engineerArr);
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
        <link rel="stylesheet" href="./assets/style.css" />
        <title>Document</title>
      </head>
      <body>
        <h1>My Team</h1>
        <div class="container">
            <div class="row">
            ${createManager(manager)}
            ${createEngineer(engineerArr)}
            ${createIntern(internArr)}

            </div>
        </div>
        
      </body>
    </html>`;
}
function createManager(manager) {
  return `
        <div class="col, columns">
          <div class="subheader">
            <h2>${manager.getName()}</h2>
            <h3>Manager</h3>
          </div>
          <ul>
            <li>Id: <span>${manager.getID()}</span></li>
            <li>Email: <span>${manager.getEmail()}</span></li>
            <li>Office <span>${manager.officeNum}</span></li>
          </ul>
        </div>`;
}
function createIntern(internArr) {
  return internArr.map((internData) => {
    return `
    <div>
      <div class="col, columns">
      <div class="col, columns">
          <div class="subheader">
            <h2>${internData.getName()}</h2>
          <h3>Intern</h3>
          </div>
      <ul>
        <li>Id: <span>${internData.getID()}</span></li>
        <li>Email: <span>${internData.getEmail()}</span></li>
        <li>School: <span>${internData.school}</span></li>
      </ul>
    </div>`;
  });
}
function createEngineer(engineerArr) {
  return engineerArr.map((engineerData) => {
    return `
      <div class="col, columns">
      <div class="subheader">
            <h2>${engineerData.getName()}</h2>
          <h3>Engineer</h3>
          </div>
      <ul>
        <li>Id: <span>${engineerData.getID()}</span></li>
        <li>Email: <span>${engineerData.getEmail()}</span></li>
        <li>School: <span>${engineerData.github}</span></li>
      </ul>
    </div>`;
  });
}
module.exports = generateHTML;
