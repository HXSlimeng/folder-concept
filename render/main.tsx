import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "@/router/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
);
