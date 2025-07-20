import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <>
      <InteractiveBackground />

      <main className="relative z-10 w-full pointer-events-none">
        {/* --- Sekcja Hero --- */}
        <section className="flex h-screen flex-col items-center justify-center text-center">
          <div className="pointer-events-auto">
            <ScrollAnimator>
              <h1 className="text-5xl font-bold text-white">
                Witaj w moim portfolio!
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Przewiń w dół, aby dowiedzieć się więcej.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* --- Sekcja O Mnie --- */}
        <section className="flex min-h-screen items-center justify-center py-20">
          <div className="pointer-events-auto max-w-2xl rounded-lg bg-black bg-opacity-30 p-8 text-center backdrop-blur-sm">
            <ScrollAnimator>
              <h2 className="mb-4 text-4xl font-bold text-white">O Mnie</h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                neque elit, tristique placerat siam ac, facilisis vitae odio.
                Cras commodo, ex ac vulputate pharetra, ex justo interdum
                ligula, ut vulputate sem justo et quam.
              </p>
            </ScrollAnimator>
          </div>
        </section>

        {/* --- Sekcja Projekty --- */}
        <section className="flex min-h-screen items-center justify-center py-20">
          <div className="pointer-events-auto max-w-2xl rounded-lg bg-black bg-opacity-30 p-8 text-center backdrop-blur-sm">
            <ScrollAnimator>
              <h2 className="mb-4 text-4xl font-bold text-white">Projekty</h2>
              <p className="text-gray-300">
                Tutaj wkrótce pojawią się moje niesamowite projekty. Każdy z
                nich będzie miał własną, animowaną kartę. Stay tuned!
              </p>
            </ScrollAnimator>
          </div>
        </section>
      </main>
    </>
  );
}
