function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
    let k = 0;
    while( k < servedOrders.length){
       if(servedOrders[0] === takeOutOrders[0]){
                servedOrders.shift();
                takeOutOrders.shift();
        
           }else if(servedOrders[0] === dineInOrders[0]){
               servedOrders.shift();
               dineInOrders.shift();
     
           }else{
               return false;
           }

           console.log(servedOrders, takeOutOrders, dineInOrders);
           k++;
        }
           return true;
  }

  console.log(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]));

  //