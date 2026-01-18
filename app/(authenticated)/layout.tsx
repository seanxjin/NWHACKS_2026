import AuthenticatedNavbar from "@/components/AuthenticatedNavbar";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthenticatedNavbar />
      {children}
    </>
  );
}