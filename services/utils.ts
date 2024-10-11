import { MutationStatus, useMutationState } from '@tanstack/react-query';

export const xs = (window: { width: number; }) => window.width < 576;
export const sm = (window: { width: number; }) => window.width >= 576;
export const md = (window: { width: number; }) => window.width >= 768;
export const lg = (window: { width: number; }) => window.width >= 992;
export const xl = (window: { width: number; }) => window.width >= 1200;

export const getMutationStatus = (status: MutationStatus) => useMutationState({
  filters: { status },
  select: (mutation) => mutation.state.status,
});

const consoleWarn = console.warn;
const consoleInfo = console.info;
const consoleError = console.error;

const SUPPRESSED_WARNINGS = [
  'deprecated',
  'style props',
  'validateDOMNesting',
];

console.warn = function filterWarnings(msg, ...args) {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg?.includes(entry))) {
    consoleWarn(msg, ...args);
  }
};

console.info = function filterWarnings(msg, ...args) {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg?.includes(entry))) {
    consoleInfo(msg, ...args);
  }
};

console.error = function filterWarnings(msg, ...args) {
  if (!SUPPRESSED_WARNINGS.some((entry) => msg?.includes(entry))) {
    consoleError(msg, ...args);
  }
};
