import python from "./python-svgrepo-com.svg";

const App = () => {
  return (
    <div
      type="button"
      class="text-white bg-[#5c5a5a] hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 gap-2"
    >
      <img src={python} alt="python" width="24px" height="24px" />
      Python
    </div>
  );
};

export default App;
