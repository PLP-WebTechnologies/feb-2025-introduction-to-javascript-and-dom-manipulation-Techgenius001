// Wait until the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the elements
  const dynamicText = document.getElementById("dynamic-text");
  const toggleBtn = document.getElementById("toggle-btn");
  const container = document.getElementById("container");

  // Change text content dynamically
  dynamicText.textContent = "Welcome! The text has changed using JavaScript.";

  // Modify CSS styles via JavaScript
  dynamicText.style.color = "crimson";
  dynamicText.style.fontWeight = "bold";

  // Flag to track if element is added
  let elementAdded = false;

  // Function to add a new element
  function addElement() {
    // Create a new paragraph element
    const newElem = document.createElement("p");
    newElem.id = "added-element";
    newElem.textContent = "This element was added dynamically!";
    container.appendChild(newElem);
  }

  // Function to remove the added element
  function removeElement() {
    const addedElem = document.getElementById("added-element");
    if (addedElem) {
      container.removeChild(addedElem);
    }
  }

  // Event listener for the button click
  toggleBtn.addEventListener("click", () => {
    if (!elementAdded) {
      addElement();
      toggleBtn.textContent = "Remove Element";
    } else {
      removeElement();
      toggleBtn.textContent = "Add Element";
    }
    elementAdded = !elementAdded;
  });
});
