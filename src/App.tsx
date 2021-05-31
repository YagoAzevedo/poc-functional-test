import Planet from "./Pages/Planet";
import { ThemeProvider } from './Contexts/Theme';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Planet />
      </ThemeProvider>
    </div>
  );
}

export default App;
