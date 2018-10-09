/*************************************************************************
 * @ purpose :creating all the data Structures and implementing the methods using js
 * @author  Pijush Singha
 * @version 1.0
 * @since 04/10/2018
 *************************************************************************/
/*
*Node implementation
*/
class Node
{
    constructor(data,next)
    {
        this.data=data;
        this.next=next;
    }
}
/*
*Linked list implemetation
*/
class linkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
    /**
     * @param {*} value 
     * to add at the first of the linked list
     */
    addAtfirst(value)
    {
        let node =new Node(value,null);
        if(this.head==null)
        {
            this.head=node;
            this.size++;
        }
        else
        {
            node.next=this.head;
            this.head=node;
            this.size++;
        }
    }
    /**
     * to add at the last of the linked list
     * @param {*} value 
     */
    add(value)
    {
        let nextValue=1;
        let node=new Node(value,null);
        if(this.head===null)
        {
            this.head=node;
            this.size++;
        }
        else
        {
            let current=this.head;
            while(current.next!=null)
            {
                current=current.next;
            }
            current.next=node;
            this.size++;
        }
        let current=this.head;
        let itr=nextValue;
        while(current.next&&itr>0)
        {
            current=current.next;
            itr--;
        }
        nextValue++;
        return current.data;
    } 
    /**
     * to remove the element from the top
     */
    removeFirst()
    {
        let removed =this.head;
        let current=this.head;
        current=current.next;
        this.head=current;
        return removed.data;
    }
    /**
     * @returns last node data
     */
    removeLast()
    {
        let current=this.head;
        let prev=this.head;
        while(current.next!=null)
        {
            prev=current;
            current=current.next;
        }
        prev.next=current.next;
        return current.data;
    }
    /**
     * to remove an element from the linkedlist
     * @param {*} element 
     * @returns string or -1
     */
    removeElement(element) 
    { 
        let current = this.head; 
        let prev = null; 
        
        // iterate over the linkedlist 
        while (current != null) { 
            /*
            *comparing element with current 
            *element if found then remove the 
            *and return true
            */ 
            if (current.data === element) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return current.data; 
            } 
            prev = current; 
            current = current.next; 
        } 
        return -1; 
    } 
    /**
     * to display the linked list
     */
    display()
    {
        let current=this.head;
        console.log(current.data);
        while(current.next!==null)
        {
            current=current.next;
            console.log(current.data);
        }
    }
    /**
     * to return an array cantaining the linkedlist data
     * @returns {string} arr.join(' ')
     */
    llData()
    {
        let arr=[];
        let current=this.head;
        arr.push(current.data);
         while(current.next)
         {
            current=current.next;
            arr.push(current.data);
         }
         return arr.join(' ');      
    }
    /**
     * to add a value in sorted manner
     * @param {*} value 
     */
    sorted(value) 
	{ 
        let node=new Node(value,null); 
         if (this.head == null
            ||parseInt(parseFloat(this.head.data)-parseFloat(node.data))>=0) 
		{ 
            node.next = this.head; 
            this.head = node; 
            this.size++;
		} 
		else { 
			let current = this.head; 

            while (current.next != null 
                && parseFloat(current.next.data) < parseFloat(node.data)) 
            {
                current = current.next; 
            }
			node.next = current.next; 
            current.next = node;
            this.size++; 
        } 
    }
    /**
     * searching for an elemet
     * @param {*} element 
     * @returns {boolean}
     */
    search(element)
    {
        let current = this.head; 
        // iterate over the linkedlist 
        while (current != null) { 
            /*
            *comparing element with current 
            *element if found then return true
            */ 
            if (current.data === element) {  
                return true; 
            }
            current=current.next; 
        } 
        return false;  
    } 
    /**
     * @returns {boolean}
     */
    isEmpty()
    {
        if(this.size===0)
            return true;
        else
            return false;
    }
}
/**
 * implementation Stack using linkedlist
 */
