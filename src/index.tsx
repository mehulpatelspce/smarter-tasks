import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import ThemeContext from "./context/theme";
import { ThemeProvider } from "./context/theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,

)
