import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

type Inference = {
  intent: string;
  isFinalized: boolean;
  isUnderstood: boolean;
  slots: any;
};

const COMMANDS = ["navigate", "focus"];

export default function useVoiceHandler() {
  const router = useRouter();

  // handle routing to page
  const NavigateToPage = useCallback(
    async (slots: any) => {
      const pages = {
        "first aid": "first-aid",
        hospital: "hospital",
        "medical responder": "responder",
        donation: "donation",
      };

      //@ts-ignore
      const pageLink = pages[slots?.page_value];
      if (!pageLink) {
        console.log("Page is not available");
        return;
      }

      router.push(`/${pageLink}`);
    },
    [router],
  );

  const handleIntentRequest = useCallback(
    async (inference: Inference) => {
      const { intent, slots, isFinalized, isUnderstood } = inference;

      if (!isFinalized || !isUnderstood) {
        return;
      }

      if (!COMMANDS.includes(intent)) {
        return;
      }

      if (intent === "navigate") {
        NavigateToPage(slots);
      }
    },
    [NavigateToPage],
  );

  return {
    handleIntentRequest,
  };
}
