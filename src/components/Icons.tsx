/* Outline SVG icon components for tool cards */
import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const base = (size: number, color: string, sw: number, children: React.ReactNode) => (
  <svg
    width={size} height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export function IconWheel({ size = 24, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <line x1="12" y1="2" x2="12" y2="9.5" />
    <line x1="12" y1="14.5" x2="12" y2="22" />
    <line x1="2" y1="12" x2="9.5" y2="12" />
    <line x1="14.5" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="4.22" x2="9.7" y2="9.7" />
    <line x1="14.3" y1="14.3" x2="19.78" y2="19.78" />
    <line x1="19.78" y1="4.22" x2="14.3" y2="9.7" />
    <line x1="9.7" y1="14.3" x2="4.22" y2="19.78" />
  </>);
}

export function IconUser({ size = 24, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </>);
}

export function IconHash({ size = 24, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </>);
}

export function IconTeam({ size = 24, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <circle cx="9" cy="7" r="3.5" />
    <path d="M2 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    <circle cx="18" cy="8" r="2.8" />
    <path d="M21.5 20c0-2.8-2-4.8-5-5.5" />
  </>);
}

export function IconYesNo({ size = 24, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l3 3 5-5" />
  </>);
}

export function IconCoin({ size = 24, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" />
  </>);
}

export function IconSearch({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <>
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </>);
}

export function IconPlus({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>);
}

export function IconX({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>);
}

export function IconTarget({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3" /><path d="M16.5 7.5 21 3" /><path d="m17 3 4 0 0 4" /></>);
}

export function IconVolume({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <><path d="M4 10v4h4l5 4V6l-5 4H4Z" /><path d="M16 9.5a4 4 0 0 1 0 5" /><path d="M18.5 7a7.5 7.5 0 0 1 0 10" /></>);
}

export function IconCloud({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <><path d="M7 18h10a4 4 0 0 0 .4-8A5.5 5.5 0 0 0 7 8.2 4.8 4.8 0 0 0 7 18Z" /><path d="M12 10v6" /><path d="m9.8 13 2.2-2.2 2.2 2.2" /></>);
}

export function IconHistory({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <><path d="M3.5 12a8.5 8.5 0 1 0 2.1-5.6" /><path d="M3.5 4.5v4.7h4.7" /><path d="M12 7.5V12l3 1.8" /></>);
}

export function IconPlay({ size = 20, strokeWidth = 1.8, color = "currentColor" }: IconProps) {
  return base(size, color, strokeWidth, <path d="m9 7 7 5-7 5V7Z" />);
}

