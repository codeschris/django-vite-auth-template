import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/profile/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from "./pages/not_found.tsx";
import { Toaster } from "sonner";

function App() {
        return (
          <Router>
            <Toaster position="top-right" richColors />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route
                path="/user/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
                <Route path="not_found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        );
      }

      export default App;