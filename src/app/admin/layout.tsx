import SideBar from "./_components/SideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="bg-zinc-200 w-full">{children}</div>
    </div>
  );
}
