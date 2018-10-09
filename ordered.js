/*************************************************************************
 * @ purpose :understanding linked list and its basic operation
 * @author  Pijush Singha
 * @version 1.0
 * @since 04/10/2018
 *************************************************************************/

/*
ds is to access the dataStructure file methods
*/
var ds=require('./dataStructure');
/*
fs is to access fs module
*/
var fs=require('fs');
/*
require('readline') is used to access the readline module
*/
var readline=require('readline');
/*
readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/*
creating a linkedList
*/
var ll= new ds.linkedList();
/*
test() declaretion 
*/
function test()
{
    var d=fs.readFileSync('./data/num.txt','utf-8');
    var data=d.replace(/\n/g," ").split(' ');//replacing newline from the file with space
    /*
    adding data to the linkedlist from a file
    */
    var i=0;
    while(data[i])
    {
        ll.sorted(data[i]);
        i++;
    }
    rl.question('enter the number to be searched: ',function(num){
        var a=ll.removeElement(num);
        /*
        if a===-1 that means the word is not in the list
        so the word will be added at the else section other wise it will
        be removed
        */
        if(a!==-1)
        {
            let updated=ll.llData();
            fs.writeFile('./data/num1.txt',updated,function(err){
                if(err)
                    return console.log(err);
                console.log('the file is saved.')
            });
        }
        else
        {
            ll.sorted(num);
            let updated=ll.llData();
            fs.writeFile('./data/num1.txt',updated,function(err){
                if(err)
                    return console.log(err);
                console.log('the file is saved.')
            });
        }
        rl.close();
    })
}
/*
test() calling to start the program 
*/
test();
