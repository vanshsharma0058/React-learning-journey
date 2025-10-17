import Rightcard from "./Rightcard";
import "remixicon/fonts/remixicon.css";
const RightContent = (props) => {
  console.log(props);
  return (
    <div
      id="right"
      className="h-full p-6 w-2/3 overflow-x-auto  flex flex-nowrap gap-4"
    >
      {props.users.map((user, id) => {
        return (
          <Rightcard
            key={id}
            id={id}
            img={user.img}
            intro={user.intro}
            tag={user.tag}
            color={user.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
