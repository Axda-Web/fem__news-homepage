import { BsTools } from "react-icons/bs";

export const metadata = {
  title: "W. | Popular",
  description: "Building in progress",
};

const PopularPage = () => {
  return (
    <div className="flex flex-col items-center mt-[33vh] gap-y-6">
      <BsTools className="h-20 w-20 text-neutral--very-dark-blue" />
      <div className="text-xl font-normal text-neutral--very-dark-blue">
        Building in progress...
      </div>
    </div>
  );
};
export default PopularPage;
