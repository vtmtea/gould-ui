import React from 'react';
import classNames from 'classnames';
import './index.less';

interface IGuButtonProps {
  /**
   * @description 按钮类型，可选值为：default, primary
   * @default default
   */
  type: string;
  children: string;
}

function GuButton(props: IGuButtonProps) {
  const { type = 'default', children } = props;
  return (
    <button className={classNames('gu-btn', `gu-btn-${type}`)}>
      {children}
    </button>
  );
}

export default GuButton;
