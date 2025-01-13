const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Use the date object
const today = new Date();

// Get the current year
year.innerHTML = `<span>${today.getFullYear()}</span>`;

// Get the last modified date
const modifiedDate = new Date(document.lastModified);
lastModified.innerHTML = `<span class="modified">Last Modification: ${new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "short",
    timeStyle: "short",
  }
).format(modifiedDate)}</span>`;

let bar = document.querySelector(".bars");
let xmark = document.querySelector(".xmark");
let mobileView = document.querySelector(".mobile-view");
mobileView.style.display = "none";
let desktop = document.querySelector(".desktop");

bar.addEventListener("click", function () {
    mobileView.style.display = "block";
    desktop.style.display = "none";
});

xmark.addEventListener("click", function () {
    mobileView.style.display = "none";
    desktop.style.display = "flex";
});