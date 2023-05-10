import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/UI/App';
import Context from './Store/Context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context>
    <App />
  </Context>
);
