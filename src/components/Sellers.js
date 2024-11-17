import React, { useState } from 'react'
import './Sellers.css'; // Use styles similar to Register.css
const Sellers = () => {
  const [activePrice, setActivePrice] = useState('below250k');
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Why is there a listing fee?", answer: "The listing fee ensures serious sellers and supports the platform's operations." },
    { question: "Do I pay a fee if I can’t sell my startup?", answer: "No, you only pay a success fee if your startup sells successfully." },
    { question: "Who pays for escrow?", answer: "Escrow fees are typically shared between the buyer and the seller." },
    { question: "How does my expert advisor help me?", answer: "Your advisor helps with pricing, negotiation, and ensuring a smooth transaction process." },
    { question: "Do I need professional services (such as a broker) when selling with Acquire.com?", answer: "No, Guided by Acquire offers all the assistance you need without extra brokers." },
    { question: "How does Guided by Acquire work?", answer: "Guided by Acquire provides personalized assistance throughout your selling journey." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
   <>
 <div className="pricing-container">
      {/* Heading Outside the Card */}
      <div className="pricing-heading">
        <h2>A Custom Acquisition Plan that Scales with You</h2>
        <p>Scalable pricing based on your startup’s asking price.</p>
      </div>

      {/* Card */}
      <div className="pricing-card">
        {/* Left Section */}
        <div className="pricing-left">
          <div className="price-tabs">
            <button
              className={`price-tab ${activePrice === 'below250k' ? 'active' : ''}`}
              onClick={() => setActivePrice('below250k')}
            >
              $250k
            </button>
            <button
              className={`price-tab ${activePrice === '250kTo1M' ? 'active' : ''}`}
              onClick={() => setActivePrice('250kTo1M')}
            >
              $250k-$1M
            </button>
            <button
              className={`price-tab ${activePrice === 'above1M' ? 'active' : ''}`}
              onClick={() => setActivePrice('above1M')}
            >
              $1M+
            </button>
          </div>

          <div className="pricing-details">
            {activePrice === 'below250k' && (
              <>
                <h3>For asking prices below $250k</h3>
                <div className="percentage-highlight">8%</div>
                <p>closing fee when you sell<hr className='hr' ></hr></p>
                <p>Plus $25/mo to list</p>
              </>
            )}
            {activePrice === '250kTo1M' && (
              <>
                <h3>For asking prices between $250k-$1M</h3>
                <div className="percentage-highlight">7%</div>
                <p>closing fee when you sell</p>
                <hr className='hr' ></hr>
                <p>Plus $50/mo to list</p>
              </>
            )}
            {activePrice === 'above1M' && (
              <>
                <h3>For asking prices above $1M</h3>
                <div className="percentage-highlight">6%</div>
                <p>closing fee when you sell</p>
                <hr className='hr' ></hr>
                <p>Plus $100/mo to list</p>
              </>
            )}
          </div>

          <a href="#" className="cta-button">Get Started</a>
        </div>

        {/* Right Section */}
        <div className="pricing-right">
          <div className="feature">
            <h3>💼 Maximum Interest</h3>
            <p>Attract more buyers with marketing and listing support.</p>
          </div>

          <div className="feature">
            <h3>🔑 Expert Guidance</h3>
            <p>Sell for the highest price and best terms with our help.</p>
          </div>

          <div className="feature">
            <h3>🔒 Free and Secure Escrow</h3>
            <p>Close safely and easily with trusted escrow partners.</p>
          </div>
        </div>
      </div>
    </div>








    <div className="faq-container">
      <h2>FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>

</>

  )
}

export default Sellers
