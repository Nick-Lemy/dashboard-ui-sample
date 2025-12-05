import ContentDashboard from "./_components/ContentDashboard";
import SideBar from "./_components/SideBar";

export default function AdminPage() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="bg-zinc-200 w-full">
        <ContentDashboard />
      </div>
    </div>
  );
}
