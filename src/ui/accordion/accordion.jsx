import { useRef, useState } from "react";
import './accordion.css';

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef(null);
  const { question, answer, id } = faq;
 
  return (
    <div className="box">
      <div
        className={`header ${active === id ? "active" : ""}`}
        onClick={() => handleToggle(id)}
      >
        <h3>{question}</h3>
        <span 
          className={`span ${active === id ? "rotate" : "" }`}
        >+</span>
      </div>
      <div
        ref={contentEl}
        className={`collapse ${
          active === id ? "show" : ""
        }`}
        style={
          active === id 
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Accordion = ({ faqs }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index);
    }
  };

  return (
    <article>
      {faqs.map((faq, index) => {
        return (
          <AccordionItem 
            key={index}
            active={active}
            handleToggle={handleToggle}
            faq={faq}
          />
        )
      })}
    </article>
  );
};

export default Accordion;
