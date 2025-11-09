export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black relative overflow-hidden">

      <main className="flex flex-1 items-center justify-center px-4 text-center relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold tracking-wider text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Edgerun
          </h1>
          <p className="coming-soon mt-12 text-xs font-light tracking-[0.3em] text-gray-400 sm:text-sm md:text-base">
            COMING SOON
          </p>
        </div>
      </main>
      <footer className="py-6 text-center relative z-10">
        <p className="text-xs font-light tracking-widest text-gray-600 sm:text-sm">
          Edgerunner Industries, Inc.
        </p>
      </footer>
    </div>
  );
}
