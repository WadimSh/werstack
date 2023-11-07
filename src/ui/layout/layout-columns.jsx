import React, { useCallback, useMemo } from "react";
import './layout-columns.css';

const validNames = ['section', 'div', 'article', 'footer', 'header'];
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const LayoutColumns = ({ container, item, nameTag, forwardedRef, gap, children, xs, sm, md, lg, xl }) => {
  const Tag = validNames.includes(nameTag) ? nameTag : 'div';

  //Заготовка новому варианту функции
  //const defaultSize = 12;
  //const sizes = {xs, sm, md, lg, xl} = {
  //  xs: xs !== undefined ? xs : defaultSize,
  //  sm: sm !== undefined ? sm : xs || defaultSize,
  //  md: md !== undefined ? md : sm || defaultSize,
  //  lg: lg !== undefined ? lg : md || defaultSize,
  //  xl: xl !== undefined ? xl : lg || defaultSize,
  //};
  
  const getBreakpointSize = useCallback((size) => {
    return size <= 12 ? size : 12;
  }, []);

  const itemStyle = useMemo(() => {
    if (!item) return {};
    let size = getBreakpointSize(xs);
    const sizes = {xs, sm, md, lg, xl};
    for (const [key, value] of Object.entries(breakpoints)) {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        size = getBreakpointSize(sizes[key]);
      }
    }
    return { gridColumn: `span ${size}` };
  }, [xs, sm, md, lg, xl, item, getBreakpointSize]);

  const containerStyle = useMemo(() => {
    return container ? { gap: gap + 'px' } : {};
  }, [container, gap]);

  const combinedStyle = useMemo(() => {
    return { ...containerStyle, ...itemStyle };
  }, [containerStyle, itemStyle]);

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