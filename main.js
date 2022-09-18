let date = new Date();
console.log (date);

let year = date.getFullYear();
document.getElementById("year").textContent = year;

let currentdate = document.lastModified;
console.log (currentdate);
document.getElementById('updated').textContent = currentdate;
