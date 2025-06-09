import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull, Engine } from "@tsparticles/engine";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#111" },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#888",
            opacity: 0.4,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
