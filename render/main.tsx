import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "@/router/index.tsx";
import { ThemeProvider } from "./themes";
import CtrlBar from "./views/CtrlBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <CtrlBar />
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </ThemeProvider>
);
