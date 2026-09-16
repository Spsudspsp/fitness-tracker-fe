import './App.css'

import DashboardPage from "./pages/DashboardPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "./auth/ProtectedRoute.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ExercisesPage from "./pages/ExercisesPage.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <DashboardPage />
                </ProtectedRoute>
            }/>
            <Route path="/exercises" element={
                <ProtectedRoute>
                    <ExercisesPage />
                </ProtectedRoute>
            }/>
          <Route path="/" element={<Navigate to="/dashboard" replace />}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
  )

}

export default App
