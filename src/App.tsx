import { Route, Routes } from "react-router";
import "./App.css";
import { GameSpaceComponent } from "./components/GameSpace.component";
import { MenuPage } from "./pages/menu";
import { GamePage } from "./pages/game";
import { ConstructorPage } from "./pages/constructor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GameSpaceComponent />}>
        <Route index element={<MenuPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/constructor" element={<ConstructorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
