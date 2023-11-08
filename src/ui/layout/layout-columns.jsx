import React, { useMemo } from "react";
import './layout-columns.css';

const LayoutColumns = ({ container, item, nameTag, forwardedRef, gap, children, xs, sm, md, lg, xl }) => {
  const validNames = ['section', 'div', 'article', 'footer', 'header'];
  const Tag = validNames.includes(nameTag) ? nameTag : 'div';
  const defaultSize = 12;

  const sizes = useMemo(() => {
    return {
      xs: xs || defaultSize,
      sm: sm || xs || defaultSize,
      md: md || sm || xs || defaultSize,
      lg: lg || md || sm || xs || defaultSize,
      xl: xl || lg || md || sm || xs || defaultSize,
    };
  }, [xs, sm, md, lg, xl]);

  const combinedStyle = useMemo(() => {
    return {
      ...(container ? { '--gap-gap': gap + 'px' } : {}),
      ...(item
        ? {
            '--xs': sizes.xs,
            '--sm': sizes.sm,
            '--md': sizes.md,
            '--lg': sizes.lg,
            '--xl': sizes.xl,
          }
        : {}),
    };
  }, [container, gap, item, sizes]);

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