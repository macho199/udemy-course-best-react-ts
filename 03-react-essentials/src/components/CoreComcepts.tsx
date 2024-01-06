import React from "react";

import { CORE_CONCEPTS, EXAMPLES } from '../data';
import CoreConcept from '../components/CoreConcept';

const CoreComcepts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreComcepts;
