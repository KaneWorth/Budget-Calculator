"use strict";
// User budget amount input
const monthlyBudgetAmount = document.querySelector(".monthly-budget-amount");
// Add budget amount button
const addNewBudget = document.querySelector(".addNewBudget");
// User item input
const budgetItemName = document.querySelector(".budget-item-name");
const budgetItemCost = document.querySelector(".budget-item-cost");
const addNewItem = document.querySelector(".addNewItem");
// Where new items go
const items = document.querySelector(".items");
// Defining price?
const price = parseFloat(document.querySelector(".price"));

// Setting user budget
let budgetAmount = 0;

// Add budget with click
addNewBudget.addEventListener("click", function () {
  // Get value from input
  budgetAmount = parseFloat(monthlyBudgetAmount.value);

  // Get value to display
  document.querySelector(".budget-total").innerHTML = "Budget: £" + budgetAmount;
  console.log(typeof budgetAmount);

  // Display with .00 if a whole number
  if (Number.isInteger(budgetAmount)) {
    document.querySelector(".budget-total").innerHTML = "Budget: £" + budgetAmount.toFixed(2);
  } else {
    document.querySelector(".budget-total").innerHTML = "Budget: £" + budgetAmount;
  }

  // Declaring total budget remaining
  document.querySelector(".total").innerHTML = "£" + budgetAmount;
  if (Number.isInteger(budgetAmount)) {
    document.querySelector(".total").innerHTML = "£" + budgetAmount.toFixed(2);
  } else {
    document.querySelector(".total").innerHTML = "£" + budgetAmount;
  }

  // Resetting input areas
  monthlyBudgetAmount.value = "";

  // Calculate the total cost of the items
  calculateTotal();

  // Set focus to add items
  setFocus(budgetItemName);
});

// Add budget with click enter key
monthlyBudgetAmount.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("yes");
    // Get value from input
    budgetAmount = parseFloat(monthlyBudgetAmount.value);

    // Get value to display
    document.querySelector(".budget-total").innerHTML = "Budget: £" + budgetAmount;
    console.log(typeof budgetAmount);

    // Display with .00 if a whole number
    if (Number.isInteger(budgetAmount)) {
      document.querySelector(".budget-total").innerHTML = "Budget: £" + budgetAmount.toFixed(2);
    } else {
      document.querySelector(".budget-total").innerHTML = "Budget: £" + budgetAmount;
    }

    // Declaring total budget remaining
    document.querySelector(".total").innerHTML = "£" + budgetAmount;
    if (Number.isInteger(budgetAmount)) {
      document.querySelector(".total").innerHTML = "£" + budgetAmount.toFixed(2);
    } else {
      document.querySelector(".total").innerHTML = "£" + budgetAmount;
    }

    // Resetting input areas
    monthlyBudgetAmount.value = "";

    // Calculate the total cost of the items
    calculateTotal();

    // Set focus to add items
    setFocus(budgetItemName);
  }
});

// Adding new items to budget with mouse click
addNewItem.addEventListener("click", function () {
  // Get value from input
  const name = budgetItemName.value;
  const cost = parseFloat(budgetItemCost.value);
  console.log(typeof cost);

  // Add new budget items
  const container = document.createElement("div");
  container.className = "item-container";
  const itemName = document.createElement("label");
  itemName.className = "itemName";

  // Create new container for price and remove elements
  const priceRemoveContainer = document.createElement("div");
  priceRemoveContainer.className = "price-remove-container";

  // Create the price element
  const itemCost = document.createElement("label");
  itemCost.className = "price";
  if (Number.isInteger(cost)) {
    itemCost.textContent = cost.toFixed(2);
  } else {
    itemCost.textContent = cost;
  }

  // Create the remove element
  const trash = document.createElement("button");
  trash.className = "remove";

  // Set text content to item
  itemName.textContent = name.charAt(0).toUpperCase() + name.substr(1);

  // Append the price and remove elements to the priceRemoveContainer
  priceRemoveContainer.appendChild(itemCost);
  priceRemoveContainer.appendChild(trash);

  // Append the elements to the container
  items.appendChild(container);
  container.appendChild(itemName);
  container.appendChild(priceRemoveContainer);

  // Resetting input areas
  budgetItemName.value = "";
  budgetItemCost.value = "";

  // Calculate the total cost of the items
  calculateTotal();

  // Set focus to add items
  setFocus(budgetItemName);
});

// Adding new items to budget with enter key
budgetItemCost.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("yes");
    // Get value from input
    const name = budgetItemName.value;
    const cost = parseFloat(budgetItemCost.value);
    console.log(typeof cost);

    // Add new budget items
    const container = document.createElement("div");
    container.className = "item-container";
    const itemName = document.createElement("label");
    itemName.className = "itemName";

    // Create new container for price and remove elements
    const priceRemoveContainer = document.createElement("div");
    priceRemoveContainer.className = "price-remove-container";

    // Create the price element
    const itemCost = document.createElement("label");
    itemCost.className = "price";
    if (Number.isInteger(cost)) {
      itemCost.textContent = cost.toFixed(2);
    } else {
      itemCost.textContent = cost;
    }

    // Create the remove element
    const trash = document.createElement("button");
    trash.className = "remove";

    // Set text content to item
    itemName.textContent = name.charAt(0).toUpperCase() + name.substr(1);

    // Append the price and remove elements to the priceRemoveContainer
    priceRemoveContainer.appendChild(itemCost);
    priceRemoveContainer.appendChild(trash);

    // Append the elements to the container
    items.appendChild(container);
    container.appendChild(itemName);
    container.appendChild(priceRemoveContainer);

    // Resetting input areas
    budgetItemName.value = "";
    budgetItemCost.value = "";

    // Calculate the total cost of the items
    calculateTotal();

    // Set focus to add items
    setFocus(budgetItemName);
  }
});

items.addEventListener("click", function (event) {
  if (event.target.className === "remove") {
    const container = event.target.parentNode.parentNode;
    const parent = container.parentNode;
    parent.removeChild(container);

    // Calculate the total cost of the items
    calculateTotal();
  }
});

// Calculating budget minus expense
function calculateTotal() {
  // Removing item amount from budget
  let test = document.getElementsByClassName("price");
  let sum = 0;
  for (let i = 0; i < test.length; i++) {
    sum += parseFloat(test[i].textContent);
    if (Number.isInteger(budgetAmount - sum)) {
      document.querySelector(".total").innerHTML = `£${(budgetAmount - sum).toFixed(2)}`;
    } else {
      document.querySelector(".total").innerHTML = `£${budgetAmount - sum}`;
    }
  }
  console.log(budgetAmount - sum);
  console.log(typeof price);
}

// Adds focus
function setFocus(element) {
  element.focus();
}
