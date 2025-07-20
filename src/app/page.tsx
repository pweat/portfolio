"use client";
import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollAnimator from "@/components/ScrollAnimator";
import { TypeAnimation } from "react-type-animation";
import MagneticButton from "@/components/MagneticButton";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <main className="relative z-10 w-full pointer-events-none">
        {/* --- Sekcja Hero --- */}
        <section className="flex h-screen flex-col items-center justify-center text-center">
          <div className="pointer-events-auto">
            <ScrollAnimator>
              <TypeAnimation
                sequence={[
                  "Witaj w moim portfolio!",
                  1500,
                  "Jestem kreatywnym programistą.",
                  2000,
                  "Specjalizuję się w React i Next.js.",
                  2000,
                  "Zobacz, co potrafię.",
                  2500,
                ]}
                wrapper="h1"
                speed={50}
                className="text-5xl font-bold text-white"
                repeat={Infinity}
              />
              <p className="mt-4 text-lg text-gray-400">
                Przewiń w dół, aby dowiedzieć się więcej.
              </p>
            </ScrollAnimator>
          </div>
        </section>

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
              {/* 2. Dodajemy magnetyczny przycisk */}
              <div className="mt-8">
                <MagneticButton>
                  <button className="rounded-full bg-white px-6 py-3 font-semibold text-black transition-colors hover:bg-gray-200">
                    Pobierz CV
                  </button>
                </MagneticButton>
              </div>
            </ScrollAnimator>
          </div>
        </section>

        <section className="flex min-h-screen items-center justify-center py-20">
          <div className="w-full max-w-lg px-4">
            <ScrollAnimator>
              <ProjectCard>
                <h2 className="mb-2 text-3xl font-bold text-white">
                  Przykładowy Projekt
                </h2>
                <p className="text-gray-200">
                  To jest karta projektu z efektem 3D.
                </p>
              </ProjectCard>
            </ScrollAnimator>
          </div>
        </section>
      </main>
    </>
  );
}
