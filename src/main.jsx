import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation_stack } from './componets/rounter_dom/navigation_stack.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Usereducer } from './componets/usereducer/reducer.jsx';
import { UseReducers } from './componets/usereducer/reducer2.jsx';
import { Countchange } from './componets/hooks/count.jsx';

import { UsememoEx } from './componets/usememo/usememo.jsx';
import Usememohook from './componets/usememo/usememo2.jsx';
import UseCallbackex from './componets/rounter_dom/usecallback/useCallback.jsx';
import { UseCall } from './componets/rounter_dom/usecallback/usecall2.jsx';
import PromisEx from './componets/promises/promis.jsx';
import CrudExample from './componets/crud/crud.jsx';
import Navgations from './componets/rounter_dom/navbar/nav.jsx';
import { ReduxData } from './redux/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ReduxData}>
    <BrowserRouter>
  
  <Navigation_stack/>
  
  </BrowserRouter>
    </Provider>
   
  
  </StrictMode>,
)
