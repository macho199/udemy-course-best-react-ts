import React from "react";

export default function CoreConcept({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}