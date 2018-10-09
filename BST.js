/*************************************************************************
 * @description : BinarySearchTree 
 * @author  Pijush Singha
 * @version 1.0
 * @since 08/10/2018
 *************************************************************************/
/** 
* require(path) is used to access the utility file functions module
* it returns an object of utility file
*/
var utility=require('./utility/utility');
/**
* require('readline') is used to access the readline module
*/
var readline=require('readline');
/**
* readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);
/**
* test() declaretion
*/
function test(){
    rl.question('enter the no of test cases: ',function(no){
        console.log('enter the test cases one by one: ');
        recursion(no);
        function recursion(no){
            rl.question('',function(i){
                /**
                 * calling the utility function to print the
                 * no of BST possible with i no of nodes
                 */
                utility.BinarySearchTreeCount(i);
                if(no==1){
                    rl.close();
                    process.exit(0);
                }
                no--;
                recursion(no);
            })
        }
    })
}
/*
*test() calling to start the program execution
*/
test();