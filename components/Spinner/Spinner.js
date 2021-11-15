class Spinner {

	handleCleare() {
		ROOT_SPINNER.innerHTML = '';
	}

	render() {
		const html = `
        <div class="spinner-container">
           <img class="spinner__img" src='/icon/Spinner-1s-200px.svg' />
        </div> 
        `;

		ROOT_SPINNER.innerHTML = html;

	}
}

const spinnerPage = new Spinner();

