import ProgressLine from "./components/ProgressLine";
import Navbar from "./components/Navbar";
import Wave from "./components/Wave";

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
          inline-flex items-center
        `}>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download my CV</span>
        </button>
      </div>

      <div>
        <Wave 
          opacity={0.6} 
          path="M0,192L60,176C120,160,240,128,360,144C480,160,600,224,720,229.3C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />

        <Wave 
          opacity={0.1} 
          path="M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,154.7C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />

        <Wave 
          opacity={0.3} 
          path="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,170.7C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </div>
    </div>
  );
}

export default App;
