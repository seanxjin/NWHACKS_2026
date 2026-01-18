import AuthFooter from "@/components/AuthFooter";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Each authenticated page provides its own navbar for flexibility
  return (
    <>
      {children} <AuthFooter />
    </>
  );
}
