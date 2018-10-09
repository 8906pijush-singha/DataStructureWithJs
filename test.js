var ds=require('./dataStructure');
var utility=require('./utility/utility');
function test(){
  let deque=new ds.Deque();
  deque.push('1');
  deque.push('2');
  deque.push('3');
  deque.push('2');
  deque.push('1');
  let i=0;
  while(deque.size>1){
    i++;
      console.log(deque.removeFirst()==deque.pop());
      console.log(i);
  }
} 
test();