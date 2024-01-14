import React from 'react';

const Button = ({
  point = false,
  onClick,
  children
}: {
  point?: boolean;
  onClick?: () => void
  children: React.ReactNode;
}) => {
  const classes = ['px-4', 'py-2', 'text-lg', 'rounded'];
  if (point) {
    classes.push('text-white')
    classes.push('bg-slate-700')
  }

  return <button className={classes.join(' ')} onClick={onClick}>{children}</button>;
};

export default Button;
