import { useBioContext } from ".";

const Home = () => {
  const { myname, age } = useBioContext();
  return <div>{`${myname},${age}`}</div>;
};

export default Home;
