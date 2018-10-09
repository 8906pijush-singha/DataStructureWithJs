/*************************************************************************
 * @ purpose :understanding Deque and its basic functions by implementing 
 * PalindromeChecker
 * @author  Pijush Singha
 * @version 1.0
 * @since 06/10/2018
 *************************************************************************/
/*
require(path) is used to access the utility file functions module
it returns an object of utility file
*/
var utility=require('./utility/utility');
/*
ds is to access the dataStructure file methods
*/
var ds=require('./dataStructure');
/*
require('readline') is used to access the readline module
*/
var readline=require('readline');
/*
readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/*
tet() declaretion
*/
function test(){
    rl.question('enter your string: ',function(str){
        let deque =new ds.Deque();
        push(str,test1);
        function test1(){
            if(utility.palindromeChecker(deque)){
                console.log(str,' is palndrome');
            }else
                console.log(str,' is not palndrome');
            rl.close(); 
        }
        /*
        pushing the elements of string to the deque
        */
        function push(str,callback){
            for(let i=0;i<str.length;i++){
                deque.push(str.charAt(i));
            }
            callback();
        }
    })
}
/*
test() calling to start the program execution
*/
test();
