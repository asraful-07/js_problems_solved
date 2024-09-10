// problem 4
function pasaword(obj){
    if(obj.name === undefined ||
         obj.birthYear === undefined || 
         obj.siteName === undefined || 
         obj.birthYear.toString().length !== 4){
            return 'invalid';
        }
    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let pasawordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear ;
    return pasawordString;
}

console.log(pasaword({name: 'hlkdhs', birthYear: 1999, siteName: 'google'}));
console.log(pasaword({name: 'ikguiy', birthYear: 1999, siteName: 'google'}));
console.log(pasaword({name: 'toky', birthYear: 200, siteName: 'facebook'}));