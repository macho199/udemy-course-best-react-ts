import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
