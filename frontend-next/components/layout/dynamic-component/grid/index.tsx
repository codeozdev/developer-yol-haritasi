export default function GridComponent({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-8 lg:gap-16 items-center">{children}</div>;
}
