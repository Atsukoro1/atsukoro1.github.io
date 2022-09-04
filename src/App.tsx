import ProgressLine from "./components/ProgressLine";
import Pointer from "./components/Pointer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="fixed top-0">
        <ProgressLine/>
        <Navbar></Navbar>
      </div>

      {/* Main content */}
      <div className="ml-auto mr-auto w-[1000px] mt-[250px]">
        <h4 className="text-blue-600 font-roboto text-xl">Hi, my name is</h4>

        <label className="font-poppins font-bold text-[50px] text-white">Jakub Dornicak</label>
        <p className="font-poppins text-gray-400 font-bold text-[50px] mt-[-15px] text-white">I build things for the web</p>
        <p className="font-poppins mt-2 text-gray-400">
          Frontend & Backend web developing<br/>
          nevim neco nevim neco tu bude
        </p>

        <button className={`
          font-roboto text-blue-600 solid border-blue-600 border-2 pl-5 pb-3 pt-3 pr-5
          hover:opacity-[0.7] transition ease-in-out duration-200 mt-8 rounded-lg font-bold
        `}>
          Download my CV
        </button>
      </div>

      <Pointer/>
    </div>
  );
}

export default App;
