export const createLocalStorageEntry = (localStorageKey, data) => {
	const lsEntries = getLocalStorageEntries(localStorageKey);
	lsEntries.push(data);
	console.log(lsEntries);
	localStorage.setItem(localStorageKey, JSON.stringify(lsEntries));
};

export const getLocalStorageEntries = (localStorageKey) => {
	const localStorageCollection = localStorage.getItem(localStorageKey);
	const lsEntries = localStorageCollection
		? JSON.parse(localStorageCollection)
		: [];
	return lsEntries;
};
