/*
Write a Node Program to Print the
Directory Hierarchy of any given Input
Directory Name.

Note :Output of Node Program should display all the files and subfolders
recursively in an Javascript Object

 */

var fs = require('fs');
var path = require('path');

function crawl(dir){
    console.log(dir);
    var files = fs.readdirSync(dir);
    for(var x in files){
        var next = path.join(dir,files[x]);
        if(fs.statSync(next).isDirectory()==true){
            crawl(next);
        }
        else {
            console.log('\t',next);
        }
    }
}

crawl('./');