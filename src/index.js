import React from 'react';
import PropTypes from 'prop-types';
import { pascalCase } from 'pascal-case';
import { paramCase } from 'param-case';
import * as Icons from './svgs';

function classNames({ name, className = '' }) {
  const base = 'icon ion-icon';
  return `${base} ${name} ${className}`;
}

function IonIcon(props) {
  const { name, className, ...rest } = props;
  const Component = Icons[pascalCase(name)];

  return <Component {...rest} className={classNames({ name, className })} />;
}

IonIcon.propTypes = {
  name: PropTypes.oneOf(Object.keys(Icons).map(paramCase)),
};

IonIcon.defaultProps = {
  name: '',
};

export default IonIcon;
