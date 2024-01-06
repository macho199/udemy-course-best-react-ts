import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>();
  
  const handleSelect = (selectedButton: string) => {
    setSelectedTopic(selectedButton);
  };

  type ExamplesKey = keyof typeof EXAMPLES;
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic as ExamplesKey].title}</h3>
        <p>{EXAMPLES[selectedTopic as ExamplesKey].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic as ExamplesKey].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
};

export default Examples;
