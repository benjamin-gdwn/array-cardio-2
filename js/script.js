 // ## Array Cardio Day 2
 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
//   some checks if 1 thing in your array meets your criteria
  const isAdult = people.some(function(person){
    const currentYear = (new Date().getFullYear())
    if (currentYear - person.year >= 19) {
        return true;
    }
  });
  console.log(isAdult)
// every checks to see if all things in your array 
  const allChild = people.every(function (person){
    const currentYear = (new Date().getFullYear())
    if (currentYear - person.year <= 19) {
        return true
    }
  })
  console.log(allChild)

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
//   done with es6

  const comment = comments.find(comment => comment.id === 823423);
      
      


 console.log(comment.text)


  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const index = comments.findIndex(function(comment) {
      if(comment.id === 823423){
          return true;
      }
  })

  console.log(index)

  comments.splice(index, 1);

  console.log(index)
