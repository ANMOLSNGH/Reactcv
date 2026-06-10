import react from 'react';
import ReactDom from "react-dom/client";
import app from './app';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<app/>);