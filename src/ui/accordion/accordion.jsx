import { useRef, useState } from "react";

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef(null);
  const { question, answer, id } = faq;

  // Определяем, активен ли текущий элемент
  const isActive = active === id;

  // Генерируем классы для стилизации на основе активности элемента
  //const headerClass = `accordion_header ${isActive ? "accordion_header__active" : ""}`;
  const checkClass = `text_type_span accordion_check ${isActive ? "accordion_check__rotate" : ""}`;
  const collapseClass = `accordion_collapse ${isActive ? "accordion_collapse__show" : ""}`;
  
  // Определяем стили для отображения или скрытия содержимого
  const contentStyle = isActive ? { height: contentEl.current.scrollHeight } : { height: "0px" };
 
  return (
    <li className="accordion_point">
      <div className="accordion_header" onClick={() => handleToggle(id)}>
        <h3 className="text_type_small accordion_question">{question}</h3>
        <span className={checkClass}>+</span>
      </div>
      <div ref={contentEl} className={collapseClass} style={contentStyle}>
        <p className="text_type_default accordion_answer">{answer}</p>
      </div>
    </li>
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
      <ul className="accordion_list">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            active={active} 
            handleToggle={handleToggle} 
            faq={faq} 
          />
        ))}
      </ul>
    </article>
  );
};

export default Accordion;
