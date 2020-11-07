// Grab the filter text input
const input = document.querySelector("#filter-input");

// Grab the collection of items
const ul = document.querySelector("#names");

// Get all the collection-items from the list
const listItems = ul.querySelectorAll("li.collection-item");

// Listen for every key press on the iput field of the UI
input.addEventListener("keyup", () => {
  const filterValue = input.value.toUpperCase();

  // Loop through the NodeList (Array of items) g=to filter the collection items accordingly to the filter input field value
  listItems.forEach((item) => {
    // Uoppercase the the list text
    let listText = item.firstElementChild.textContent.toUpperCase();

    // If ther is not a match, then hide the collection-item
    if (listText.search(filterValue) === -1) item.classList.add("hide");
    // Otherwise, show it
    else {
      if (item.classList.contains("hide")) item.classList.remove("hide");
    }
  });
});
