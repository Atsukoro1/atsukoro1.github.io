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
      <div className="ml-auto mr-auto w-[1000px] bg-white mt-20">
        <div style={{ height: "2900px", width: "20px" }}>fd</div>
      </div>

      <Pointer/>
    </div>
  );
}

export default App;
