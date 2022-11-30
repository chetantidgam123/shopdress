// import Navbar from "./Component/Navbar/Navbar";

import Navbar from "../TESTING/DROP";
// import S from "./Component/TESTING/HamBurger";
import {Route,Routes} from "react-router-dom";
import ProductPages from "../ProductPages/ProductPages"

function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Navbar/>
     <ProductPages/>
     {/* <Routes>
      <Route path="/blackfriday" element={<ProductPages/>}/>
     </Routes> */}
    {/* <Hambu */}
    {/* <S/> */}
     {/* <img src="https://cdn.shopify.com/s/files/1/0339/0901/files/D1278C61-4817-47FB-838A-3158869549DE_1800x.jpg?v=1669386469" alt="asf"/> */}
    </div>
  );
}

export default App;