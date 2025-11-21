import React from "react";
import { useParams } from "react-router-dom";

const Trenddetailed = () => {
  const params = useParams();
  return (
    <div className="flex items-center justify-center py-20 text-3xl font-bold">
      {params.id} Trend detailed
    </div>
  );
};

export default Trenddetailed;
