import React, { useState } from 'react';
import './Buyers.css';

const Buyers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: "Does a Platinum subscription guarantee I’ll find a startup I like?", 
      answer: "While we provide curated and vetted listings, finding the right startup depends on your preferences and needs." 
    },
    { 
      question: "Can I cancel a Platinum or Premium subscription?", 
      answer: "Yes, you can cancel anytime. Your access will remain active until the end of your billing cycle." 
    },
    { 
      question: "I already have a Premium subscription. Can I upgrade to Platinum?", 
      answer: "Yes, you can upgrade at any time. The cost will be adjusted based on your existing subscription." 
    },
    { 
      question: "How does priority support work with a Platinum subscription?", 
      answer: "Platinum members receive expedited responses and dedicated support from our experienced team." 
    },
    { 
      question: "Do I need a Platinum subscription to acquire more than one startup?", 
      answer: "No, but Platinum offers enhanced tools and access to startups of all sizes, making acquisitions easier." 
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <div className="buyers-container">
      {/* Heading Section */}
      <div className="buyers-heading">
        <h2>Simple, Transparent Pricing</h2>
        <p>
          Whether it’s your first acquisition or you acquire for a living, we’ve got the right plan for you.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="buyers-cards">
        {/* Basic Plan */}
        <div className="buyers-card">
          <h3>For aspiring acquirers</h3>
          <h2 className="plan-title">Basic</h2>
          <div className="plan-price">Free</div>
          <p className="plan-description">Explore 10 listings. No credit card required.</p>
          <button className="cta-button">Start Free Trial</button>
        </div>

        {/* Premium Plan (Highlighted) */}
        <div className="buyers-card premium-card">
          <div className="popular-badge">MOST POPULAR</div>
          <h3>For career entrepreneurs</h3>
          <h2 className="plan-title">⭐ Premium</h2>
          <div className="plan-price">$390/year</div>
          <p className="plan-description">Access startups up to $250k in TTM revenue.</p>
          <button className="cta-button">Start with Premium</button>
        </div>

        {/* Platinum Plan */}
        <div className="buyers-card">
          <h3>For serial acquirers</h3>
          <h2 className="plan-title">💎 Platinum</h2>
          <div className="plan-price">$780/year</div>
          <p className="plan-description">Access vetted startups of all sizes.</p>
          <button className="cta-button">Go Platinum</button>
        </div>
      </div>
    </div>









    <div className="comparison-table-container">
      {/* Heading Section */}
      <div className="comparison-heading">
        <h2>Compare our pricing plans to find the right one for you</h2>
      </div>

      {/* Table Section */}
      <div className="comparison-table">
        {/* Table Header */}
        <div className="table-header">
          <div className="feature-column"></div>
          <div className="plan-column">Free</div>
          <div className="plan-column">Premium</div>
          <div className="plan-column">Platinum</div>
        </div>

        {/* Table Rows */}
        {[
          "View public details of listed startups (up to plan limit)",
          "Filter listings to find your ideal fit",
          "Get instant notifications of new startups matching your search criteria",
          "Browse quality startups curated by our team and delivered straight to your inbox",
          "View connected financial, customer, and web traffic metrics",
          "Streamline your acquisition with our guided workflow",
          "Build, sign, and send LOIs and APAs in minutes",
          "View verified seller profiles (identity, email, and social media)",
          "Contact founders of vetted startups up to $250k in revenue",
          "Contact founders of vetted startups of all sizes",
          "Priority customer support",
        ].map((feature, index) => (
          <div className="table-row" key={index}>
            <div className="feature-column">{feature}</div>
            <div className="plan-column">{index < 3 ? "✔️" : "❌"}</div>
            <div className="plan-column">{index < 6 ? "✔️" : "❌"}</div>
            <div className="plan-column">{index > 8 ? "✔️" : "❌"}</div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="cta-section">
        <button className="cta-button">Start Free Trial</button>
        <button className="cta-button premium-button">Start with Premium</button>
        <button className="cta-button platinum-button">Go Platinum</button>
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
  );
};

export default Buyers;
