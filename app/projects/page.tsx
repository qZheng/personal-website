"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Photo,
  PatternTwoLandscapesWide,
} from "../../components/layout/photos";
import { FaGithub } from "react-icons/fa";



export default function ProjectsPage() {
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
  const loss_curve: Photo = {
    src: "/images/loss_curve.png",
    alt: "Loss curve.",
    caption: "Caught this one during a camping trip with my friends at Bruce Peninsula National Park. ",
  };

  const pred_vs_actual: Photo = {
    src: "/images/pred_vs_actual.png",
    alt: "Predicted prices vs actual",
    caption: "Predicted prices plotted against actual. R^2 = 0.45",
  }

  const trailsense: Photo = {
    src: "/images/trailsense.png",
    alt: "Image of the main TrailSense UI",
    caption: "The main TrailSense UI showcasing the core features",
  }
  const trailsense2: Photo = {
    src: "/images/trailsense2.png",
    alt: "The TrailSense uploaded clips UI",
    caption: "The TrailSense uploaded clips UI.",
  }
  const morningDew: Photo = {
    src: "/photos/_DSC0465.JPG",
    alt: "",
    caption: "Dewy branches in the morning",
  };

  return (
    <div id="projects" className="max-w-3xl space-y-[1.65rem]">
{/*       <p className="font-mono text-sm tracking-wide text-slate-500">
        Projects/README.md
      </p> */}

      <h1 className="text-4xl md:text-3xl font-semibold leading-tight">
        Projects
      </h1>

      <p className="text-slate-700">
        Here are some of the projects I've worked on. You can click on the titles to view the source code in GitHub.
      </p>

      <div className="space-y-8">
        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">
            <a
              href="https://github.com/qZheng/toronto-airbnb-pricing-prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              <span>Toronto Airbnb Linear Regression Model Price Predictor</span>
              <Image
                src="/images/external.svg"
                alt=""
                width={16}
                height={16}
                className="inline-block"
              />
            </a>
          </h3>
          <p className="text-sm text-slate-500 mt-1 mb-2 ">Technologies: Python, PyTorch, scikit-learn, NumPy, Matplotlib </p>
          <PatternTwoLandscapesWide
            photos={[loss_curve, pred_vs_actual]}
            onSelect={setActivePhoto}
          />
          <p className="text-slate-700 mt-3">
            This is my work with Torch and scikit to build a linear regression model that predicts Toronto Airbnb nightly prices.

            The model was trained locally on an M4 Pro MacBook Pro using the Apple MPS backend for PyTorch acceleration. After cleaning the dataset, the script split the data into: Train: 10,866 rows Validation: 2,330 rows Test: 2,329 rows Training stopped automatically at epoch 106 due to early-stopping on validation loss. Final evaluation on the test set gave the following metrics (on the original $ scale): MAE $56.01 RMSE $101.75 R^2 0.4565
          </p>
        </div>

        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">
            <a
              href="https://github.com/qZheng/trailsense"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              <span>TrailSense</span>
              <Image
                src="/images/external.svg"
                alt=""
                width={16}
                height={16}
                className="inline-block"
              />
            </a>
          </h3>
          <p className="text-sm text-slate-500 mt-1 mb-2 ">Technologies: Typescript, Python, Node.js, Flask, TwelveLabs Pegasus/Marengo</p>
          <PatternTwoLandscapesWide
            photos={[trailsense, trailsense2]}
            onSelect={setActivePhoto}
          />
          <p className="text-slate-700 mt-3">
            TrailSense is a semantic video search engine for mountain biking trails. Riders can describe the vibe they’re after (e.g. “fast desert trail with berms”), and the system returns relevant clips, difficulty ratings, and location data pulled from crowdsourced trail footage.
          </p>
        </div>

        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">
            <a
              href="https://github.com/qZheng/syllabus-decoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              <span>SyllaBuddy</span>
              <Image
                src="/images/external.svg"
                alt=""
                width={16}
                height={16}
                className="inline-block"
              />
            </a>
          </h3>          <p className="text-sm text-slate-500 mt-1 mb-2 ">Technologies: Typescript, Python, Next.js, Flask</p>
          <p className="text-slate-700 mt-3">
            Syllabuddy is a web app that allows users to upload their syllabi for AI to parse and summarize. Key details, dates, and information is extracted, which is then aggregated and displayed to the user. Textbook ISBNs are parsed and will determine external links to download them.
          </p>
        </div>
        <div className="border-l-2 border-slate-300 pl-6">
          <h3 className="text-xl font-semibold text-slate-900">
            <a
              href="https://github.com/qZheng/personal-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline"
            >
              <span>Personal Website</span>
              <Image
                src="/images/external.svg"
                alt=""
                width={16}
                height={16}
                className="inline-block"
              />
            </a>
          </h3>
          <p className="text-sm text-slate-500 mt-1 mb-2 ">Technologies: Typescript, Next.js, Tailwind CSS</p>
          <p className="text-slate-700 mt-3">
            You're seeing it right now!
          </p>
        </div>
      </div>

      <p className="text-slate-700">
        Interested in collaborating? <a href="mailto:hello@lucaszheng.net">Let's connect</a>!
      </p>
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
