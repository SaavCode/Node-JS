console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
//mymodules
const notes = require('./notes.js');
var command = process.argv[2];


console.log('Command:', command);
console.log(process.argv);
//add support for various commans
if (command === 'add'){

  console.log('adding new note');

}
else if(command === 'list') {
  console.log('list all notes');
}
else if(command === 'read') {
  console.log('fetching note');
}
else if (command === 'remove'){
  console.log('deleting note')
}
else {
    console.log('command not recongnized');
  }
