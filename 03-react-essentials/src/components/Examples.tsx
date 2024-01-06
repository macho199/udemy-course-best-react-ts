import React, { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
