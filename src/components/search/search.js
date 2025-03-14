class SearchBarCategories extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          .container {
            display: flex;
            gap: 10px;
            background: #111;
            padding: 10px;
            border-radius: 8px;
          }
          button, .search {
            background: #222;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
          }
          .search {
            display: flex;
            align-items: center;
            padding: 5px 10px;
          }
          input {
            background: none;
            border: none;
            color: white;
            outline: none;
            padding: 5px;
          }
        </style>
        <div class="container">
          <button>All categories</button>
          <button>Company</button>
          <button>Product</button>
          <button>Design</button>
          <button>Engineering</button>
          <div class="search">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('search-bar-categories', SearchBarCategories);
  export default SearchBarCategories
  