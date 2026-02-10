import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Projects";
import { Skills } from "./components/pages/Skills";
import { Fun } from "./components/pages/Fun";
import { Contact } from "./components/pages/Contact";
import { HalideDemo } from "./components/pages/HalideDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "skills", Component: Skills },
      { path: "fun", Component: Fun },
      { path: "contact", Component: Contact },
      { path: "halide", Component: HalideDemo },
    ],
  },
]);
