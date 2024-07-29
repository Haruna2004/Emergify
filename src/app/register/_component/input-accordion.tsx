import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { hospital_treatment } from "@/contants/hospital-fts";

type Props = {};

function InputAccordion({}: Props) {
  return (
    <Accordion type="single" collapsible>
      {hospital_treatment.map(({ category, treatments }) => (
        <AccordionItem value={category} key={category}>
          <AccordionTrigger>{category}</AccordionTrigger>
          <AccordionContent>
            {treatments.map(({ title, value }) => (
              <div key={value}>
                <p>{title}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default InputAccordion;
