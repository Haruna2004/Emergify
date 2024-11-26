/* eslint-disable @next/next/no-img-element */
import { Stethoscope } from "lucide-react";
import React from "react";

const introContent = {
  title: "Let's create a safer world by helping each other in emergencies.",
  description:
    "Join a growing network of community responders, healthcare professionals, and concerned citizens making a difference. From local neighborhood watches to global disaster response teams, Emergify empowers communities to build stronger emergency support systems. Share your experiences, learn from others, and be part of a movement that's revolutionizing how we handle emergencies together. Whether you're a medical professional, a community leader, or someone who wants to be better prepared, there's a place for you in our community.",
  cta: "Join Our Community",
  image: "community-response",
};

const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        {/* video */}
        <iframe
          width="560"
          height="315"
          className="w-full rounded-xl"
          src="https://www.youtube.com/embed/2qkKVNlrbQI"
          title="YouTube video player"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        ></iframe>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Let&apos;s create a safer world by helping each other in
            emergencies.
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Join a growing network of community responders, healthcare
            professionals, and concerned citizens making a difference. From
            local neighborhood watches to global disaster response teams.
          </p>
          <a
            href="/register"
            className="bg-fbprimary-700 hover:bg-fbprimary-800 focus:ring-fbprimary-300 dark:focus:ring-fbprimary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
          >
            Register as Medics
            <Stethoscope className="-mr-1 ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
