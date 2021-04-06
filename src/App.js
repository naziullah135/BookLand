import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminPage from "./components/AdminPage/AdminPage";
import { createContext, useState } from "react";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CheckOut from "./components/CheckOut/CheckOut";
import AddBook from "./components/AddBook/AddBook";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import Orders from "./components/Orders/Orders";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <NavBar />
              <Home />
            </Route>
            <Route path="/home">
              <NavBar />
              <Home />
            </Route>
            <Route path="/login">
              <NavBar />
              <Login />
            </Route>
            <PrivateRoute path="/checkout/:_id">
              <NavBar />
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <NavBar />
             <Orders />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <AdminPage />
            </PrivateRoute>
            <Route path="/manageBooks">
              <ManageBooks />
            </Route>
            <Route path="/addBook">
              <AddBook />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
