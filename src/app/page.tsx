import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center pointer-events-none">
        <div className="pointer-events-auto text-center">
          <h1 className="text-5xl font-bold text-white">
            Witaj w moim portfolio!
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Wkrótce pojawi się tu coś niesamowitego.
          </p>
        </div>
      </main>
    </>
  );
}
