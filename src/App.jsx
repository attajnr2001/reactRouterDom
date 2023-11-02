import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import HelpLayout from "./layouts/HelpLayout";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import CareerLayout from "./layouts/CareerLayout";
import Careers, { careersLoader } from "./pages/Careers";
import Career, { careerDetails } from "./pages/Career";
import CareerError from "./pages/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
        <Route path="careers" element={<CareerLayout />}>
          <Route index element={<Careers />} loader={careersLoader} />
          <Route
            path=":id"
            element={<Career />}
            loader={careerDetails}
            errorElement={<CareerError />}
          />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
