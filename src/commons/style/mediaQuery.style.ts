export const breakpoints = [1400, 840, 600, 430];
export const mediaQuery = breakpoints.map(
  (bp: number) => `@media (max-width: ${bp}px)`
);
