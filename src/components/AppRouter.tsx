import { ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";

interface NavLink {
  element: ReactNode,
  path: string,
};

const NavLinks: NavLink[] = [
  {
    element: <Home />,
    path: "/"
  },
  {
    element: <Login />,
    path: "/login"
  },
];

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location}>
        {
          NavLinks.map(
            (navLink, index) => (
              <Route
                key={index}
                path={navLink.path}
                element={
                  <MotionRouteWrapper
                    element={navLink.element}
                  />
                }
              />
            )
          )
        }
        <Route
          path="*"
          element={
            <MotionRouteWrapper
              element={<NotFound />}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

interface MotionRouteWrapperProps {
  element: ReactNode,
};

const MotionRouteWrapper = ({ element }: MotionRouteWrapperProps) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {element}
    </motion.div>
  );
};