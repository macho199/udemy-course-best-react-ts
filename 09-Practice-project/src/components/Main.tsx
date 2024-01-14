import { ChildProcess } from 'child_process';
import React from 'react';

const Main = ({
  addClass = [],
  children,
}: {
  addClass?: string[];
  children: React.ReactNode;
}) => {
  return <div className={['grow', 'pt-14', 'p-10', ...addClass].join(' ')}>{children}</div>;
};

export default Main;
