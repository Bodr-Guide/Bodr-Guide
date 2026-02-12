"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  icon?: React.ReactElement;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, icon, badge, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="w-5 h-5 text-slate-600 dark:text-slate-400">{icon}</span>}
          <span className="text-sm font-semibold text-slate-900 dark:text-white">{title}</span>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              {badge}
            </span>
          )}
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-slate-950 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="flex flex-col gap-3">{children}</div>;
}
