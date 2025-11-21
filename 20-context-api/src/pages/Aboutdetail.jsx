import { useParams } from "react-router-dom";
const Aboutdetail = () => {
  const detail = useParams();
  return (
    <div>
      <h1 className="info">{detail.id} About Detail Page</h1>
    </div>
  );
};
export default Aboutdetail;
