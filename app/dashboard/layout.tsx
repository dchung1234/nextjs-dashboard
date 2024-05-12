import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}
) {
    return (
        <div className="flex flex-col md:flex-row md:overflow-hidden h-screen">
            <div className="w-full md:w-64 flex-none ">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    );
}