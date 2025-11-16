"use client";

import { useEffect, useState } from "react";
import {
  Photo,
  PatternTwoLandscapes,
  PatternVertTwoHoriz,
  PatternSingle,
  PatternTwoHorizVert
} from "../../components/layout/photos";

export default function AboutPage() {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);

  // close on esc + lock scroll while open
  useEffect(() => {
    if (!activePhoto) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activePhoto]);
  const singingSandsSunset: Photo = {
    src: "/photos/DSC01923.PNG",
    alt: "Sunset at Singing Sands beach in Tobermory.",
    caption: "Caught this one during a camping trip with my friends at Bruce Peninsula National Park. ",
  };

  const bird: Photo = {
    src: "/photos/_DSC0157.JPG",
    alt: "",
    caption: "A bird",
  };
  const latte3: Photo = {
    src: "/photos/_DSC0170.JPG",
    alt: "",
    caption: "The cat (looking fierce!)",
  };
  const latte4: Photo = {
    src: "/photos/_DSC0173.JPG",
    alt: "",
    caption: "The cat",
  };
  const latte5: Photo = {
    src: "/photos/_DSC0187.JPG",
    alt: "",
    caption: "The cat",
  };
  const sunrise: Photo = {
    src: "/photos/_DSC0312.JPG",
    alt: "",
    caption: "Sunrise caught on my way to school.",
  };
  const foggyNight: Photo = {
    src: "/photos/_DSC0451.JPG",
    alt: "",
    caption: "Headlights piercing through the mist.",
  };
  const morningDew: Photo = {
    src: "/photos/_DSC0465.JPG",
    alt: "",
    caption: "Dewy branches in the morning",
  };
  const foggyNight2: Photo = {
    src: "/photos/_DSC0475.JPG",
    alt: "",
    caption: "A very foggy night",
  };
 const lightPainting: Photo = {
    src: "/photos/_DSC9649.JPG",
    alt: "",
    caption: "Light painting Highway 407",
  };

const liminalRoad: Photo = {
    src: "/photos/_DSC9812.JPG",
    alt: "",
    caption: "A road to nowhere...",
  };

const campingTrip: Photo = {
    src: "/photos/IMG_2586.PNG",
    alt: "",
    caption: "Packing up camp in the pouring rain...",
  };
  
const CatAndI: Photo = {
    src: "/photos/IMG_3884.PNG",
    alt: "",
    caption: "My cat likes sitting on me...",
  };
  
  

  const momAndDadAndKitty: Photo = {
    src: "/photos/DSC02256.PNG",
    alt: "Photo of mom and dad with the cat",
    caption: "A cute candid photo of my parents and the cat 🐈",
  };

  const oakvilleSunset: Photo = {
    src: "/photos/DSC02283.JPG",
    alt: "Landscape photo 1",
    caption: "A beautiful sunset caught in downtown Oakville.",
  };

  const oakvilleSunset2: Photo = {
    src: "/photos/DSC02289.JPG",
    alt: "Landscape photo 2",
    caption: "A beautiful sunset caught in downtown Oakville.",
  };


  const latte1: Photo = {
    src: "/photos/DSC02292.JPG",
    alt: "Cat",
    caption: "Latte sleeping in an interesting position...",
  };

  const latte2: Photo = {
    src: "/photos/DSC02719.JPG",
    alt: "The cat sleeping on my dad",
    caption: "Funny side eye... Latte loves sleeping on us."
  }

  const friends: Photo = {
    src: "/photos/DSC02582.JPG",
    alt: "Friends",
    caption: "A nice photo of some of my friends during a cottage trip.",
  };
  const friends2: Photo = {
    src: "/photos/DSC02614.JPG",
    alt: "Friends",
    caption: "A nice photo of some of my friends during a cottage trip.",
  };

  const nightSky: Photo = {
    src: "/photos/DSC02630.JPG",
    alt: "Night sky",
    caption: "Meteors caught during the Perseids meteor shower.",
  };

  const nightSky2: Photo = {
    src: "/photos/DSC02633.JPG",
    alt: "Red tree, night sky",
    caption: "Accidentally light painted this tree after a friend didn't turn off her flashlight.",
  };
  const kayaks: Photo = {
    src: "/photos/DSC02656.JPG",
    alt: "Kayaks on a lake",
    caption: "After pulling an all nighter in the hot tub, we decided to go out onto the kayaks to watch the sunrise and I brought my camera...",
  };


  return (
    <div id="about" className="max-w-3xl space-y-8">
      <p className="font-mono text-sm tracking-wide text-slate-500">
        /LIFE.md
      </p>

      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">
        Life outside of coding
      </h1>

      <p className="text-slate-700">
        Despite being an apparent workaholic (according to friends), I
        [surprisingly?] do have other stuff going on in life.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold leading-tight">Some photos.</h2>
        <p className="text-slate-700 text-sm">
          A few photos I&apos;ve taken recently. Click any of them to see a
          larger version.
        </p>

        <div className="space-y-2">
          <PatternTwoLandscapes
            photos={[singingSandsSunset, oakvilleSunset]}
            onSelect={setActivePhoto}
          />
           <PatternSingle photo={nightSky} onSelect={setActivePhoto} />


          <PatternVertTwoHoriz
            vertical={latte1}
            top={momAndDadAndKitty}
            bottom={latte2}
            onSelect={setActivePhoto}
          />
           <PatternSingle photo={oakvilleSunset2} onSelect={setActivePhoto} />

          <PatternTwoLandscapes
            photos={[nightSky2, friends2]}
            onSelect={setActivePhoto}
          />
          <PatternVertTwoHoriz
            vertical={friends}
            top={kayaks}
            bottom={latte2}
            onSelect={setActivePhoto}
          />
          <PatternTwoHorizVert
            vertical={friends}
            top={kayaks}
            bottom={latte2}
            onSelect={setActivePhoto}
          />

        </div>
      </section>

      <h2 className="text-2xl font-semibold leading-tight">Music!</h2>
      {/* to-do - lastfm api */}

      {/* lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-xl bg-white p-4 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close photo"
              className="absolute right-3 top-3 text-2xl leading-none text-slate-500 hover:text-slate-800"
              onClick={() => setActivePhoto(null)}
            >
              &times;
            </button>

            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="w-full h-auto max-h-[70vh] rounded-lg object-contain"
            />

            {activePhoto.caption && (
              <p className="mt-3 text-sm text-slate-600">
                {activePhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
