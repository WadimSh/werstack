import React from "react";
import './layout-columns.css';

const LayoutColumns = ({ container, item, nameTag, forwardedRef, gap,  children, xs, sm, md, lg, xl }) => {
  const validNames = ['section', 'div', 'article', 'footer', 'header'];
  const Tag = validNames.includes(nameTag) ? nameTag : 'div';

  const getBreakpointSize = (size, breakpoint) => {
    if (size !== undefined) {
      return size <= 12 ? size : 12;
    }
      return size = 12;
  };

  const itemStyle = item ? {gridColumn: `span ${getBreakpointSize(xs)}`} : {};

    if (window.matchMedia("(min-width: 600px)").matches) {
      itemStyle.gridColumn = `span ${getBreakpointSize(sm)}`;
    }
    
    if (window.matchMedia("(min-width: 960px)").matches) {
      itemStyle.gridColumn = `span ${getBreakpointSize(md)}`;
    }
    
    if (window.matchMedia("(min-width: 1280px)").matches) {
      itemStyle.gridColumn = `span ${getBreakpointSize(lg)}`;
    }
    
    if (window.matchMedia("(min-width: 1920px)").matches) {
      itemStyle.gridColumn = `span ${getBreakpointSize(xl)}`;
    }
  
  const containerStyle = container ? { gap: gap + 'px' } : {};
  
  const combinedStyle = { ...containerStyle, ...itemStyle };

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