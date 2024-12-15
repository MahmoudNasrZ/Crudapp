import { useSelector } from "react-redux";
const withGuard = (Component) => {
  const Wrapper = () => {
    const { isLoggedIn } = useSelector((state) => state.authorization);
    return isLoggedIn ? <Component /> : <h3>Please Log in to show Data </h3>;
  };

  return Wrapper;
};
export default withGuard;
