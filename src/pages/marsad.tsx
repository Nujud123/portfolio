import { Link } from "react-router-dom";
import coverImg from "../assets/projects/marsad/cover.png";
import logoImg from "../assets/projects/marsad/logo.png";
import pipelineImg from "../assets/projects/marsad/pipeline.png";
import resultImg from "../assets/projects/marsad/result.png";

import ui1 from "../assets/projects/marsad/ui-1.png";
import ui2 from "../assets/projects/marsad/ui-2.png";
import ui3 from "../assets/projects/marsad/ui-3.png";
import ui4 from "../assets/projects/marsad/ui-4.png";
import ui5 from "../assets/projects/marsad/ui-5.png";
import ui6 from "../assets/projects/marsad/ui-6.png";

export default function Marsad() {
  const images = {
    cover: coverImg,
    logo: logoImg,
    pipeline: pipelineImg,
    result: resultImg,
    ui: [ui1, ui2, ui3, ui4, ui5, ui6],
  };

  const tech = [
    "Python",
    "YOLO",
    "Roboflow",
    "Computer Vision",
    "Object Detection",
    "Segmentation",
    "Deep Learning",
    "FastAPI",
  ];

  const myRole = [
    "Led the project team, assigned tasks, and ensured smooth coordination across all development stages.",
    "Communicated with external stakeholders such as Jeddah Municipality to validate project requirements and data needs.",
    "Participated in dataset collection and performed large-scale annotation using Roboflow.",
    "Implemented data augmentation strategies and trained YOLO models for street detection and empty-space segmentation.",
    "Developed the AI pipeline that processes satellite images, extracts street segments, and generates afforestation insights.",
    "Designed the project identity including the logo, poster, and promotional stickers.",
  ];

  const links = {
    githubMyPart: "https://github.com/Nujud123/MARSAD-AI-Implementation/tree/main",
  };

  return (
    // ✅ خلي الخلفية تغطي الشاشة كاملة
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-50">
      {/* ✅ الكونتينر العام */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-lg
                     bg-gradient-to-r from-primary-500 to-cyan-500
                     text-white font-medium shadow hover:shadow-lg
                     transition-all duration-300"
        >
          ← Back to Home
        </Link>

        {/* ✅ لا نحتاج section بـ py-20 (كانت تسوي فراغ كبير) */}
        <section>
          <div className="max-w-6xl mx-auto px-0 sm:px-0 lg:px-0">
            {/* ===== Overview ===== */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src={images.logo}
                  alt="MARSAD logo"
                  className="w-16 h-16 object-contain"
                />
                <h1 className="text-4xl font-bold text-gray-900">MARSAD</h1>
              </div>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AI-powered system that analyzes satellite imagery to support urban forestation planning and monitor vegetation coverage across city streets
              </p>

              <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-primary-100">
                <img
                  src={images.result}
                  alt="MARSAD cover"
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gradient-to-r from-primary-50 to-cyan-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ===== My Role ===== */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                My Role & Contribution
              </h2>
              <div className="bg-white rounded-2xl shadow-md border border-primary-50 p-8">
                <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
                  {myRole.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ===== AI Pipeline Overview ===== */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI Pipeline Overview
              </h2>

              <p className="text-gray-600 mb-8">
                The following figure illustrates the full AI pipeline built for MARSAD, including the end-to-end processing stages for detecting empty spaces in streets. This represents the core technical component of the system and reflects my primary contribution to the project.
              </p>

              <img
                src={images.pipeline}
                alt="MARSAD AI Pipeline"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>

            {/* ===== Final System Screens ===== */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Final System Screens
              </h2>
              <p className="text-gray-600 mb-8">
                These screenshots represent the fully integrated system developed by the team, including frontend, backend, mapping, and AI components.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.ui.filter(Boolean).map((src) => (
                  <div
                    key={src}
                    className="bg-white rounded-2xl shadow-md border border-primary-50 overflow-hidden"
                  >
                    <img
                      src={src}
                      alt="MARSAD screenshot"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Challenges & Learnings ===== */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Challenges & Learnings
              </h2>
              <div className="bg-white rounded-2xl shadow-md border border-primary-50 p-8 text-gray-700 leading-relaxed">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Difficulty finding an available labeled dataset for street segmentation, which required creating our own dataset from scratch.
                  </li>
                  <li>
                    Challenges in reviewing literature and identifying the best CV approach for urban afforestation analysis.
                  </li>
                  <li>
                    Handling aerial imagery issues such as inconsistent lighting, shadows covering street medians, and varying image quality across regions.
                  </li>
                  <li>
                    Complexities in designing augmentation strategies—especially ensuring correct mask updates during transformations.
                  </li>
                  <li>
                    Ensuring model predictions remained accurate and stable across different districts despite image diversity.
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== Team ===== */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Team</h2>

              <div className="bg-white rounded-2xl shadow-md border border-primary-50 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Nujud Almaleki</span>
                    <span className="text-gray-600">Project Leader & AI Developer</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Areej Baeshen</span>
                    <span className="text-gray-600">Frontend Developer</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Rama Alsafry</span>
                    <span className="text-gray-600">Backend Developer</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">Dr. Arwa Basabrin</span>
                    <span className="text-gray-600">Supervisor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Links ===== */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Links</h2>
              <p className="text-gray-600 mt-2 mb-4">
                This repository includes only my AI implementation part from the team project.
              </p>

              <div className="flex flex-wrap gap-3">
                {links.githubMyPart && (
                  <a
                    href={links.githubMyPart}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-cyan-500 text-white rounded-xl shadow hover:opacity-90 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
