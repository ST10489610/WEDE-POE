function openTab(evt, tabId) {
  const tabContents = document.querySelectorAll(".tab-content");
  const tabButtons = document.querySelectorAll(".tab-button");

  // Hide all tab contents
  tabContents.forEach(content => content.classList.remove("active"));

  
  tabButtons.forEach(btn => btn.classList.remove("active"));

  
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}

const image = document.getElementById('flashImage');
let visible = true;

setInterval(() => {
  image.style.opacity = visible ? '0' : '1';
  visible = !visible;
}, 500); // 500ms = 0.5 seconds


 
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const productList = document.getElementById('product-list');
  const products = Array.from(document.querySelectorAll('.product'));

  function renderProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
      productList.appendChild(product);
    });
  }

  function searchAndSortProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;

    let filtered = products.filter(product => {
      return product.dataset.name.toLowerCase().includes(searchValue);
    });

    if (sortValue === 'name') {
      filtered.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
    } else if (sortValue === 'price-low') {
      filtered.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (sortValue === 'price-high') {
      filtered.sort((a, b) => b.dataset.price - a.dataset.price);
    }

    renderProducts(filtered);
  }


  searchInput.addEventListener('input', searchAndSortProducts);
  sortSelect.addEventListener('change', searchAndSortProducts);

  const enquiryType = document.getElementById('enquiryType');
    const productSection = document.getElementById('productSection');
    const volunteerSection = document.getElementById('volunteerSection');

    enquiryType.addEventListener('change', () => {
      const type = enquiryType.value;
      productSection.style.display = type === 'product' ? 'block' : 'none';
      volunteerSection.style.display = type === 'volunteer' ? 'block' : 'none';
    });

    // javaScript for handling form submission 
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
