import { useNavigate } from "react-router-dom";

const Error = () => {
  const nav = useNavigate();
  return (
    <div className="h-lvh items-center text-center  bg-gray-200">
      <h1 className="pt-8 md:text-7xl text-black">
        OOPS!!! Something Went Wrong
      </h1>
      <button
        onClick={() => {
          nav(-1);
        }}
        className="px-4 md:py-3 py-1 rounded-md md:rounded-lg bg-common mt-4 md:mt-20 md:text-2xl text-sm text-white font-semibold md:font-bold"
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
