/*global zs metazen */

var path = require("path");
global.metazen = require(path.join(__dirname, "../../metazen/dist-server/metazen.js"));

zs.require('projects', 'meta/projects.zs');

let projects = zs.env.get('projects.projects').$model;

console.log(projects);

let TestProject = projects[0];
console.log(TestProject);
