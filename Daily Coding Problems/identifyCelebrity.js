//Pseudocode for the problem

const identify = (people) => {
while(people.length > 1){
  let i = people.pop();
  let j = people.pop();
  if(knows(i, j)){
      people.push(j);
  }else{
      people.push(i);
  }
}
return people[0];
}

console.log(identify([]));

//have access to O(1) function knows()
//Only 1 celebrity is possible
//knows(anyPerson, celebrity) = true
//knows(celebrity, anyPerson) = false
