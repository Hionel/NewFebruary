import {
	createLocalStorageEntry,
	getLocalStorageEntries,
} from "./utils/localStorage-service.js";

const listItemInput = document.getElementById("listItemInput");
const toDoList = document.getElementById("toDoList");

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", handleAddListItem);

function handleAddListItem() {
	if (!listItemInput.value) {
		console.log("Data for list item is missing");
		return;
	}

	// console.log(listItemInput);
	// const listItemValue = listItemInput.value;
	// const loggedUser = getLocalStorageEntries("loggedInUser");
	// const lsListItemsArray = getLocalStorageEntries("toDoListItems");
	// console.log(loggedUser.email);

	// if (lsListItemsArray.length < 1) {
	// 	console.log("Initial add");
	// 	const listItemsObject = {
	// 		key: loggedUser.email,
	// 		listItems: [],
	// 	};

	// 	listItemsObject.listItems.push(listItemValue);

	// 	createLocalStorageEntry("toDoListItems", listItemsObject);
	// 	return;
	// }

	// console.log(lsListItemsArray);
	// const loggedUserListItemsObject = lsListItemsArray.find(
	// 	(itemObject) => itemObject.key == loggedUser.email
	// );
	// const otherUsersListItems = lsListItemsArray.find(
	// 	(itemObject) => itemObject.key !== loggedUser.email
	// );

	// if (!loggedUserListItemsObject) {
	// 	console.log("New user wants to add a list item");
	// 	console.log(otherUsersListItems);
	// 	return;
	// }

	// console.log("Avem mai multe iteme ");
	// // console.log(otherUsersListItems);
	// // listItems.push(otherUsersListItems);
	// loggedUserListItemsObject.listItems.push(listItemValue);

	// localStorage.setItem("toDoListItems", JSON.stringify(lsListItemsArray));

	// console.log(loggedUserListItemsObject);
}
