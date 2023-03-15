const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];


let userDetail=users.map(function(user)
{
return user.first_name + user.last_name;
});
console.log(userDetail);







const person = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
  },
  {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
  }
];

let personDetail=users.map(function(f)
{
		return f.last_name;	
	
});
console.log(personDetail);





const place = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];





let placeDetail=place.map(function(l)
{
return `${l.first_name} lives in ${l.location}`;
});
console.log(placeDetail);