import { Section } from "../Section";
import { breakpoints } from "../content";
import { DesktopIcon, MobileIcon, TabletIcon } from "../icons";

const breakpointIcons = [MobileIcon, TabletIcon, DesktopIcon] as const;

/** 07 — Breakpoints. */
export function BreakpointsSection({ className }: { className?: string }) {
  return (
    <Section number="07" title="Breakpoints" className={className}>
      <div className="grid gap-5 sm:grid-cols-3">
        {breakpoints.map((breakpoint, index) => {
          const Icon = breakpointIcons[index];
          return (
            <div key={breakpoint.name} className="flex gap-3">
              <Icon className="size-8 shrink-0 text-neutral-950" />
              <div className="min-w-0">
                <p className="text-label-l text-neutral-950">
                  {breakpoint.name}
                </p>
                <p className="text-label-l text-neutral-950">
                  {breakpoint.range}
                </p>
                <p className="text-caption text-neutral-600">
                  {breakpoint.columns}
                </p>
                <p className="text-caption text-neutral-600">
                  {breakpoint.margin}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
