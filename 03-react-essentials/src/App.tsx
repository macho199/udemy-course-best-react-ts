import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button className="w-20 h-10 bg-slate-700 text-slate-50" onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
};

export default App;
