import { HospTreat } from "@/contants/hospital-fts";
import React from "react";

type Props = {
  filteredList: HospTreat[];
};

export default function SearchResult({ filteredList }: Props) {
  return (
    <>
      <div className="z-5 mt-2 max-h-48 overflow-y-scroll rounded-lg border p-2 text-sm shadow-md">
        {filteredList.map(({ category, treatments }) => (
          // command list
          <div key={category}>
            {treatments.length > 0 && (
              // command item
              <>
                <h3 className="font-medium">{category}</h3>
                <hr />
                <div>
                  {treatments.map(({ title, value }) => (
                    <div key={value}>
                      <p>{title}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          // command list end
        ))}
      </div>
    </>
  );
}
