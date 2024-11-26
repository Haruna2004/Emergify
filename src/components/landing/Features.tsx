import React from "react";
import { Hospital, Brain, Stethoscope, RadioTower, Blocks } from "lucide-react";

function Features() {
  const features = [
    {
      title: "First Aid",
      Icon: Brain,
      description:
        "Access instant, AI-powered first aid guidance. Simply describe the situation, and Emergify provides clear, step-by-step instructions on what to do while you wait for professional help.",
    },
    {
      title: "Hospital Finder",
      Icon: Hospital,
      description:
        "Locate the nearest and most appropriate hospital for your specific needs. Emergify analyzes your emergency description and ranks hospitals based on their capabilities and proximity.",
    },
    {
      title: "Medical Connect",
      Icon: Stethoscope,
      description:
        "Connect with qualified medical professionals remotely when expert advice is crucial. Emergify matches you with the right specialist quickly, especially valuable in disaster zones or remote areas.",
    },
    {
      title: "Accessibility",
      Icon: RadioTower,
      description:
        "Emergify works across multiple platforms – web, mobile app, SMS, and even voice commands – ensuring access even with limited internet or for users with disabilities.",
    },
    {
      title: "Integrations",
      Icon: Blocks,
      description:
        "Governments and organizations can integrate Emergify's APIs to strengthen existing emergency response systems and improve community healthcare access.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Built for communities that need reliable emergency care
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            We focus on regions where immediate medical guidance and expert
            connections can bridge the emergency care gap, whether you&apos;re
            in remote villages or disaster-affected areas
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {features.map(({ title, Icon, description }) => (
            <div key={title}>
              <div className="bg-fbprimary-100 dark:bg-fbprimary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <Icon className="text-fbprimary-600 dark:text-fbprimary-300 h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
