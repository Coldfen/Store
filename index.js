function render() {
	const productsStore = localStorageUtil.getProducts();

	headerPage.render(productsStore.length);
	productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('http://myjson.dit.upm.es/api/bins/cjn')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		spinnerPage.handleCleare();
		render();
	})
	.catch(() => {
		spinnerPage.handleCleare();
		errorPage.render();
	});