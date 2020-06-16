const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = '7YZQJ6zQ8CJWidCTJrGiufXibRTry1uM'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search'); // the .search looks for the search (class) in HTML, stops at the first tag it finds and doesn't search the rest of the doc, even if they are the same class
//you can only have 1 id, but multiple classes
//querySelectorAll - it catches all of them
//here you're assigning each one of these things to a variable
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none'; //styling the navigation - the results nav section in HTML

let pageNumber = 0; //we don't want anything to display unless it's page 0
console.log('PageNumber:', pageNumber);
let displayNav = false;

 //1                     //2   
 searchForm.addEventListener('submit', fetchResults); //fetchResults calls the function below when submit button works
 //add eventListener to a button - it's looking for the submit action to occur, then it calls that function
 nextBtn.addEventListener('click', nextPage); //3
 previousBtn.addEventListener('click', previousPage); //3


                   //1
function fetchResults(e) {
    e.preventDefault(); //if this is commented out you refresh the page and doesn't populate your code/results
    //we have to tell the browser to prevent the default function of refreshing the page
    //ALWAYS put it i
    if(pageNumber === 0){ //for bonus challenge - you have to put it where the code goes immedately after you search 
      //hide button
      previousBtn.style.display = "none";
    } else {
      //show button 
      previousBtn.style.display = "block";
    }

// Assemble the full URL
url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3 //combining the URL
console.log(url); //4
}

function nextPage(){
console.log("Next button clicked");
} //5

function previousPage(){
console.log("Next button clicked");
} //5

function fetchResults(e) {
    e.preventDefault(); //1

    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3

  if(startDate.value !== '') { //if the start date doesn't have anything in there, don't run it
    console.log(startDate.value)
  url += '&begin_date=' + startDate.value; //adding values to the string
};

if(endDate.value !== '') {
  url += '&end_date=' + endDate.value;
};

  fetch(url) //fetch = Dude where's my car? "and then, and then"
  //fetches always get 2 then's
    .then(function(result) { //this is a promise, comes back with a response that's not really readable, so you need to convert it in to the json
    console.log(result)
    return result.json(); //2 //convert to json, takes the json object into a "normal" object
  }).then(function(json) {
      console.log(json); //3
  });

  fetch(url).then(function(result) {
    return result.json();
  }).then(function(json) { //console.log json
    displayResults(json); //1 & //3 //any data you get you always want to put it in the second then because that's where your results are
  });
}

function displayResults(json) { //json is a parameter
    let articles = json.response.docs;
    console.log(articles);
  };

//2
function displayResults(json) {
  console.log("DisplayResults", json); 
};

function displayResults(json) {
    let articles = json.response.docs;
  
    if(articles.length === 0) {
      console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            console.log(i);
          }
    }
  };

  function displayResults(json) {
    let articles = json.response.docs;
  
    if(articles.length === 0) {
      console.log("No results");
    } else {
      for(let i = 0; i < articles.length; i++) {
        let article = document.createElement('article'); //1
        let heading = document.createElement('h2'); //2
  
        article.appendChild(heading); //3
        section.appendChild(article); //4
      }
    }
  };

  function displayResults(json) {

    while (section.firstChild) {
    section.removeChild(section.firstChild); //1
    } //removing the section while thinsg are loading

    let articles = json.response.docs; //the json doesn't have to match the json in the dsiplayResults function
      
    if(articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
    }
  
    if(articles.length === 0) { //the .length shows how many results are in the array (response / docs)
      //if articles.length = 0 (blank array)
      console.log("No results");
    } else {

        for(let i = 0; i < articles.length; i++) { //at the end of the whole thing it wasnt so take i and add 1 to it 
          let article = document.createElement('article'); //talking to the HTML & spitting it back out, it creates a whole new tag
          let heading = document.createElement('h2');
          let link = document.createElement('a');
          let img = document.createElement('img');  //1
          let para = document.createElement('p');   //1
          let clearfix = document.createElement('div'); //2
          let source = document.createElement("p");

          let current = articles[i]; // has to do with what position of the array you're currently looping through (0,1,etc.)
          console.log("Current:", current);
    
          link.href = current.web_url;
          link.textContent = current.headline.main; //m
    
          para.textContent = 'Keywords: '; //3
          source.textContent = current.source; //steps into the current then source
    
          //4 you're looping through keywords and concatenating the results
          for(let j = 0; j < current.keywords.length; j++) {
            //5         
              let span = document.createElement('span');   
            //6
            span.textContent += current.keywords[j].value + ' ';   
            //7
            para.appendChild(span);
          }

                // checking to see if the multimedia.length is greater than 0 (like whether or not is has an image in it)
          if(current.multimedia.length > 0) {
              //3
              img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
              //4
              img.alt = current.headline.main;
          } 
    
          //8
          clearfix.setAttribute('class','clearfix');
    
          //9 //appending the Child
          article.appendChild(heading);
          heading.appendChild(link);
          article.appendChild(img); //5
          article.appendChild(source);
          article.appendChild(para);
          article.appendChild(clearfix);
          section.appendChild(article);
        }
      }

  };

  function nextPage(e) { //each time you click the next button the page number goes up
    pageNumber++; //1
    fetchResults(e);  //2
    console.log("Page number:", pageNumber); //3
 };

 function previousPage(e) {
    if(pageNumber > 0) { //1
      pageNumber--; //2
    } else {
      return; //3
    }
    fetchResults(e); //4
    console.log("Page:", pageNumber); //5
  
  };
  
