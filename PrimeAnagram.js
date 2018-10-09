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
    /**
     * changing the array to a complete string and replacing the commas(',') with newline
     */
    let primeAna=utility.primeAnagram();
    /**
     * converting 2d array to 1d array by converting inner array to a string
     */
    for(let i=0;i<primeAna.length;i++){
        primeAna[i]=primeAna[i].join().replace(/\,/g,' ');
    }
    console.log(primeAna);
}
/**
 * test() execution starts from here
 */
test();