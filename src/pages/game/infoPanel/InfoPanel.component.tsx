import "../game.page.css";
import "./infoPanel.css";
import { EnemiesCountComponent } from "./EnemiesCount.component";
import { LifesCountComponent } from "./LifesCount.component";
import { StageNumberComponent } from "./StageNumber.component";

export const InfoPanelComponent = () => (
  <div className="infoPanel">
    <EnemiesCountComponent />
    <LifesCountComponent />
    <StageNumberComponent />
  </div>
);
