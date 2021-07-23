function collapse(id, cls) {
  let container = document.getElementById(id);
  let selected = container.querySelector(".selected");
  let optionsContainer = container.querySelector(".options-container");

  let optionsList = container.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle(cls);
  });

  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove(cls);
    });
  });

  window.addEventListener('click', function (e) {
      if (!container.contains(e.target)) {
        optionsContainer.classList.remove(cls);
      }
  });

};



const services = document.getElementById("services");
services.addEventListener("click", collapse("services", "active"));

const regions = document.getElementById("regions");
regions.addEventListener("click", collapse("regions", "active2"));
