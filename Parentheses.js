/*************************************************************************
 * @ purpose :understanding stack and its basic functions by implementing 
 * simple balance parentheses. 
 * @author  Pijush Singha
 * @version 1.0
 * @since 05/10/2018
 *************************************************************************/
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
function test()
{
    /*
    assuming that parantheses are balanced ngtv is set to zero
    */ 
    let ngtv=0;
    /*
    creating my own stack object
    */
    let stack=new ds.Stack();    
    rl.question('insert your expression: ',function(exp)
    {
        rl.close();
        let temp=0;
        for(let i=0;i<exp.length;i++)
        {
            if(exp[i]=='('||exp[i]==')')
            {
                temp++;
                /*
                checking if the first parantheses is ')' then 
                there is no need to check further
                */
                if(exp[i]==')'&& temp==1)
                {
                    console.log('inserted expression is not balanced');
                    process.exit(0);
                }
                else
                {
                    /*
                    inserting and removing from the stack
                    */
                    if(exp[i]==='(')
                        stack.push(exp[i]);
                    else
                    {
                        ngtv=stack.pop();
                        /*
                        if pop () returns -1 then that means the stack is already 
                        empty and still pop() is called so no need to check further
                        */
                        if(ngtv==-1)
                        {
                            console.log('inserted expression is not balanced');
                            process.exit(0);
                        }
                    }
                }
            }
        }
        function test2()
        {
            /*
            if stack size is zero then the expression is balanced
            */
            if(stack.size===0)
            {
                console.log('inserted expression is balanced');
            }
            else
                console.log('inserted expression is not balanced');
        }
        test2();   
    })
}
/*
*test() calling to start the program execution
*/
test();