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

const createBagelListItem = function (form) {
  const bagelListItem = document.createElement("h1");
  bagelListItem.classList.add("bagel-list-item")

  const fillingOne = document.createElement("h3");
  fillingOne.textContent = form.fillingOne.value;
  bagelListItem.appendChild(fillingOne);

  const fillingTwo = document.createElement("h3");
  fillingTwo.textContent = form.fillingTwo.value;
  bagelListItem.appendChild(fillingTwo);

  const bagel = document.createElement("h2");
  bagel.textContent = form.bagel.value;
  bagelListItem.appendChild(bagel);

  const finish = document.createElement("h2");
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