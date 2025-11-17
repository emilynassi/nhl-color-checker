declare module 'color-blind' {
  export function deuteranopia(color: string): string;
  export function protanopia(color: string): string;
  export function tritanopia(color: string): string;
  export function deuteranomaly(color: string): string;
  export function protanomaly(color: string): string;
  export function tritanomaly(color: string): string;
  export function achromatomaly(color: string): string;
  export function achromatopsia(color: string): string;

  const colorBlind: {
    deuteranopia: typeof deuteranopia;
    protanopia: typeof protanopia;
    tritanopia: typeof tritanopia;
    deuteranomaly: typeof deuteranomaly;
    protanomaly: typeof protanomaly;
    tritanomaly: typeof tritanomaly;
    achromatomaly: typeof achromatomaly;
    achromatopsia: typeof achromatopsia;
  };

  export default colorBlind;
}
