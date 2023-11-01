import React from "react";

const Title = ({ level = 3, children, customClass }) => {
  // Объект classMap, который содержит соответствия между уровнями заголовков и классами CSS
  const classMap = {
    1: 'text_type_large',
    2: 'text_type_medium',
    3: 'text_type_small',
  };
  // Выбор класса на основе переданного уровня или установка 'text_type_default', если соответствия не найдено
  const selectedClass = classMap[level] || 'text_type_default';
  // Формирование строки с классами, учитывая selectedClass и customClass, фильтрация пустых значений и объединение в одну строку
  const classNames = [selectedClass, customClass].filter(Boolean).join(' ');
  // Определение тега (h1, h2, h3 или h4 в зависимости от уровня), который будет создан
  const Tag = `h${level > 3 ? 4 : level}`;

  return <Tag className={classNames}>{children}</Tag>;
}

export default Title;