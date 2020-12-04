let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
movies.forEach(element => console.log(element));
movies.push('Totoro');
console.log(movies);
movies.splice(4, 3, 'Frozen');
console.log(movies);