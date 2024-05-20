import { Outlet } from "react-router-dom";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-2">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
