import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Account from './pages/Account';
import All from './pages/All';
import HomePage from './pages/HomePage';
import Lent from './pages/Lent';
import Read from './pages/Read';
import Reading from './pages/Reading';
import Twice from './pages/Twice';
import Unread from './pages/Unread';

function App() {
  return (
    <Router>
      <div className="py-6">
        <Link to="/">HomePage</Link>
        <Link to="/about">About</Link>
        <Link to="/account">Account</Link>
        <Link to="/all">All</Link>
        <Link to="/lent">Lent</Link>
        <Link to="/read">Read</Link>
        <Link to="/reading">Reading</Link>
        <Link to="/twice">Twice</Link>
        <Link to="/unread">Unread</Link>
        <Switch>
          <Route path="/about">
            <div className="p-6 max-w-sm mx-auto bg-yellow-100 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0"></div>
              <div>
                <div className="text-xl font-medium text-blue-light lg:text-blue-dark">
                  ChitChat
                </div>
                <p className="text-gray-500">You have a new message!</p>
              </div>
            </div>
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/all">
            <All />
          </Route>
          <Route path="/lent">
            <Lent />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/reading">
            <Reading />
          </Route>
          <Route path="/twice">
            <Twice />
          </Route>
          <Route path="/unread">
            <Unread />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
