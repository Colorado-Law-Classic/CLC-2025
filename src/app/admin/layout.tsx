/**
 * Admin layout - separate from the main site layout.
 * Does not include the public nav/footer.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
