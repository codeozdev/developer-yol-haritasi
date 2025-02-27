export default function PaddingContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg lg:rounded-lg shadow-lg w-full overflow-hidden lg:shadow-2xl dark:shadow-md dark:shadow-green-500 p-3 md:p-6 flex flex-col gap-2 md:gap-6">
      {children}
    </div>
  );
}

// ileride h1, p gibi yapilari da buraya alabiliriz
