import React, { useState } from "react";

import "./styles.css";
import List from "./List";
import data from "./data";

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h4>{people.length} Birthday today</h4>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}
