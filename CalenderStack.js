/*************************************************************************
 * @description :calender by implementing queue
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
* test() declaretion
*/
function test(){
    try {
        if(process.argv[2]==''||isNaN(process.argv[2])||process.argv[2]%1!=0||process.argv[2]>12||process.argv[2]<=0)
            throw 'command line arguments are invalid'
        if(process.argv[3]==''||isNaN(process.argv[3])||process.argv[3]%1!=0)
            throw 'command line arguments are invalid'
            /**
             * calliing the utility function to print the month
             */
             let stack=utility.calenderStack(process.argv[2],process.argv[3]);           
            while(stack.isEmpty()==false){
                console.log(stack.pop());
            }
        } catch (err) {
        console.log(err);
    }
}
/*
*test() calling to start the program execution
*/
test();