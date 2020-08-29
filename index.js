#!/usr/bin/env node

const yargs = require("yargs");
const fs = require('fs');
const path = require("path");

let command = yargs.argv._[0];

if (command == "create") {
    const folderNames = ['models', 'views', 'controllers'];
    try {
        folderNames.forEach(folder => {
            fs.mkdir(path.join(__dirname, folder), (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log('Directory created successfully!');
            });
        });
    } catch (e) {
        console.log(e);
    }
} else {
    console.log("I doesn't make any sense.")
}