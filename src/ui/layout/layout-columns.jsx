import React, { useMemo } from "react";
import '../../style/styles.css';

const LayoutColumns = ({ container, item, forwardedRef, gap, children, xs, sm, md, lg, xl }) => {
  const Tag = container ? 'section' : 'div';
    
  const sizes = useMemo(() => {
    const defaultSize = 12;
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
      className={container ? 'container_columns' : item ? 'item_columns' : ''} 
      ref={forwardedRef}
    >
      {children}
    </Tag>
  );
};

export default React.forwardRef((props, ref) => (
  <LayoutColumns forwardedRef={ref} {...props} />
));