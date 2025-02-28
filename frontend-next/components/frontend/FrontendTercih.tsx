"use client";

import Grid from "@/components/layout/dynamic-component/grid/Grid";
import { frontendTercih } from "@/data/frontend/frontend-tercih";
import Link from "next/link";

export default function FrontendTercih() {
  return (
    <Grid variant="two-column-md">
      {frontendTercih.map((item) => (
        <div
          key={item.title}
          className="h-full flex flex-col bg-white rounded-lg lg:rounded-lg shadow-lg w-full overflow-hidden lg:shadow-2xl dark:shadow-md dark:shadow-green-500 p-3 md:p-6">
          <h3 className="text-center lg:text-left">{item.title}</h3>
          <div className="flex-grow">
            <p className="mb-4">{item.description}</p>
            <ul className="space-y-2 text-gray-600">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span
                    className={`${
                      item.title === "Component Tabanlı" ? "text-green-500" : "text-blue-500"
                    } mr-2`}>
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2">
              <p className="font-medium text-gray-800">Popüler {item.title} Framework&#39;leri:</p>
              <ul className="space-y-1 text-gray-600">
                {item.frameworks.map((framework) => (
                  <li key={framework}>• {framework}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link href={item.link} className={`mt-4`}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xs">
              {item.linkText}
            </button>
          </Link>
        </div>
      ))}
    </Grid>
  );
}
