// ---------- 36 PRODUCTS (12 per category) ----------
const productsCatalog = [
    { id: 1, title: "Aether Wireless Buds Pro", owner: "SoundScape", price: 89.99, category: "electronics", emoji: "🎧", categoryLabel: "Electronics", rating: 4, specs: "Bluetooth 5.3, 30hr battery, ANC" },
    { id: 2, title: "Chrono Core Smartwatch", owner: "ChronoCore", price: 149.00, category: "electronics", emoji: "⌚", categoryLabel: "Electronics", rating: 5, specs: "Heart rate monitor, GPS, 7-day battery" },
    { id: 3, title: "Noise-X ANC Headphones", owner: "AudioCraft", price: 79.99, category: "electronics", emoji: "🎧", categoryLabel: "Electronics", rating: 4, specs: "Active noise canceling, 40hr playtime" },
    { id: 4, title: "Lumina 4K Drone", owner: "SkyView Labs", price: 399.00, category: "electronics", emoji: "🚁", categoryLabel: "Electronics", rating: 5, specs: "4K camera, 30min flight, GPS tracking" },
    { id: 5, title: "MagSafe Power Bank", owner: "ChargeTech", price: 45.99, category: "electronics", emoji: "🔋", categoryLabel: "Electronics", rating: 4, specs: "10000mAh, wireless charging" },
    { id: 6, title: "HyperX Gaming Keyboard", owner: "PulseGear", price: 129.99, category: "electronics", emoji: "⌨️", categoryLabel: "Electronics", rating: 5, specs: "Mechanical switches, RGB backlight" },
    { id: 7, title: "StreamCam 4K", owner: "VisionEdge", price: 199.00, category: "electronics", emoji: "📸", categoryLabel: "Electronics", rating: 4, specs: "4K ultra HD, autofocus, built-in mic" },
    { id: 8, title: "Portable SSD 1TB", owner: "DataCore", price: 119.00, category: "electronics", emoji: "💾", categoryLabel: "Electronics", rating: 5, specs: "USB 3.2, 1050MB/s read" },
    { id: 9, title: "Smart LED Bulb Kit", owner: "LumeLife", price: 34.99, category: "electronics", emoji: "💡", categoryLabel: "Electronics", rating: 4, specs: "WiFi enabled, 16M colors" },
    { id: 10, title: "Tablet Stylus Pro", owner: "Artisan Digits", price: 59.00, category: "electronics", emoji: "✏️", categoryLabel: "Electronics", rating: 4, specs: "Palm rejection, 4096 pressure levels" },
    { id: 11, title: "WiFi Mesh Router", owner: "NetSphere", price: 189.99, category: "electronics", emoji: "📡", categoryLabel: "Electronics", rating: 5, specs: "Coverage up to 5000 sq ft" },
    { id: 12, title: "VR Headset Explorer", owner: "VirtualX", price: 299.99, category: "electronics", emoji: "🥽", categoryLabel: "Electronics", rating: 4, specs: "110° FOV, motion controllers" },
    { id: 13, title: "Urban Drift Jacket", owner: "Nomad Atlas", price: 119.50, category: "fashion", emoji: "🧥", categoryLabel: "Fashion", rating: 5, specs: "Water-resistant, breathable fabric" },
    { id: 14, title: "Silk Camisole Set", owner: "Luna Studio", price: 59.99, category: "fashion", emoji: "👚", categoryLabel: "Fashion", rating: 4, specs: "100% mulberry silk" },
    { id: 15, title: "Retro High Sneakers", owner: "StrideLab", price: 94.95, category: "fashion", emoji: "👟", categoryLabel: "Fashion", rating: 5, specs: "Vintage style, cushioned sole" },
    { id: 16, title: "Minimalist Backpack", owner: "Urban Vow", price: 79.00, category: "fashion", emoji: "🎒", categoryLabel: "Fashion", rating: 4, specs: "Waterproof, laptop compartment" },
    { id: 17, title: "Wool Blend Overcoat", owner: "Elegance Atelier", price: 189.00, category: "fashion", emoji: "🧥", categoryLabel: "Fashion", rating: 5, specs: "Premium wool-cashmere blend" },
    { id: 18, title: "Leather Crossbody Bag", owner: "Rogue Leather", price: 69.99, category: "fashion", emoji: "👜", categoryLabel: "Fashion", rating: 4, specs: "Genuine leather, adjustable strap" },
    { id: 19, title: "Aviator Sunglasses", owner: "SolarShade", price: 49.00, category: "fashion", emoji: "🕶️", categoryLabel: "Fashion", rating: 4, specs: "UV400 protection, polarized" },
    { id: 20, title: "Cashmere Beanie", owner: "WarmCraft", price: 34.99, category: "fashion", emoji: "🧣", categoryLabel: "Fashion", rating: 5, specs: "Soft cashmere, one size" },
    { id: 21, title: "Denim Cargo Pants", owner: "Denim Society", price: 89.00, category: "fashion", emoji: "👖", categoryLabel: "Fashion", rating: 4, specs: "Stretch denim, multiple pockets" },
    { id: 22, title: "Running Shorts 2.0", owner: "ActiveCore", price: 29.99, category: "fashion", emoji: "🏃", categoryLabel: "Fashion", rating: 4, specs: "Breathable, quick-dry" },
    { id: 23, title: "Silk Scarf", owner: "LuxeSilk", price: 45.00, category: "fashion", emoji: "🧣", categoryLabel: "Fashion", rating: 5, specs: "Hand-rolled edges, pure silk" },
    { id: 24, title: "Leather Chelsea Boots", owner: "BootMaster", price: 159.00, category: "fashion", emoji: "👢", categoryLabel: "Fashion", rating: 5, specs: "Genuine leather, elastic side panels" },
    { id: 25, title: "Zenith Floor Lamp", owner: "ModerNest", price: 199.00, category: "home", emoji: "💡", categoryLabel: "Home & Living", rating: 4, specs: "Dimmable, modern design" },
    { id: 26, title: "Marble Coffee Table", owner: "Artisan Grove", price: 299.00, category: "home", emoji: "🪑", categoryLabel: "Home & Living", rating: 5, specs: "Solid wood, marble top" },
    { id: 27, title: "Aromatherapy Diffuser", owner: "PureAtmos", price: 44.99, category: "home", emoji: "🕯️", categoryLabel: "Home & Living", rating: 4, specs: "Ultrasonic, LED lighting" },
    { id: 28, title: "Velvet Throw Pillow", owner: "CozyNest", price: 29.99, category: "home", emoji: "🛋️", categoryLabel: "Home & Living", rating: 4, specs: "Soft velvet, hypoallergenic fill" },
    { id: 29, title: "Ceramic Plant Pot Set", owner: "GreenSpaces", price: 39.00, category: "home", emoji: "🌿", categoryLabel: "Home & Living", rating: 5, specs: "Set of 3, drainage holes" },
    { id: 30, title: "Bamboo Cutting Board", owner: "KitchenArt", price: 34.99, category: "home", emoji: "🍳", categoryLabel: "Home & Living", rating: 4, specs: "Eco-friendly bamboo" },
    { id: 31, title: "Smart Air Purifier", owner: "PureBreeze", price: 159.99, category: "home", emoji: "🌬️", categoryLabel: "Home & Living", rating: 5, specs: "HEPA filter, WiFi connected" },
    { id: 32, title: "Organic Cotton Sheets", owner: "SleepHaven", price: 89.00, category: "home", emoji: "🛏️", categoryLabel: "Home & Living", rating: 4, specs: "400 thread count, organic" },
    { id: 33, title: "Nordic Bookshelf", owner: "WoodCrafted", price: 129.00, category: "home", emoji: "📚", categoryLabel: "Home & Living", rating: 5, specs: "Solid oak, 5 shelves" },
    { id: 34, title: "Stainless Steel Kettle", owner: "HomeBarista", price: 49.99, category: "home", emoji: "☕", categoryLabel: "Home & Living", rating: 4, specs: "Rapid boil, auto shut-off" },
    { id: 35, title: "Boho Wall Mirror", owner: "DecoVibe", price: 79.00, category: "home", emoji: "🪞", categoryLabel: "Home & Living", rating: 4, specs: "Rattan frame, 24x36 inch" },
    { id: 36, title: "Scented Candle Set", owner: "AmberGlow", price: 27.99, category: "home", emoji: "🕯️", categoryLabel: "Home & Living", rating: 5, specs: "Set of 3, soy wax" }
];

