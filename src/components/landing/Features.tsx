import React from "react";

function Features() {
  const features = [
    {
      title: "First Aid",
      icon: "heart",
      description:
        "Access instant, AI-powered first aid guidance. Simply describe the situation, and Emergify provides clear, step-by-step instructions on what to do while you wait for professional help.",
    },
    {
      title: "Hospital Finder",
      icon: "hospital",
      description:
        "Locate the nearest and most appropriate hospital for your specific needs. Emergify analyzes your emergency description and ranks hospitals based on their capabilities and proximity.",
    },
    {
      title: "Medical Connect",
      icon: "phone",
      description:
        "Connect with qualified medical professionals remotely when expert advice is crucial. Emergify matches you with the right specialist quickly, especially valuable in disaster zones or underserved areas.",
    },
    {
      title: "Accessibility",
      icon: "accessibility",
      description:
        "Emergify works across multiple platforms – web, mobile app, SMS, and even voice commands – ensuring access even with limited internet or for users with disabilities.",
    },
    {
      title: "Integrations",
      icon: "api",
      description:
        "Governments and organizations can integrate Emergify's powerful APIs to strengthen existing emergency response systems and improve community healthcare access.",
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
          {features.map(({ title, icon, description }) => (
            <div key={title}>
              <div className="bg-fbprimary-100 dark:bg-fbprimary-900 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-fbprimary-600 dark:text-fbprimary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
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
