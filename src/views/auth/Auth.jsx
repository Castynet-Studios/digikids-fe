import { useState, useEffect } from "react";
import Auth from "components/auth/Auth";
import { useLocation } from "react-router-dom";

export default function AuthView() {
  const [location, setLocation] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("/auth/login")) {
      setLocation("login");
    } else if (pathname.includes("auth/register")) {
      setLocation("register");
    } else {
      setLocation("auth");
    }
  }, [pathname]);

  return (
    <>
      <Auth location={location} />
    </>
  );
}
