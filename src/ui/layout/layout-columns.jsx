import React from "react";
import './layout-columns.css';

const LayoutColumns = ({ container, item, nameTag, forwardedRef, gap,  children, xs, sm, md, lg, xl }) => {
  const validNames = ['section', 'div', 'article', 'footer', 'header'];
  const Tag = validNames.includes(nameTag) ? nameTag : 'div';

  const getBreakpointSize = (size, breakpoint) => {
    
  };

  const itemStyle = item && {
    gridColumn: `span ${xs}`,
    '@media (min-width: 600px)': { gridColumn: `span ${sm}` },
    '@media (min-width: 960px)': { gridColumn: `span ${md}` },
    '@media (min-width: 1280px)': { gridColumn: `span ${lg}` },
    '@media (min-width: 1920px)': { gridColumn: `span ${xl}` }
  };
  
  const containerStyle = container && { gap: gap + 'px' };
  
  const combinedStyle = containerStyle || itemStyle;

  return (
    <Tag
      style={combinedStyle}
      className={container ? 'container' : item ? 'item' : ''}
      ref={forwardedRef}
    >
      {children}
    </Tag>
  );
};

export default React.forwardRef((props, ref) => (
  <LayoutColumns forwardedRef={ref} {...props} />
));