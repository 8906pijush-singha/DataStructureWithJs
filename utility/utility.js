/*************************************************************************
 * @purpose :making utility functions to use in main programs 
 * @author  Pijush Singha
 * @version 1.0
 * @since 05/10/2018
 *************************************************************************/
/*
* ds is to access the dataStructure file methods
*/
var ds=require('../dataStructure');

/**
* @param {Deque} deque is a Deque having some vlaue
* @returns boolean depending the value is palindrome or not
*/
function palindromeChecker(deque){
    let temp=0;
    deque.display();
    while(deque.size>1){
        /*
        *removing from both the end of queue and checking 
        *whether the elements are same or not
        */
        if(deque.pop()!==deque.removeFirst()){
            
            temp=1;
            break;
        }
    }
    if(temp==0)
        return true;
    else
        return false;
}
/**
 * @param {number[]} data
 * @returns hashSet object hm having the number array  
 */
function Hashing(data){
    let hm=new ds.HashMap();
    for(let i=0;i<data.length;i++){
        hm.add(data[i]);
    }
    return hm;
}
/**
 * @param {number} n
 * @returns the factorials of the no n 
 */
function factorials(n)
{
    var fact=1;
        if(n==0)
    {
        return 1;
    }
    else
    fact=n*factorials(n-1);
    return fact;
} 
/** 
 * @param {number} noOfNodes
 * prints a number 
 */
function BinarySearchTreeCount(noOfNodes){
    let n1=parseInt(factorials(2*noOfNodes));
    let n2=parseInt(factorials(parseInt(noOfNodes)+1));
    let n3=parseInt(factorials(noOfNodes));
    let no=parseInt(n1/(n2*n3));
    console.log('max ',no,' BinarySearchTrees are possible  from ',noOfNodes,' nodes.')
}
/**
 * 
 * @param {number} mm 
 * @param {number} yyyy
 * prints the passed month  
 */
function calender(mm,yyyy){ 
    let y0=yyyy-Math.floor((14-mm)/12);
    let x = y0 +Math.floor(y0/4)-Math.floor(y0/100) +Math.floor(y0/400);
    let m0 =parseInt(mm)+(12 * Math.floor((14-mm)/12)) - 2;
    let d0 = (parseInt(1) + x + Math.floor(31*m0/12))%7;
    /**
     * taking the months day
     */
    let days=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    /**
    * checking for leap year 
    */
    var ly=(function(){
    if(yyyy%400===0||(yyyy%4===0&&yyyy%100!==0))
        return true;
    else
        return false;
    })();
    if(ly===true)
        days[2]=29; 
    console.log('su mo tu we th fr sa');
    console.log('....................');
    let sp='';
    for(let i=0;i<d0;i++){
        sp=sp+'   ';
    }
    let wk=sp;
    let j=1;
    for(let i=1;i<=parseInt(days[mm]/7)+parseInt(1);i++){
        let k=0;
        for(;j<=days[mm];j++){
            if(i>1){
                k++;
            }
            if(j>9){
                wk=wk+j+' ';
            }
            else{
                wk=wk+j+'  ';
            }
            if((parseInt(j)+parseInt(d0))==7*i||k==7){
                j++;
                break;
            }
        }
        /**
         * printing on weekly basis
         */
        console.log(wk);
        wk='';
    }
}
/**
 * @param {number} mm 
 * @param {number} yyyy
 * @returns two D array containing respective month  
 */
function calender2(mm,yyyy){ 
    let y0=yyyy-Math.floor((14-mm)/12);
    let x = y0 +Math.floor(y0/4)-Math.floor(y0/100) +Math.floor(y0/400);
    let m0 =parseInt(mm)+(12 * Math.floor((14-mm)/12)) - 2;
    let d0 = (parseInt(1) + x + Math.floor(31*m0/12))%7;
    /**
     * taking the months day
     */
    let days=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    /**
    * checking for leap year 
    */
    var ly=(function(){
    if(yyyy%400===0||(yyyy%4===0&&yyyy%100!==0))
        return true;
    else
        return false;
    })();
    if(ly===true)
        days[2]=29; 
    //console.log('su mo tu we th fr sa');
    //console.log('....................');
    let month=[['su mo tu we th fr sa']];
    let sp='';
    for(let i=0;i<d0;i++){
        sp=sp+'   ';
    }
    let wk=sp;
    let j=1;
    for(let i=1;i<=parseInt(days[mm]/7)+parseInt(1);i++){
        let k=0;
        for(;j<=days[mm];j++){
            if(i>1){
                k++;
            }
            if(j>9){
                wk=wk+j+' ';
            }
            else{
                wk=wk+j+'  ';
            }
            if((parseInt(j)+parseInt(d0))==7*i||k==7){
                j++;
                break;
            }
        }
        /**
         * storing to the array month
         */
        month.push(wk);
        wk='';
    }
    return month;
}
/**
 * @param {number} mm 
 * @param {number} yyyy
 * @returns queue of queue objects 
 */
