import { lazy, Suspense, useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  useEffect(() => {}, [])
  const Chat = lazy(() => import("./pages/Chat"))
  const Auth = lazy(() => import("./pages/Auth"))
  const LoginForm = lazy(() => import("./components/LoginForm"))
  const RegisterForm = lazy(() => import("./components/RegisterForm"))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />}>
          <Route index element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
        <Route path="/chat" element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
  )
}
export default App