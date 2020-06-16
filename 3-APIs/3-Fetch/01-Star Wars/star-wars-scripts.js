let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) { 
    console.log(response);
    return response.json();
})
.then(function(json) {
    console.log(json);
    let people = json.results;

    for (p of people) {
        let listItem = document.createElement("li");
        listItem.innerHTML = "<p>" + p.name + "<p>";
        starWarsPeopleList.appendChild(listItem);
    }

    // for (p in people) { //the for in loop only shows the array numbers, not any of the info about the people
    //     console.log(p);
    // }

});