function calenderQueue(mm,yyyy){

    let y0=yyyy-Math.floor((14-mm)/12);
    let x = y0 +Math.floor(y0/4)-Math.floor(y0/100) +Math.floor(y0/400);
    let m0 =parseInt(mm)+(12 * Math.floor((14-mm)/12)) - 2;
    let d0 = (parseInt(1) + x + Math.floor(31*m0/12))%7;
    /**
     * taking the months day
     */
    let days=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    /**
    * checking for leap year 
    */
    var ly=(function(){
    if(yyyy%400===0||(yyyy%4===0&&yyyy%100!==0))
        return true;
    else
        return false;
    })();
    if(ly===true)
        days[2]=29; 
    /**
     * creating a Queue type object with the ref week
     */
    let week=new ds.Queue();
    /**
     * creating another Queue type object with the ref weekDay
     */
    let weekDay=new ds.Queue();
    weekDay.push('su mo tu we th fr sa');
    week.push(weekDay);
    let sp='';
    for(let i=0;i<d0;i++){
        sp=sp+'   ';
    }
    let wk=sp;
    let j=1;
    for(let i=1;i<=parseInt(days[mm]/7)+parseInt(1);i++){
        weekDay=new ds.Queue();
        let k=0;
        for(;j<=days[mm];j++){
            if(i>1){
                k++;
            }
            /**
             * speces is reduced to 1 as after 9 days will take 2 speces  
             */
            if(j>9){
                wk=wk+j+' ';
            }
            else{
                wk=wk+j+'  ';
            }
            if((parseInt(j)+parseInt(d0))==7*i||k==7){
                j++;
                break;
            }
        }
        /**
         * storing the string to weekday queue first then weekday queue will be stored
         * in the week queue so that week is queue of queue objects.
         */
        weekDay.push(wk);
        week.push(weekDay);
        wk='';
    }
    return week;

}
/**
 * 
 * @param {number} mm 
 * @param {number} yyyy
 * @returns stack having the callender  
 */
function calenderStack(mm,yyyy){
    let stack1=new ds.Stack();
    let stack2=new ds.Stack(); 
    let y0=yyyy-Math.floor((14-mm)/12);
    let x = y0 +Math.floor(y0/4)-Math.floor(y0/100) +Math.floor(y0/400);
    let m0 =parseInt(mm)+(12 * Math.floor((14-mm)/12)) - 2;
    let d0 = (parseInt(1) + x + Math.floor(31*m0/12))%7;
    /**
     * taking the months day
     */
    let days=[0,31,28,31,30,31,30,31,31,30,31,30,31];
    /**
    * checking for leap year 
    */
    var ly=(function(){
    if(yyyy%400===0||(yyyy%4===0&&yyyy%100!==0))
        return true;
    else
        return false;
    })();
    if(ly===true)
        days[2]=29; 
    /**
     * creating a Queue type object with the ref week
     */
    let week=new ds.Queue();
    /**
     * creating another Queue type object with the ref weekDay
     */
    let weekDay=new ds.Queue();
    weekDay.push('su mo tu we th fr sa');
    week.push(weekDay);
    let sp='';
    for(let i=0;i<d0;i++){
        sp=sp+'   ';
    }
    let wk=sp;
    let j=1;
    for(let i=1;i<=parseInt(days[mm]/7)+parseInt(1);i++){
        weekDay=new ds.Queue();
        let k=0;
        for(;j<=days[mm];j++){
            if(i>1){
                k++;
            }
            /**
             * speces is reduced to 1 as after 9 days will take 2 speces  
             */
            if(j>9){
                wk=wk+j+' ';
            }
            else{
                wk=wk+j+'  ';
            }
            if((parseInt(j)+parseInt(d0))==7*i||k==7){
                j++;
                break;
            }
        }
        /**
         * storing the string to weekday queue first then weekday queue will be stored
         * in the week queue so that week is queue of queue objects.
         */
        weekDay.push(wk);
        week.push(weekDay);
        wk='';
    }
    while(week.isEmpty()==false){
        stack1.push(week.pop().pop());
    }
    while(stack1.isEmpty()==false){
        stack2.push(stack1.pop());
    }
    return stack2;
}
/**
 * @returns primeArray ,having all the prime values ini a 2D manner 
 */
