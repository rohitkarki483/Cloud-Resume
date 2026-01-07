const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

console.log("script.js loaded");

const apiUrl = "https://xt5bcv5qa9.execute-api.us-east-1.amazonaws.com/count";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById("count").innerText = data.count;
  })
  .catch(error => {
    console.error("Error fetching visitor count:", error); 
    document.getElementById("count").innerText = "Error";
  });

