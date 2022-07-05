// Ajax -> Asynchronous Javascript and XML

// An event occurs in a web page (the page is loaded, a button is clicked)
// An XMLHttpRequest object is created by JavaScript.
// The XMLHttpRequest object sends a request to a web server.
// The server processes the request.
// The server sends a response back to the web page.
// The response is read by JavaScript.
// The proper action (Like page update) is performed by Javascript


function LoadData() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        };
    };

    http.open("Get" , "https://jsonplaceholder.typicode.com/posts" , false);
    http.send();

}

LoadData();


// Object Literals
var car = {
    name: "BMW",
    year: 2024,
} 

console.log(car.name);

console.log(car["year"]);