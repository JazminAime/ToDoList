import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import ToggleColorMode from "./components/ToggleColorMode";

function App() {
  return (
    <div>
      <ToggleColorMode />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
