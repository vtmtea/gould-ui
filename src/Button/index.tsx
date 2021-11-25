import React from 'react';

interface IButtonProps {
  title: string;
}

function Button(props: IButtonProps) {
  const { title } = props;
  return <button>{title}</button>;
}

export default Button;
