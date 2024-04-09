import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css";
import "./HomePage.css";

const FAQMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
    <div className="accordion-menu" id = "FAQs">
      <h5 className="title font-weight-bold text-warning" style = {{fontSize:"30px", color:"#fff"}}>FAQ'S - Frequently Asked Questions</h5>
      <div className="accordion-items">
        <FAQItem
          title="Is Soundarya free?"
          content="Yes, Soundarya is absolutely free!"
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <FAQItem
          title="Does soundarya provide color palette for all skin types?"
          content="Yes, Soundarya has a palette for every skin tone."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <FAQItem
          title="Does my dressing sense improve with this?"
          content="Absolutely!"
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
        <FAQItem
          title="Is it only limited to dressing color palette?"
          content="Not just that! Soundarya also recommends suitable makeup paltette for your skin."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
      </div>
    </div>
  );
};

export default FAQMenu;