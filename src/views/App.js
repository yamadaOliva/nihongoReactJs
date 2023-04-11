import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Navigation/Nav';
import Todo from './components/Todo/Todo';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          
          <Switch>
            <Route path="/" exact>
              <Todo />
            </Route>
            <Route path="/todos">
              
            </Route>
            <Route path="/about">
             
            </Route>
            <Route path="/user" exact>
              
            </Route>
            <Route path="/user/:id">
             
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
