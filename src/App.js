import "./scss/main.scss";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Auth/Login";
import { SignUp } from "./components/Auth/SignUp";
import { Form } from "./components/Form/Form";
import { AuthProvider } from "./contexts/AuthContext";

import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/oddaj-rzeczy" element={<PrivateRoute />}>
            <Route exact path="/oddaj-rzeczy" element={<Form />} />
          </Route>
          <Route path="/zarejestruj" element={<SignUp />} />
          <Route path="/zaloguj" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
