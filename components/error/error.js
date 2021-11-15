class Error{
    render(){
        const html =` <div class ="error-container">
        <div class ="error-message"> <h3>Not access.Error</h3><p>please try again later</p> </div>
        </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}


const errorPage = new Error;