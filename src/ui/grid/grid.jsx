import React from 'react';

const Grid = (props) => {
  const { container, item, spacing, direction, justify, alignItems, alignContent, xs, sm, md, lg, xl } = props;

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      boxSizing: 'border-box',
      marginRight: spacing,
      marginLeft: spacing,
    },
    item: {
      boxSizing: 'border-box',
      padding: spacing,
    },
  };

  const getGridSize = (size) => {
    if (typeof size === 'number') {
      return size <= 12 ? `${Math.round((size / 12) * 10e7) / 10e5}%` : '100%';
    }
    return 'auto';
  };

  const getBreakpointSize = (size, breakpoint) => {
    if (typeof size === 'object' && size.hasOwnProperty(breakpoint)) {
      return getGridSize(size[breakpoint]);
    }
    return getGridSize(size);
  };

  return (
    <section
      style={{
        ...styles.container,
        flexDirection: direction,
        justifyContent: justify,
        alignItems,
        alignContent,
      }}
      className={container ? 'container' : ''}
    >
      {React.Children.map(props.children, (child, index) => (
        <div
          key={index}
          style={{
            ...styles.item,
            flex: getBreakpointSize(xs, 'xs'),
            '@media (minWidth: 600px)': { flex: getBreakpointSize(sm, 'sm') },
            '@media (minWidth: 960px)': { flex: getBreakpointSize(md, 'md') },
            '@media (minWidth: 1280px)': { flex: getBreakpointSize(lg, 'lg') },
            '@media (minWidth: 1920px)': { flex: getBreakpointSize(xl, 'xl') },
          }}
          className={item ? 'item' : ''}
        >
          {child}
        </div>
      ))}
    </section>
  );
};

export default Grid;