let activeFilter = "all";
let searchQuery = "";
let sortBy = "default";
let filteredProducts = [...productsCatalog];
let currentIndex = 0;
let currentProductForCheckout = null;
let wishlist = JSON.parse(localStorage.getItem("marketflow_wishlist")) || [];

// DOM elements
const productTitleEl = document.getElementById("productTitle");
const ownerNameSpan = document.getElementById("ownerName");
const productPriceSpan = document.getElementById("productPrice");
const categoryBadge = document.getElementById("categoryBadge");
const productEmojiSpan = document.getElementById("productEmoji");
const productRatingSpan = document.getElementById("productRating");
const currentIdxSpan = document.getElementById("currentIdx");
const totalCountSpan = document.getElementById("totalCount");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const productCard = document.getElementById("productCard");
const buyNowBtn = document.getElementById("buyNowBtn");
const wishlistToggleBtn = document.getElementById("wishlistToggleBtn");
const wishlistCounter = document.getElementById("wishlistCounter");
const wishlistStat = document.getElementById("wishlistStat");

function showFeedback(msg, isError = false) {
    let existing = document.querySelector(".dynamic-feedback");
    if (existing) existing.remove();
    const div = document.createElement("div");
    div.className = "dynamic-feedback";
    div.style.background = isError ? "#e74c3c" : "#1e2f44";
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2000);
}

