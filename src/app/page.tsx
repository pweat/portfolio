// app/page.tsx

import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Witaj w moim portfolio!</h1>
        <p className="mt-4 text-lg text-gray-400">
          Wkrótce pojawi się tu coś niesamowitego.
        </p>
      </main>
    </>
  );
}
