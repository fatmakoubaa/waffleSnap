/*
By adding pragma: no-cache and a cache-control: no-cache to your header you will force the browser to check the server to see 
if the file is different from the file it already has in the cache. You could also use cache-control: no-store as it simply 
disallows the browser and all intermediate caches to store any version of the returned response.
*/
var myHeaders = new Headers();
myHeaders.append('pragma', 'no-store');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
  method: 'GET',
  headers: myHeaders,
};


fetch ("navbar.html", myInit)
.then(x => x.text())
.then(y => document.getElementById("navbar").innerHTML = y);

fetch ("news.html", myInit)
.then(x => x.text())
.then(y => document.getElementById("news").innerHTML = y);

fetch ("footer.html", myInit)
.then(x => x.text())
.then(y => document.getElementById("footer").innerHTML = y);

function includeProduct(){
    fetch ("products.html", myInit)
    .then(x => x.text())
    .then(y => document.getElementById("content").innerHTML = y);
}

function includeContact(){
    fetch ("contactUs.html", myInit)
    .then(x => x.text())
    .then(y => document.getElementById("content").innerHTML = y);
}

function includeTeam(){
  fetch ("team.html", myInit)
  .then(x => x.text())
  .then(y => document.getElementById("content").innerHTML = y);
}

function includeHome(){
  fetch ("home.html", myInit)
  .then(x => x.text())
  .then(y => document.getElementById("content").innerHTML = y);
}