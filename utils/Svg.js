import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  userSelect: 'none',
  width: '100%',
  fill: 'currentColor',
  height: '1em',
  verticalAlign: 'middle',
  width: '1em'
};

function Svg(props) {
  const { children, className, color, size, styles, viewBox, ...rest } = props;
  const vb = viewBox || '0 0 24 24';
  return (
    <svg
      className={className}
      focusable="false"
      styles={{
        ...defaultStyles,
        color: color,
        fontSize: `${size}px`,
        ...styles
      }}
      viewBox={vb}
      {...rest}
    >
      {children}
    </svg>
  );
}

Svg.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  styles: PropTypes.object,
  viewBox: PropTypes.string
};

Svg.defaultProps = {
  color: 'inherit',
  size: 24
};

export default Svg;
