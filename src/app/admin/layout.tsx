import SideBar from "./_components/SideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-shrink-0 hidden md:block">
        <SideBar />
      </div>
      <div className="md:hidden">
        <SideBar />
      </div>
      <div className="bg-zinc-200 w-full overflow-y-auto">{children}</div>
    </div>
  );
}
