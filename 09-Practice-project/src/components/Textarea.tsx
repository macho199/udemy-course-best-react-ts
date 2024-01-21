import React, { LegacyRef, forwardRef } from 'react';

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label: string;
}

const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

const Textarea = forwardRef(({ label, ...props }: TextareaProps, ref: LegacyRef<HTMLTextAreaElement>) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label>{label}</label>
      <textarea ref={ref} className={classes} {...props}></textarea>
    </p>
  )
})

export default Textarea;
