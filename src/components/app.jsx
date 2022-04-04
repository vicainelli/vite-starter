import { h } from "preact";
import { Button } from "./Button";
import { ButtonM } from "./ButtonM";

const App = () => {
  return (
    <div>
      <div>
        <Button />
      </div>
      <div>
        <ButtonM>Button M</ButtonM>
      </div>
    </div>
  );
};

export { App };
