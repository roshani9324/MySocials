import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#050908] text-white">
      <Sidebar />

      <div className="lg:ml-[230px]">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
