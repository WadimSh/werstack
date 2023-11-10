import React, { useMemo } from "react";

const LayoutFlex = ({ container, item, nameTag, forwardedRef, gap, children, xs, sm, md, lg, xl }) => {
  const validNames = ['section', 'article', 'footer', 'header'];
  const Tag = validNames.includes(nameTag) ? nameTag : 'div';
  
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
            '--xs': getGridSize(xs),
            '--sm': getGridSize(sm),
            '--md': getGridSize(md),
            '--lg': getGridSize(lg),
            '--xl': getGridSize(xl),
          }
        : {}),
    };
  }, [container, gap, item, xs, sm, md, lg, xl]);
  
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