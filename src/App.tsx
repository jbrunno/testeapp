import { RouterContext } from "./application/routes/context";
import { MuiContext } from "./application/theme";

export function App() {
  return (
    <MuiContext>
      <RouterContext />
    </MuiContext>
  );
}