function getStarRating(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function applyFiltersAndSort() {
    let result = [...productsCatalog];
    
    // Apply category filter
    if (activeFilter !== "all") {
        result = result.filter(p => p.category === activeFilter);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        result = result.filter(p => 
            p.title.toLowerCase().includes(query) || 
            p.owner.toLowerCase().includes(query)
        );
    }
    
    // Apply sorting
    if (sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
        result.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    filteredProducts = result;
    if (currentIndex >= filteredProducts.length) currentIndex = Math.max(0, filteredProducts.length - 1);
    if (filteredProducts.length === 0) currentIndex = -1;
    updateProductDisplay();
    updateTotalStats();
}

function updateProductDisplay() {
    if (!filteredProducts.length || currentIndex < 0) {
        productTitleEl.innerText = "No products found";
        ownerNameSpan.innerText = "—";
        productPriceSpan.innerText = "0.00";
        categoryBadge.innerText = "none";
        productEmojiSpan.innerText = "🔍";
        productRatingSpan.innerText = "☆☆☆☆☆";
        currentIdxSpan.innerText = "0";
        totalCountSpan.innerText = "0";
        return;
    }
    const p = filteredProducts[currentIndex];
    productTitleEl.innerText = p.title;
    ownerNameSpan.innerText = p.owner;
    productPriceSpan.innerText = p.price.toFixed(2);
    categoryBadge.innerText = p.categoryLabel;
    productEmojiSpan.innerText = p.emoji;
    productRatingSpan.innerText = getStarRating(p.rating);
    currentIdxSpan.innerText = currentIndex + 1;
    totalCountSpan.innerText = filteredProducts.length;
    
    // Update wishlist button state
    const isWishlisted = wishlist.some(item => item.id === p.id);
    wishlistToggleBtn.classList.toggle("active-wishlist", isWishlisted);
    wishlistToggleBtn.innerText = isWishlisted ? "❤️" : "🤍";
    
    productCard.classList.remove("card-transition");
    void productCard.offsetWidth;
    productCard.classList.add("card-transition");
    setTimeout(() => productCard.classList.remove("card-transition"), 360);
}

function updateTotalStats() {
    document.getElementById("totalStat").innerText = productsCatalog.length;
    document.getElementById("categoryStat").innerText = "3";
    document.getElementById("wishlistStat").innerText = wishlist.length;
    wishlistCounter.innerText = `❤️ ${wishlist.length}`;
    localStorage.setItem("marketflow_wishlist", JSON.stringify(wishlist));
}

function nextProduct() { 
    if (filteredProducts.length && currentIndex < filteredProducts.length - 1) {
        currentIndex++; 
        updateProductDisplay(); 
        showFeedback(`➡️ ${filteredProducts[currentIndex].title}`);
    } else if (filteredProducts.length) {
        showFeedback("You've reached the end!");
    }
}
function prevProduct() { 
    if (filteredProducts.length && currentIndex > 0) { 
        currentIndex--; 
        updateProductDisplay();
        showFeedback(`⬅️ ${filteredProducts[currentIndex].title}`);
    } else if (filteredProducts.length) {
        showFeedback("You're at the first product!");
    }
}

// Wishlist Functions
function toggleWishlist() {
    if (!filteredProducts.length || currentIndex < 0) return;
    const product = filteredProducts[currentIndex];
    const existingIndex = wishlist.findIndex(item => item.id === product.id);
    
    if (existingIndex === -1) {
        wishlist.push({ ...product });
        showFeedback(`❤️ Added "${product.title}" to wishlist!`);
    } else {
        wishlist.splice(existingIndex, 1);
        showFeedback(`💔 Removed "${product.title}" from wishlist`);
    }
    updateProductDisplay();
    updateTotalStats();
}

function openWishlistModal() {
    const wishlistItemsDiv = document.getElementById("wishlistItems");
    if (wishlist.length === 0) {
        wishlistItemsDiv.innerHTML = '<p style="text-align: center; color: #888;">Your wishlist is empty </p>';
    } else {
        wishlistItemsDiv.innerHTML = wishlist.map(item => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem; border-bottom: 1px solid #eee;">
                <div>
                    <strong>${item.emoji} ${item.title}</strong><br>
                    <small>$${item.price.toFixed(2)}</small>
                </div>
                <button class="filter-btn" onclick="removeFromWishlist(${item.id})" style="background:#e74c3c; color:white;">Remove</button>
            </div>
        `).join('');
    }
    document.getElementById("wishlistModal").style.display = "flex";
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    updateTotalStats();
    openWishlistModal(); // refresh modal
    showFeedback("Removed from wishlist");
}

function clearWishlist() {
    wishlist = [];
    updateTotalStats();
    openWishlistModal();
    showFeedback("Wishlist cleared");
}

function closeWishlistModal() {
    document.getElementById("wishlistModal").style.display = "none";
}

// Quick View
function openQuickViewModal() {
    if (!filteredProducts.length || currentIndex < 0) return;
    const p = filteredProducts[currentIndex];
    const content = `
        <p><strong>Product:</strong> ${p.title}</p>
        <p><strong>Brand:</strong> ${p.owner}</p>
        <p><strong>Price:</strong> $${p.price.toFixed(2)}</p>
        <p><strong>Category:</strong> ${p.categoryLabel}</p>
        <p><strong>Rating:</strong> ${getStarRating(p.rating)}</p>
        <p><strong>Specs:</strong> ${p.specs || "Premium quality product"}</p>
        <p><strong>Shipping:</strong> Free worldwide</p>
    `;
    document.getElementById("quickViewContent").innerHTML = content;
    document.getElementById("quickViewModal").style.display = "flex";
}

function closeQuickViewModal() {
    document.getElementById("quickViewModal").style.display = "none";
}

// Checkout Modal
function openCheckoutModal() {
    if (!filteredProducts.length || currentIndex < 0) return;
    currentProductForCheckout = filteredProducts[currentIndex];
    const infoDiv = document.getElementById("checkoutProductInfo");
    infoDiv.innerHTML = `
        <strong> ${currentProductForCheckout.title}</strong><br>
        by ${currentProductForCheckout.owner}<br>
        <span style="font-size: 1.5rem; color:#2a6b2f;">$${currentProductForCheckout.price.toFixed(2)}</span>
    `;
    document.getElementById("checkoutModal").style.display = "flex";
    document.getElementById("paymentForm").reset();
}

function closeCheckoutModal() {
    document.getElementById("checkoutModal").style.display = "none";
}

// Modal Functions
function openAboutModal() {
    document.getElementById("aboutModal").style.display = "flex";
}
function closeAboutModal() {
    document.getElementById("aboutModal").style.display = "none";
}

// Payment Handler
document.getElementById("paymentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fullName").value.trim();
    const card = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    
    if (!name || !card || !expiry || !cvv) {
        showFeedback("Please fill all payment details", true);
        return;
    }
    if (card.replace(/\s/g, '').length < 15) {
        showFeedback("Invalid card number", true);
        return;
    }
    showFeedback(`✅ Payment successful! Thank you ${name}, you purchased "${currentProductForCheckout.title}"`);
    closeCheckoutModal();
});

// Card input formatting
document.getElementById("cardNumber")?.addEventListener("input", function(e) {
    let val = e.target.value.replace(/\s/g, '');
    if (val.length > 16) val = val.slice(0,16);
    let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
    e.target.value = formatted;
});

// Event Listeners
function init() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            activeFilter = btn.getAttribute("data-filter");
            applyFiltersAndSort();
            showFeedback(`Showing ${filteredProducts.length} items`);
        });
    });
    
    document.getElementById("searchInput").addEventListener("input", (e) => {
        searchQuery = e.target.value;
        applyFiltersAndSort();
        showFeedback(`Found ${filteredProducts.length} results`);
    });
    
    document.getElementById("sortSelect").addEventListener("change", (e) => {
        sortBy = e.target.value;
        applyFiltersAndSort();
        showFeedback(`Sorted by ${e.target.options[e.target.selectedIndex].text}`);
    });
    
    prevBtn.addEventListener("click", prevProduct);
    nextBtn.addEventListener("click", nextProduct);
    buyNowBtn.addEventListener("click", openCheckoutModal);
    wishlistToggleBtn.addEventListener("click", toggleWishlist);
    document.getElementById("aboutUsLink").addEventListener("click", openAboutModal);
    document.getElementById("wishlistLink").addEventListener("click", openWishlistModal);
    document.getElementById("clearWishlistBtn").addEventListener("click", clearWishlist);
    document.getElementById("quickViewBtn").addEventListener("click", openQuickViewModal);
    
    window.onclick = (e) => {
        if (e.target.classList.contains("modal")) e.target.style.display = "none";
    };
    
    applyFiltersAndSort();
    updateTotalStats();
}

init();
