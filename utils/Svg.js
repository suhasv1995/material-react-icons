import React from 'react';
import PropTypes from 'prop-types';

const defaultStyles = {
  userSelect: 'none',
  width: '100%',
  fill: 'currentColor',
  fontSize: '24px',
  height: '1em',
  width: '1em'
};

function Svg(props) {
  const { children, className, color, styles, viewBox, ...rest } = props;
  const vb = viewBox || '0 0 24 24';
  return (
    <svg
      className={className}
      focusable="false"
      styles={{ ...defaultStyles, color: color, ...styles }}
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
  styles: PropTypes.object,
  viewBox: PropTypes.string
};

Svg.defaultProps = {
  color: '#000000'
};

export default Svg;
