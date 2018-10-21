document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector( "#new-item-form");
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector( "#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);

});

  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const bagelListItem = createBagelListItem(event.target);
    const bagelList = document.querySelector("#bagel-list");
    bagelList.appendChild(bagelListItem);

    event.target.reset();
  };

// var fillings = ["Honey Roast Ham", "Pastrami", "Smoked Turkey", "Roast Beef", "Smoked Salmon", "Pulled Pork"]

const createBagelListItem = function (form) {
  const bagelListItem = document.createElement("table");
  bagelListItem.classList.add("bagel-list-item")

  const name = document.createElement("td")
  name.textContent = form.name.value;
  bagelListItem.appendChild(name);

  const fillingOne = document.createElement("td");
  fillingOne.textContent = form.fillingOne.value;
  bagelListItem.appendChild(fillingOne);

  const fillingTwo = document.createElement("td");
  fillingTwo.textContent = form.fillingTwo.value;
  bagelListItem.appendChild(fillingTwo);

  const bagel = document.createElement("td");
  bagel.textContent = form.bagel.value;
  bagelListItem.appendChild(bagel);

  const finish = document.createElement("td");
  finish.textContent = form.finish.value;
  bagelListItem.appendChild(finish);

// RADIO BUTTONS //
  // const selectFinish = document.createElement("h2");
  // selectFinish.textContent = form.selectFinish;
  // bagelListItem.appendChild(selectFinish);

  return bagelListItem;
}

const handleDeleteAllClick = function (event) {
  const bagelList = document.querySelector("#bagel-list");
  bagelList.innerHTML = '';
}
