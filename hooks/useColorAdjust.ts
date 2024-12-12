import { useCallback } from 'react';

/**
 * Adjusts a color's brightness.
 * @param {string} color - The base color in hex format (e.g., "#FF5733").
 * @param {number} amount - The percentage to adjust (-100 to 100).
 * @returns {string} - The adjusted color in hex format.
 */
const adjustColorBrightness = (color: string, amount: number): string => {
    let hex = color.replace('#', '');

    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    const num = parseInt(hex, 16);
    const r = Math.min(255, Math.max(0, ((num >> 16) & 0xff) + (255 * amount) / 100));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + (255 * amount) / 100));
    const b = Math.min(255, Math.max(0, (num & 0xff) + (255 * amount) / 100));

    return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b))
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
};

/**
 * Custom hook to lighten or darken colors.
 * @param {string} baseColor - The base color in hex format.
 * @returns {Object} - Functions to lighten and darken the color.
 */
export const useColorAdjust = () => {
    const lighten = useCallback((baseColor: string,percentage: number) => {
        return adjustColorBrightness(baseColor, Math.abs(percentage));
    }, []);

    const darken = useCallback((baseColor: string,percentage: number) => {
        return adjustColorBrightness(baseColor, -Math.abs(percentage));
    }, []);

    return { lighten, darken };
};