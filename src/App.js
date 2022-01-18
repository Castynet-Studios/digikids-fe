import { Routes, Route } from "react-router-dom";
import { AuthView } from "views";

export default function App() {
  const Dash = () => {
    return (
      <>
        <p>hello</p>
      </>
    );
  };

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
          <Route path="/" element={<Dash />} />
          <Route path="auth" element={<AuthView />} />
          <Route path="auth/login" element={<AuthView />} />
          <Route path="auth/register" element={<AuthView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
