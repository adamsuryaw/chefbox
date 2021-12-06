import CreateDesc from "./Component/CreateDesc/CreateDesc";
import CreateDirect from "./Component/CreateDirect/CreateDirect";
import CreateIngred from "./Component/CreateIngred/CreateIngred";
import CreateProduct from "./Component/CreateProduct/CreateProduct";
import DetailRecipe from "./Component/DetailRecipe/DetailRecipe";
import Foot from "./Component/Foot/Foot";
import Header from "./Component/Header/Header";
import Recipe from "./Component/Recipe/Recipe";
import Register from "./Component/Register/Register";
import Signup from "./Component/Signup/Signup";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateProduct />
      <Foot />
    </div>
  );
}

export default App;