function primeNo(){
    var primeArray=[[000],[100],[200],[300],[400],[500],[600],[700],[800],[900]];
    //    console.log('the prime numbers are: ')
        for(var i=2;i<=1000;i++)
        {
            var prime=1;
            var j=2;
            while(j<=i/2)
            {
                if(i%j==0)
                {
                    prime=0;
                    break;
                }
                j++;
    
            }
            if(prime===1&& i<100)
            {
                primeArray[0].push(i);
            }
            else if(prime===1&& i<200)
            {
                primeArray[1].push(i);
            }
            else if(prime===1&& i<300)
            {
                primeArray[2].push(i);
            }
            else if(prime===1&& i<400)
            {
                primeArray[3].push(i);
            }
            else if(prime===1&& i<500)
            {
                primeArray[4].push(i);
            }
            else if(prime===1&& i<600)
            {
                primeArray[5].push(i);
            }
            else if(prime===1&& i<700)
            {
                primeArray[6].push(i);
            }
            else if(prime===1&& i<800)
            {
                primeArray[7].push(i);
            }
            else if(prime===1&& i<900)
            {
                primeArray[8].push(i);
            }
            else if(prime===1&& i<999)
            {
                primeArray[9].push(i);
            }
        }
        return primeArray;
}
/**
 * 
 * @param {number} a 
 * @param {number} b
 */
function isAnagram(a,b){
    var word1,word2;
    //console.log(a,b);
    word1=a.toString();
    word2=b.toString();
    //creating corrosponding arrays using string.split() 
    var word1Arr=word1.split('');
    var word2Arr=word2.split('');
    //sorting them using Arrays.sort() to campare one by one elements
    word1Arr.sort();
    word2Arr.sort();
    if(word1Arr.length!=word2Arr.length)
        return false;
    //comparing     
    for(var i=0;i<word1Arr.length;i++)
    {
        if(word1Arr[i]!=word2Arr[i])
            return false;
    }
    return true;
}
/**
 * @returns the number which are prime and anagram in a 2d array
 */
function primeAnagram (){
    var primeArray=primeNo();
    var primeAnag=[[000],[100],[200],[300],[400],[500],[600],[700],[800],[900]];
    for(let k=0;k<primeArray.length;k++){
        for(var i=1;i<primeArray[k].length;i++){
            for(let j=i+1;j<primeArray[k].length;j++){
                if (isAnagram(primeArray[k][i],primeArray[k][j])){

                    let s=primeArray[k][i]+' ==> '+primeArray[k][j];
                    if(k===0)
                    {
                        primeAnag[0].push(s);
                    }
                    else if(k===1)
                    {
                        primeAnag[1].push(s);
                    }
                    else if(k===2)
                    {
                        primeAnag[2].push(s);
                    }
                    else if(k===3)
                    {
                        primeAnag[3].push(s);
                    }
                    else if(k===4)
                    {
                        primeAnag[4].push(s);
                    }
                    else if(k===5)
                    {
                        primeAnag[5].push(s);
                    }
                    else if(k===6)
                    {
                        primeAnag[6].push(s);
                    }
                    else if(k===7)
                    {
                        primeAnag[7].push(s);
                    }
                    else if(k===8)
                    {
                        primeAnag[8].push(s);
                    }
                    else if(k===9)
                    {
                        primeAnag[9].push(s);
                    }    
                }
            }
        }
    }
    return primeAnag ;
}
/**
 * @returns prime anagram numbers that are between 0 to 1000 n a stack
 */
function primeAnagramStack(){
    var primeArray=primeNo();
    var primeAnag=new ds.Stack();
    for(let k=0;k<primeArray.length;k++){
        for(var i=1;i<primeArray[k].length;i++){
            for(let j=i+1;j<primeArray[k].length;j++){
                if (isAnagram(primeArray[k][i],primeArray[k][j])){

                    let s=primeArray[k][i]+' ==> '+primeArray[k][j];
                    primeAnag.push(s);   
                }
            }
        }
    }
    return primeAnag ;
}
/**
 * @returns prime am=nagram numbers that are in between 0 to 1000 in a queue
 */
function primeAnagramQueue(){
    var primeArray=primeNo();
    var primeAnag=new ds.Queue();
    for(let k=0;k<primeArray.length;k++){
        for(var i=1;i<primeArray[k].length;i++){
            for(let j=i+1;j<primeArray[k].length;j++){
                if (isAnagram(primeArray[k][i],primeArray[k][j])){

                    let s=primeArray[k][i]+' ==> '+primeArray[k][j];
                    primeAnag.push(s);   
                }
            }
        }
    }
    return primeAnag ;
}
module.exports={
    palindromeChecker,
    Hashing,
    BinarySearchTreeCount,
    factorials,
    calender,
    calender2,
    calenderQueue,
    calenderStack,
    primeNo,
    isAnagram,
    primeAnagram,
    primeAnagramStack,
    primeAnagramQueue
}