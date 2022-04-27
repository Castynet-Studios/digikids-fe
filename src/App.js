import { Routes, Route } from "react-router-dom";
import { AuthView, DashView } from "views";

export default function App() {
  

  const NotFound = () => {
    return (
      <>
        <p>404</p>
      </>
    );
  };

  return (
    <>
      <div data-testid="app">
        <Routes>
          <Route path="/" element={<DashView />} />
          <Route path="auth" element={<AuthView />} />
          <Route path="auth/login" element={<AuthView />} />
          <Route path="auth/register" element={<AuthView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
