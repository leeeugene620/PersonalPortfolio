//Import express
const express = require('express');
const projects = require('./portfolio.json');
const app = express();

//Using Pug to render HTML
app.set('view engine', 'pug');

// serve static files from the 'public folder
app.use(express.static(__dirname + '/public'));

//Set's root routing for the website
app.get('/', (req, res) => {
    res.render('index', {
        name: 'Pug found!',
        title: 'Welcome to Eugene\'s Website!',
        projects: projects.project
})});

//Set profile routing for the website
app.get('/projects', (req, res) => {
    const project = projects.project.find(p => p.id === req.query.id);
    res.render("projects", {
        title: `About ${project.projectName}`,
        project: project
    });
});



function myFunction(x) {
  x.classList.toggle("change");
}

//Run server on http://localhost:7000
const server = app.listen(7000, () => {
    console.log(`Express running -> PORT ${server.address().port}`);
});
