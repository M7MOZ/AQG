import { lazy, Suspense } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
function App() {
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
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Suspense>
  )
}
export default App