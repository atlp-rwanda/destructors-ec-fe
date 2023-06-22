import React, { useEffect, useState } from "react";
import Rectangle from "./utils/Rectangle";
import vector1 from "../../assets/Vector1.svg";
import vector2 from "../../assets/Vector2.svg";
import vector3 from "../../assets/Vector3.svg";
import { useGetStats } from "../products/hooks";
import getUserInfo from "../../utils/getUserInfo";

function UpStatisticsBar() {
  const [user, setUser] = useState();
  const info = getUserInfo();
  useEffect(() => {
    setUser(info);
  }, []);
  const stat = useGetStats();
  const grad1 = "from-blue-300 to-green-300";
  const grad2 = "from-orange-300 to-green-300";
  const grad3 = "from-violet-300 to-green-300";
  return (
    <div>
      {user?.data?.role === "seller" && (
        <div className='flex px-2 justify-evenly xs:flex-col xs:gap-1'>
          <>
            <Rectangle
              backgroundImage={grad1}
              vector={vector1}
              size={stat?.data[2]?.productsSoldRevenue + " RWF" || 0}
              title={"Sales"}
            />
            <Rectangle
              backgroundImage={grad2}
              vector={vector2}
              size={stat?.data[2]?.productsSold || '0'}
              title={"Sold Products"}
            />
            <Rectangle
              backgroundImage={grad3}
              vector={vector3}
              size={stat?.data[2]?.lostProductsRevenue + "RWF" || "0"}
              title={"lost Revenues"}
            />
          </>
        </div>
      )}
    </div>
  );
}

export default UpStatisticsBar;
