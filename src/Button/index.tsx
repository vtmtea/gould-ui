import React from 'react';
import classNames from 'classnames';

interface IButtonProps {
  type: string,
  children: string
}

function GuButton(props: IButtonProps) {
  const { type = 'default',children } = props;
  return <button className={classNames('btn', `btn-${type}`)}>
    {children}
  </button>;
}

export default GuButton;
