import Auth from "components/auth/Auth";
import { useParams } from "react-router-dom";

export default function AuthView() {
  const { location } = useParams();

  console.log(useParams());

  return (
    <>
      <Auth />
    </>
  );
}
