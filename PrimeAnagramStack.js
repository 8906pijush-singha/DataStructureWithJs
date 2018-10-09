/*************************************************************************
 * @description :prime anagram numbers in between 0 to 1000 in 2DArray  
 * @author  Pijush Singha
 * @version 1.0
 * @since 08/10/2018
 *************************************************************************/
var utility =require('./utility/utility')
/**
 *test () declaretion 
 */
function test(){
    let primeAna=utility.primeAnagramStack();
    /**
     * printing the values one by one from the stack 
     */
    while(primeAna.isEmpty()==false){
        console.log(primeAna.pop());
    }
}
/**
 * test() execution starts from here
 */
test();