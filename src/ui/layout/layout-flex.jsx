import React, { useMemo } from "react";
import '../../style/styles.css';

const LayoutFlex = ({ container, item, nameTag, forwardedRef, gap, children, xs, sm, md, lg, xl }) => {
  const validNames = ['section', 'article', 'footer', 'header'];
  const Tag = validNames.includes(nameTag) ? nameTag : 'div';
  
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

  const getGridSize = (size) => {
    if (typeof size === 'number') {
      return size <= 12 ? `${Math.round((size / 12) * 10e7) / 10e5}%` : '100%';
    }
    return 'auto';
  };

  const combinedStyle = useMemo(() => {
    return {
      ...(container ? { '--gap-gap': gap + 'px' } : {}),
      ...(item
        ? {
            '--xs': getGridSize(sizes.xs),
            '--sm': getGridSize(sizes.sm),
            '--md': getGridSize(sizes.md),
            '--lg': getGridSize(sizes.lg),
            '--xl': getGridSize(sizes.xl),
          }
        : {}),
    };
  }, [container, gap, item, sizes]);
  
  return (
    <Tag 
      style={combinedStyle} 
      className={container ? 'container_flex' : item ? 'item_flex' : ''} 
      ref={forwardedRef}
    >
      {children}
    </Tag>
  );
};

export default React.forwardRef((props, ref) => (
  <LayoutFlex forwardedRef={ref} {...props} />
));