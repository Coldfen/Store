class Header {
  headlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
         <div class="header-container">
            <div class = "header-counter" onclick="headerPage.headlerOpenShoppingPage();">
            🛒${count}
            </div>
         </div>
       
      `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
