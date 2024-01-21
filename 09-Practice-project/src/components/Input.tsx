import React, { ForwardedRef, LegacyRef, forwardRef } from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label: string
}

const classes =
  'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

const Input = forwardRef(({ label, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      <input ref={ref} className={classes} {...props} />
    </p>
  )
})

export default Input;
