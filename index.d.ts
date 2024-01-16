export function hasIrEmitter():Promise<boolean>;
export function getCarrierFrequencies():Promise<{ minFrequency: number; maxFrequency: number }[]>;
export function transmit(carrierFrequencies: number, burstsPattern: number[]) :Promise<boolean>;
export function transmitProntoCode(prontoHexCode: string):  Promise<boolean>;