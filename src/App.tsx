import React from 'react';
import {Rotas} from './routes'
import {Provider} from './contexts/FormContext'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider>
      <Rotas/>
      <ToastContainer autoClose={1000}/>
    </Provider>
  );
}

export default App;
