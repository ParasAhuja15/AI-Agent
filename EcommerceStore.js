// Import Font Awesome icons for UI elements (search, cart, user, heart)
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'
// Import the custom ChatWidget component for AI assistance
import ChatWidget from './ChatWidget'

// Main e-commerce store component
const EcommerceStore = () => {

  // Component returns JSX for the entire store layout
  return (
    // React Fragment to wrap multiple elements without extra DOM node
    <>
      {/* Website header section */}
      <header className="header">
        <div className="container">
          <div className="top-bar">
            <div className="logo">ShopSmart</div>
            <div className="search-bar">
              <input type="text" placeholder="Search for products..." />
              <button>
                <FaSearch />
              </button>
            </div>

            <div className="nav-icons">
              <a href="#account">
                {/* User icon with size 20px */}
                <FaUser size={20} />
              </a>
              <a href="#wishlist">
                {/* Heart icon for favorites with size 20px */}
                <FaHeart size={20} />
                <span className="badge">{3}</span>
              </a>
              <a href="#cart">
                {/* Shopping cart icon with size 20px */}
                <FaShoppingCart size={20} />
                <span className="badge">{2}</span>
              </a>
            </div>
          </div>

          {/* Navigation menu bar */}
          <nav className="nav-bar">
            {/* Unordered list for navigation items */}
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Home & Kitchen</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Sports</a></li>
              <li><a href="#">Deals</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content area */}
      <main>
        <div className="hero">
          <div className="container">
            <h1>Summer Sale is Live!</h1>
            <p>Get up to 50% off on selected items. Limited time offer.</p>
            <button>Shop Now</button>
          </div>
        </div>

      </main>

      {/* Website footer section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Clothing</a></li>
                <li><a href="#">Home & Kitchen</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Sports</a></li>
              </ul>
            </div>

            {/* Second footer column - Customer service links */}
            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Order Tracking</a></li>
              </ul>
            </div>

            {/* Third footer column - Company information */}
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Sustainability</a></li>
              </ul>
            </div>

            {/* Fourth footer column - Social media links */}
            <div className="footer-column">
              <h3>Connect With Us</h3>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="copyright">
            {/* Copyright symbol, dynamic year, and company name */}
            &copy {new Date().getFullYear()} ShopSmart. All rights reserved.
          </div>
        </div>
      </footer>

      {/* AI chat widget component (floating chat button/window) */}
      <ChatWidget />
    </>
  )
}

// Export component as default export for use in other files
export default EcommerceStore