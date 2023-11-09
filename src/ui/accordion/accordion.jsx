import { useRef, useState } from "react";
import '../../style/styles.css';

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef(null);
  const { question, answer, id } = faq;

  // Определяем, активен ли текущий элемент
  const isActive = active === id;

  // Генерируем классы для стилизации на основе активности элемента
  const headerClass = `header ${isActive ? "active" : ""}`;
  const spanClass = `text_type_span span ${isActive ? "rotate" : ""}`;
  const collapseClass = `collapse ${isActive ? "show" : ""}`;
  
  // Определяем стили для отображения или скрытия содержимого
  const contentStyle = isActive ? { height: contentEl.current.scrollHeight } : { height: "0px" };
 
  return (
    <div className="box">
      <div className={headerClass} onClick={() => handleToggle(id)}>
        <h3 className="question text_type_small">{question}</h3>
        <span className={spanClass}>+</span>
      </div>
      <div ref={contentEl} className={collapseClass} style={contentStyle}>
        <p className="answer text_type_default">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = ({ faqs }) => {
  const [active, setActive] = useState(null);

  // Обработчик переключения активного элемента
  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <article className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          active={active} 
          handleToggle={handleToggle} 
          faq={faq} 
        />
      ))}
    </article>
  );
};

export default Accordion;
