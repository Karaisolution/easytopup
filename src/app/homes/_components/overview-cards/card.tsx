import { cn } from "@/lib/utils";
import type { JSX, SVGProps } from "react";

type PropsType = {
  label: string;
  data: {
    value: number | string;
  };
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function OverviewCard({ label, data, Icon }: PropsType) {
  return (
    <div className="rounded-[10px] border-2 border-gray-5-500  bg-white p-6 shadow-1 dark:bg-gray-dark">
      <div className="flex items-start justify-between">
        <div>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {data.value}
          </dt>
          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </div>
        <Icon />
      </div>
    </div>
  );
}
