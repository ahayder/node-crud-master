#!/usr/bin/env node

const isSlug = require('validator/lib/isSlug');
const yargs = require("yargs");
const fs = require('fs');
const path = require("path");
const shell = require('shelljs');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


let command1 = yargs.argv._[0];
let command2 = yargs.argv._[1];

if (command1 == "create") {

    if (isSlug(command2)) {// validation is not working properly

        fs.mkdir(path.join(__dirname, command2), (err) => {
            if (err) {
                return console.error(err);
            }

            /**
             * npm commands
             */
            // need to make the npm i elements dynamic
            shell.cd(command2);
            shell.exec("npm init -y");
            shell.exec("npm i typescript -g");
            shell.exec("npm i express cors mongoose");
            shell.exec("npm i -D concurrently nodemon @types/node @types/express @types/mongoose @types/cors");
            
            
            
            /**
             * files and folder creation
             * // we can try using shelljs for files and folder creation later
             */
            const folderNames = ['models', 'controller', 'routes', 'types', 'schemas'];
            try {
                fs.mkdir(path.join(__dirname, command2+"/src"), (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Directory created successfully!');
                });
                folderNames.forEach(folder => {
                    fs.mkdir(path.join(__dirname, command2+"/src/"+folder), (err) => {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
                console.log(__dirname);
                fs.cre
            } catch (e) {
                console.log(e);
            } // end of try catch block

            /**
             * Finale message
             */
            // clear();
            console.log(
                chalk.red(
                    figlet.textSync('NCM', { horizontalLayout: 'full' })
                )
            );
            console.log(
                chalk.yellow("Project Initiated Sucessfully!")
            );
        });
    } else {
        console.log("we are just alowing slugs");
    } // end of command2 if else



} else {
    console.log("It doesn't make any sense.")
} // end of command1 if else 