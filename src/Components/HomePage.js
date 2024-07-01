import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function HomePage() {
  // Sample data for testimonials, banners, and blog posts
  const testimonials = [
    { id: 1, text: "Great product! Highly recommend.", author: "John Doe" },
    { id: 2, text: "Amazing service! Will definitely buy again.", author: "Jane Smith" }
  ];

  const banners = [
    { id: 1, image: "banner1.jpg", alt: "Promotional Banner 1", link: "/products" },
    { id: 2, image: "banner2.jpg", alt: "Promotional Banner 2", link: "/products" }
  ];

  const materialDevelopment = [
    { id: 1, title: "Antique Turbo Buck", description: "Antique Turbo Buck is top-grain leather that has been sanded or buffed on the grain side, or outside, to give a slight nap of short protein fibers, producing a velvet-like surface. It is resistant to wear, and may be white or coloured." },
    { id: 2, title: "Perfed Mechanic Split", description: "Perfed Mechanic Split leather, also known as perforated mechanic split leather, is a type of leather often used in automotive and industrial applications. It is characterized by its durability and flexibility, making it suitable for tasks that require protection against abrasion and impact while still allowing for dexterity." },
    { id: 3, title: "Quake Buck", description: "Quake Buck leather is a specific type of leather known for its distinctive appearance and durability. It's often used in the production of high-quality boots, shoes, and other leather goods. Quake Buck leather is characterized by its rugged texture, which comes from the tanning process it undergoes. This process usually involves treating the leather with oils and waxes to enhance its water resistance and give it a weathered look." }
  ];

  const blogPosts = [
    { id: 1, title: "10 Tips for Leather Care", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", link: "/blog/post1" },
    { id: 2, title: "The History of Leather Manufacturing", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link: "/blog/post2" }
  ];

  return (
    <div className="homepage-container">
      <header>
        <h1>Asia Tan</h1>
        <nav>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/customers">Customers</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div className="leather-item leather-1">
            <div className="image"></div>
            <div className="description">
              <h3>Leather Type 1</h3>
              <p>Full-grain leather is characterized by its luxurious, smooth surface, and it has few, if any, flaws. It is the most popular type of leather. It has not been snuffed, sanded, or buffed to remove any natural marks or imperfections from its surface. Its fibers are stable and durable because the grain has not been removed. There is less moisture in the leather from prolonged contact as the grain is characteristic of breathing. This type of leather does not wear out easily. Instead, it develops a patina, which is a thin layer that protects the leather from damage from wearing or corroding; it also gives the leather an aesthetic look. It is used in making high-quality footwear and furniture.</p>
            </div>
          </div>
          <div className="leather-item leather-2">
            <div className="image"></div>
            <div className="description1">
              <h3>Leather Type 2</h3>
              <p>Top-grain leather has the second-highest leather quality of the high-end category of leather products. It is more pliable and thinner as its layer is separated away. Its surface is sanded, and a finish coat is added to make it less breathable with a plastic feel, making it seem cooler. Also, it develops a patina that protects it from damage and corrosion, making it last longer. It has better stain resistance and is less expensive than full-grain leather. Many people prefer this type of leather as it is durable and readily available.</p>
            </div>
          </div>
          <div className="leather-item leather-3">
            <div className="image"></div>
            <div className="description2">
              <h3>Leather Type 3</h3>
              <p>Genuine leather is made from real leather. In a class of real leather products, genuine leather products are the lowest in quality. These products are made from leftover leather after the high-end products are made. The products manufactured from it do not look or feel as pleasing compared to those made from high-quality leather. Likewise, products made from genuine leather only last for a short time before they wear out. However, most people can afford this type of leather product as they are widely available.</p>
            </div>
          </div>
          <div className="slider-container">
            <div className="slider">
              {/* Slider content */}
            </div>
          </div>
        </section>

        {/* Additional Details */}
        <section className="additional-details">
          <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonial-list">
              {testimonials.map(testimonial => (
                <div className="testimonial-item" key={testimonial.id}>
                  <p>{testimonial.text}</p>
                  <p>- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="promotional-banners">
            <h2>Promotional Banners</h2>
            <div className="banner-list">
              {banners.map(banner => (
                <div className="banner-item" key={banner.id}>
                  <img src={banner.image} alt={banner.alt} />
                  <Link to={banner.link}>Shop Now</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="newsletter-signup">
            <h2>Newsletter Signup</h2>
            <p>Stay up to date with our latest offers and news. Subscribe to our newsletter:</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="about-us">
            <h2>About Us</h2>
            <p>Asia Tan is a leather industry founded in [year]. Our dedicated team brings expertise and passion to every project, ensuring professionalism and integrity in all interactions. Committed to excellence, we innovate to meet evolving customer needs. Join us as we pursue our vision of [company's vision].Contact us to learn more!</p>
          </div>
          <div className="contact-information">
            <h2>Contact Information</h2>
            <p>Email: example@example.com</p>
            <p>Phone: +123456789</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="social-media-links">
            <h2>Connect With Us</h2>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
          <div className="featured-blog-posts">
            <h2>Featured Blog Posts</h2>
            <div className="blog-post-list">
              {blogPosts.map(post => (
                <div className="blog-post-item" key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={post.link}>Read More</a>
                </div>
              ))}
            </div>
          </div>
          <div className="material-development">
            <h2>Material Development</h2>
            <div className="material-list">
              {materialDevelopment.map(material => (
                <div className="material-item" key={material.id}>
                  <h3>{material.title}</h3>
                  <p>{material.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="call-to-action-buttons">
            <h2>Take Action</h2>
            <button>Shop Now</button>
            <button>Subscribe</button>
            <button>Contact Us</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
