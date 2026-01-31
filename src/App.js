// src/App.js
import FragmentLayout from "./components/task1/FragmentLayout";
import Combined from "./components/task1/Combined";
import Section from "./components/task2/Section";
import ProductList from "./components/task2/ProductList";

function App() {
  return (
    <div className="App">
      <FragmentLayout />
      <Combined />
      <Section title="Products">
        <ProductList />
      </Section>
    </div>
  );
}

export default App;
