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

