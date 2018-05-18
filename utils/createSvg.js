import React from 'react';
import Svg from './Svg';

export default function(path, name) {
  const Component = props => <Svg {...props}>{path}</Svg>;
  Component.displayName = name;
  return Component;
}
