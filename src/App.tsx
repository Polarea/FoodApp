import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";
import Recipe from "./components/Recipe";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  // const [isClicked, setIsClicked] = useState(false);
  return <Menu />;
}

export default App;

//  {/* <div>
//         {isClicked === true && (
//           <Alert onClick={() => setIsClicked(false)}>
//             Hello <span>World</span>
//           </Alert>
//         )}
//         <MyButton handleClick={() => setIsClicked(true)}>My Button</MyButton>
//       </div> */}
