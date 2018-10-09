/*************************************************************************
 * @ purpose :understanding Queue and its basic functions by implementing 
 * BankingCashCounter
 * @author  Pijush Singha
 * @version 1.0
 * @since 04/10/2018
 *************************************************************************/
/*
*ds is to access the dataStructure file methods
*/
var ds=require('./dataStructure');
/*
*require('readline') is used to access the readline module
*/
var readline=require('readline');
/*
*readline.createInterface is used to access process.stdin and process.stdout
*/
var rl=readline.createInterface(process.stdin,process.stdout);

function test(){
    let queue=new ds.Queue();
    rl.question('enter primary balance: ',function(bal){
        rl.question('how many people are there in the queue:',function(people){
            /*
            *validating the inputs
            */
            try {
                if(isNaN(bal)||isNaN(people)&&people%1!=0)
                    throw 'input is not valid'

                bal=parseFloat(bal);
                /*
                *creating the primary queue
                */
                for(let j=1;j<=people;j++){
                    queue.push(j);
                }
                input();//first input call to show the cash counter panel
                function input(){
                    console.log('Enter 1 to DIPOSIT.\nEnter 2 to WITHDRAW.\nEnter 3 to CHECK BALANCE.',
                            '\nEnter 4 to ADD someone to queue',
                            '\nEnter 5 to see the LENGTH of the queue\nEnter 6 to Exit the process');
                    rl.question('Enter option: ', function(i){
                        try{
                            if(isNaN(i)||i==''||parseInt(i)<0||i%1!=0)
                                throw 'try again and enter a valid input '
                        switch (parseInt(i)) {
                            case 1:deposit(input);                      
                                break;
                            case 2:withdraw(input);
                                break;
                            case 3:console.log('our balance is: ',bal);
                                input();
                                break;
                            case 4:queue.push(1);
                                console.log('new length of the queue: ',queue.size);
                                input();
                                break;
                            case 5:console.log('length of the queue: ',queue.size);
                                input();
                                break;
                            case 6: rl.close();
                                    process.exit(0);
                                break;
                            default:console.log('please enter a valid input.');
                                input();
                                break;
                        }
                        }catch(err){
                            console.log(err);
                            input();
                        }
                    });
                }
            } catch (err) {
                console.log(err);
                rl.close();
            }
            
            /*
            *deposit is to deposit the money to the cash counter
            */
            function deposit(callback){
                rl.question('how much money you want to deposit: ',function(deposit){
                    bal=bal+parseFloat(deposit);
                    console.log('our balance is: ',bal);
                    queue.pop();
                    close();
                    callback();
                }) 
            }
            /*
            *withdraw is to withdraw the money from the cash counter
            */
            function withdraw(callback){
                rl.question('how much money you want to withdraw: ',function(withdraw){
                    bal=bal-parseInt(withdraw);
                    if(bal<0)
                    {
                        bal=bal+parseFloat(withdraw);
                        console.log('we dont have enough money:')
                    }
                    else
                    {
                        console.log('our balance is: ',bal);
                        queue.pop(); 
                        close();                       
                    }
                    callback();
                })
            }
            /*
            *close is to check if the queue is empty or not
            */
            function close(){
                if(queue.size==0)
                {
                    console.log('we dont have any more people in the queue.');
                    rl.close();
                    process.exit();
                }
            }
        })      
    });
}
/*
*test() calling to start the program execution
*/
test();