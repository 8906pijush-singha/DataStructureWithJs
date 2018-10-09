/*************************************************************************
 * @ purpose :understanding Hash and its basic functions by implementing 
 * bucket 
 * @author  Pijush Singha
 * @version 1.0
 * @since 06/10/2018
 *************************************************************************/
/** 
* require(path) is used to access the utility file functions module
* it returns an object of utility file
*/
var utility=require('./utility/utility');
/**
* fs is to access fs module
*/
var fs=require('fs');
/**
* require('readline') is used to access the readline module
*/
var readline=require('readline');
/**
* readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/**
* tet() declaretion
*/
function test(){
    let d=fs.readFileSync('./data/num.txt','utf-8');
    let data=d.replace(/\n/g,"").split(' ');//replacing newline from the file with space
    let hm =utility.Hashing(data);//taking data to a HashMap 
    rl.question('enter your number: ',function(no){
        hm.addOrRemove(no);
        let updated=hm.asArray();
        fs.writeFile('./data/num1.txt',updated,function(err){
            if(err)
                return console.log(err);
            console.log('the file is saved.')
        });
        rl.close();
    })
}
/*
*test() calling to start the program execution
*/
test();