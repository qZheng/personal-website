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
    caption: "Shot this in Tobermory",
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
    caption: "Foggy night",
  };
 const lightPainting: Photo = {
    src: "/photos/_DSC9649.JPG",
    alt: "",
    caption: "Light painting the 407",
  };

 const liminalRoad: Photo = {
    src: "/photos/_DSC9812.JPG",
    alt: "",
    caption: "Road to nowhere...",
  };

 const campingTrip: Photo = {
    src: "/photos/IMG_2586.PNG",
    alt: "",
    caption: "The Camping Trip of Despair and Misfortune",
  };
  
 const CatAndI: Photo = {
    src: "/photos/IMG_3884.JPG",
    alt: "",
    caption: "Cat",
  };
  
  const momAndDadAndKitty: Photo = {
    src: "/photos/DSC02256.PNG",
    alt: "Photo of mom and dad with the cat",
    caption: "Candid photo of my parents and the cat 🐈",
  };

  const oakvilleSunset: Photo = {
    src: "/photos/DSC02283.JPG",
    alt: "Landscape photo 1",
    caption: "Sunset caught in downtown Oakville.",
  };

  const oakvilleSunset2: Photo = {
    src: "/photos/DSC02289.JPG",
    alt: "Landscape photo 2",
    caption: "Sunset in downtown Oakville.",
  };

  const latte1: Photo = {
    src: "/photos/DSC02292.JPG",
    alt: "Cat",
    caption: "Cat",
  };

  const latte2: Photo = {
    src: "/photos/DSC02719.JPG",
    alt: "The cat sleeping on my dad",
    caption: "Cat"
  }

  const friends: Photo = {
    src: "/photos/DSC02582.JPG",
    alt: "Friends",
    caption: "Some of my friends during a cottage trip.",
  };

  const friends2: Photo = {
    src: "/photos/DSC02614.JPG",
    alt: "Friends",
    caption: "Some of my friends during a cottage trip.",
  };

  const nightSky: Photo = {
    src: "/photos/DSC02630.JPG",
    alt: "Night sky",
    caption: "Meteors caught during the Perseids meteor shower (and the big dipper!)",
  };

  const nightSky2: Photo = {
    src: "/photos/DSC02633.JPG",
    alt: "Red tree, night sky",
    caption: "Light painted this tree after a friend didn't turn off her flashlight.",
  };

  const kayaks: Photo = {
    src: "/photos/DSC02656.JPG",
    alt: "Kayaks on a lake",
    caption: "After an all nighter in the jacuzzi watching the sunrise on the lake.",
  };


  return (
    <div id="about" className="max-w-3xl space-y-[1.65rem]">
{/*       <p className="font-mono text-sm tracking-wide text-slate-500">
        Life/README.md
      </p> */}

      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">
        Life outside of coding
      </h1>

      <p className="text-slate-700">
        Outside of programming, I [surprisingly?] do have other stuff I quite like doing.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold leading-tight">Cool photos</h2>
          <p className="text-slate-700 text-sm">
              A few photos that I think are pretty neat! I like showing people cat photos... all are shot on my iPhone or Sony A7RIII (Tamron 28-75)
          </p>
        <div className="space-y-2">
          <PatternSingle photo={oakvilleSunset} onSelect={setActivePhoto} />
          <PatternTwoLandscapes
            photos={[singingSandsSunset, foggyNight]}
            onSelect={setActivePhoto}
          />
          <PatternSingle photo={nightSky} onSelect={setActivePhoto} />
          <PatternTwoHorizVert
            vertical={foggyNight2}
            top={kayaks}
            bottom={lightPainting}
            onSelect={setActivePhoto}
          />
          <PatternVertTwoHoriz
            vertical={CatAndI}
            top={sunrise}
            bottom={liminalRoad}
            onSelect={setActivePhoto}
          />
          <PatternTwoHorizVert
            vertical={bird}
            top={latte3}
            bottom={latte4}
            onSelect={setActivePhoto}
          />
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
          <PatternTwoHorizVert
            vertical={latte5}
            top={morningDew}
            bottom={campingTrip}
            onSelect={setActivePhoto}
          />

        </div>
      </section>

      <h2 className="text-2xl font-semibold leading-tight">Imagine a video of me playing the guitar here...</h2>
      {/* to-do - lastfm api */}
      <h2 className="text-2xl font-semibold leading-tight">Also my goodreads</h2>

      {/* lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-xl bg-white p-4 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close photo"
              className="absolute right-3 top-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/70 text-2xl leading-none text-slate-700 hover:text-slate-900 hover:bg-white/70"
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

// 4754
//             className="relative w-full max-w-4xl rounded-xl bg-white p-4 shadow-lg"
