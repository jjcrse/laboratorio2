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
            padding: 20px;
            border-radius: 8px;
            margin-left: 460px;
          }
          button, .search {
            background: #222;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: background 0.3s, transform 0.2s;
          }
          button:hover, .search:hover {
            background: #333;
            transform: scale(1.05);
          }
          .search {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            transition: box-shadow 0.3s;
          }
          .search input {
            background: none;
            border: none;
            color: white;
            outline: none;
            padding: 5px;
            transition: width 0.3s;
            width: 80px;
          }
          .search:hover input {
            width: 150px;
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
  