class Stack
{
    constructor()
    {
        this.ll=new linkedList();
        this.size=0;
    }
    /**
     * @param {*} value to push at stack
     */
    push(value)
    {
        this.ll.addAtfirst(value);
        this.size++;
    }
    /**
     * @returns the last pushed data or -1 
     */
    pop()
    {
        if(this.size===0)
        {
            return -1;// it returns -1 when the stack is empty and still pop() is called    
        }
        else
        {
            this.size--;
            return this.ll.removeFirst();
        }
       // console.log('from stack',this.size);

    }
    /**
     * display the stack to the console
     */
    display()
    {
        this.ll.display();
    }
    /**
     * checking if the stack size is 0 or not
     * @returns {boolean}
     */
    isEmpty()
    {
        if(this.size===0)
            return true;
        else
            return false;
    }
}
/**
 * implementation of Queue using linked list
 */
class Queue
{
    constructor()
    {
        this.ll=new linkedList();
        this.size=0;
    }
    /**
     * to push a value to the queue
     * @param {*} value 
     */
    push(value)
    {
        this.ll.addAtfirst(value);
        this.size++;
    }
    /**
     * to return and remove the first pushed data
     * @returns {*}
     */
    pop()
    {
        this.size--;
        return this.ll.removeLast();
    }
    /**
     * to display the queue to the console
     */
    display()
    {
        this.ll.display();
    }
    /**
     * to check if the queue is empty or not
     */
    isEmpty()
    {
        if(this.size===0)
            return true;
        else
            return false;
    }
}
/**
 * implementing deque by extending queue
 */
class Deque extends Queue
{
    constructor()
    {
        super();
    }
    /**
     * to add at last of the queue
     * @param {*} value
     * @returns {*} 
     */
    addatLast(value)
    {
       return this.ll.add(value);
    }
    /**
     * to remove and @returns {*} the first element of the queue
     */
    removeFirst()
    {
        this.size--;
        return this.ll.removeFirst();
    }
}
/**
 * implementing hashMap using linkedlist and array
 */
class HashMap
{
    constructor(){
        this.keys=[];
        this.size=11;
        for(let i=0;i<this.size;i++){
            this.keys.push(new linkedList());
            //console.log('this.keys[%d]=',i,this.keys[i]);
        }
    }
    /**
     * to push a value to the hashmap
     * @param {*} value 
     */
    push(value){
        let no=parseInt(value)%11;
        this.keys[no].sorted(value);

    }
    add(value){
        if(isNaN(value)===false){
            let no=parseInt(value)%11;
            if(this.keys[no].isEmpty()||this.keys[no].search(value)===false){
                this.push(value);
            }
        }  
    }
    /**
     * if the value present in the hashmap then remove it or else add it to hashmap
     * @param {*} value 
     */
    addOrRemove(value){
        let no=parseInt(value)%11;
        //console.log(this.keys[no]);
        if(this.keys[no].search(value)){
            this.keys[no].removeElement(value)
        }else{
            this.push(value);
        }
    }
    /**
     * display the hashmap to the console
     */
    display(){
        for(let i=0;i<this.keys.length;i++)
        {
            let dis=this.keys[i];
            if(dis.isEmpty()===false){
                console.log(i,'==>');
                dis.display();
            }
        }
    }
    /**
     * returns an array having the value of hashmap
     * @returns {Array} 
     */
    asArray()
    {
        let arr=[];
        for(let i=0;i<this.keys.length;i++)
        {
            let dis=this.keys[i];
            if(dis.isEmpty()===false){
                let arr1=this.keys[i].llData().split(' ');
                for(let j=0;j<arr1.length;j++){
                    arr.push(arr1[j]);
                }
            }
        }
        return arr;
    }
}
module.exports=
{
    Node,
    linkedList,
    Stack,
    Queue,
    Deque,
    HashMap
}