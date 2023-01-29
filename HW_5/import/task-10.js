import users from "./users.js"

// {
//   id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//   name: 'Moore Hensley',
//   email: 'moorehensley@indexia.com',
//   eyeColor: 'blue',
//   friends: ['Sharron Pace'],
//   isActive: false,
//   balance: 2811,
//   skills: ['ipsum', 'lorem'],
//   gender: 'male',
//   age: 37,
// }

const getSortedUniqueSkills = users => {
      let res = users.reduce((acc, {skills}) => {
            return [...acc, ...skills]
      }, []).filter((elem,idx,arr) => {
        return idx === arr.indexOf(elem)
      }).sort()
      return res
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
