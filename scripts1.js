//STEP 1

/*var favMovies = ["Star Wars", "Indiana Jones", "Big Trouble in Little China", "X-Men", "Avengers"];
console.log(favMovies[1]);*/

//STEP 2

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers'];
console.log(movies.indexOf('Star Wars'));*/

//STEP 3

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers'];

movies.splice(2, 0,'Mannequin 2: On The Move');
console.log(movies.length);*/

//STEP 4

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers'];
movies.shift();
console.log(movies);*/

//STEP 5

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];

for (i=0;i<movies.length;i++)
{
console.log(movies[i]);
}*/

//STEP 6

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];

for (var varLoop in movies) {
  console.log(movies[varLoop]);
}*/

//STEP 7

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];
movies.sort();

for (var varLoop in movies) {
  console.log(movies[varLoop]);
}*/

//STEP 8

/*var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];
var leastFavMovies = ['Society', 'Battlefield Earth', 'The Fast and the Furious: Tokyo Drift'];

console.log("Movies I like:");
console.log("");
for (var varLoop in movies) {
  console.log(movies[varLoop]);
}
console.log("");

console.log("Movies I regret watching:");
console.log("");
for (var varLoop in leastFavMovies) {
  console.log(leastFavMovies[varLoop]);
}*/

//STEP 9
/*
var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];
var leastFavMovies = ['Society', 'Battlefield Earth', 'The Fast and the Furious: Tokyo Drift'];
var allMovies = movies.concat(leastFavMovies);
allMovies.sort();
allMovies.reverse();
for (varLoop in allMovies) {
    console.log(allMovies[varLoop]);
}
*/

//STEP 10
/*
var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];
var leastFavMovies = ['Society', 'Battlefield Earth', 'The Fast and the Furious: Tokyo Drift'];
var allMovies = movies.concat(leastFavMovies);
allMovies.sort();
allMovies.reverse();
lastMovie = allMovies.pop();
console.log(lastMovie);
*/

//STEP 11
/*
var movies = ['Star Wars', 'Indiana Jones', 'Big Trouble in Little China', 'X-Men', 'Avengers', 'Alien', 'Predator'];
var leastFavMovies = ['Society', 'Battlefield Earth', 'The Fast and the Furious: Tokyo Drift'];
var allMovies = movies.concat(leastFavMovies);
allMovies.sort();
allMovies.reverse();
firstMovie = allMovies[0];
console.log(firstMovie);
*/

//STEP 12 //

//STEP 13
/*
var employee1 = [];
employee1['employeeID'] = '12345';
employee1['name'] = 'Johnny Jeanshortz';
employee1['title'] = 'Custodial Artist';
employee1['department'] = 'Maintenance';
employee1['currentEmployee'] = 'Yes';

var employee2 = [];
employee2['employeeID'] = '54321';
employee2['name'] = 'Marty Mulletman';
employee2['title'] = 'CEO';
employee2['department'] = 'Big Wigs';
employee2['currentEmployee'] = 'No';

var employees = [employee1, employee2];
window.console.log(employees[1]['name']);
*/

//STEP 14
/*
var employee1 = [];
employee1['employeeID'] = '12345';
employee1['name'] = 'Johnny Jeanshortz';
employee1['title'] = 'Custodial Artist';
employee1['department'] = 'Maintenance';
employee1['currentEmployee'] = 'Yes';

var employee2 = [];
employee2['employeeID'] = '54321';
employee2['name'] = 'Marty Mulletman';
employee2['title'] = 'CEO';
employee2['department'] = 'Big Wigs';
employee2['currentEmployee'] = 'No';

var employees = [employee1, employee2];

var i;
for (i = 0; i < employees.length; i++) {
    window.console.log(employees[i]['name']);
}
*/

//STEP 15 //

/*
var employee1 = [];
employee1['employeeID'] = '12345';
employee1['name'] = 'Johnny Jeanshortz';
employee1['title'] = 'Custodial Artist';
employee1['department'] = 'Maintenance';
employee1['currentEmployee'] = 'Yes';

var employee2 = [];
employee2['employeeID'] = '54321';
employee2['name'] = 'Marty Mulletman';
employee2['title'] = 'CEO';
employee2['department'] = 'Big Wigs';
employee2['currentEmployee'] = 'No';

var employee3 = [];
employee3['employeeID'] = '15243';
employee3['name'] = 'Danny Dinglehopper';
employee3['title'] = 'Cafeteria Worker';
employee3['department'] = 'Food and Beverage';
employee3['currentEmployee'] = 'No';

var employees = [employee1, employee2, employee3];
*/

//STEP 16 //

/*
var favoriteMovies = [['Star Wars', 1], ['Indiana Jones', 2], ['Big Trouble in Little China', 3], ['X-Men', 4], ['Avengers', 5]];
*/

//PRACTICE WITH FUNCTIONS

//STEP 1
/*
var displayMessage = function () {
    window.console.log('This is an anonymous function.');
};
displayMessage();
*/

//STEP 2
/*
var calculate = function (width, height) {
    return width * 5 + height * 10;
};
window.console.log(calculate(10, 5));
*/

//STEP 3
/*
var employees = ['Chad', 'Brad', 'Vlad', 'Thad', 'Tad'];
var employeeArray = function (employeeList) {
    window.console.log('Employees:');
    window.console.log('');
    var i;
    for (i = 0; i < employeeList.length; i++) {
        window.console.log(employeeList[i]);
    }
}
employeeArray(employees);
*/
