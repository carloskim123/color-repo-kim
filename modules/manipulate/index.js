// manipulate/index.js
import { convertModule } from "../convert";

export const manipulateModule = {
    // Method: Get the complementary color of the given color
    getComplementaryColor: (color) => {
        return {
            r: 255 - color.r,
            g: 255 - color.g,
            b: 255 - color.b,
        };
    },

    // Method: Get split complementary colors based on the given color
    getSplitComplementaryColors: (color) => {
        const complementary = manipulate.getComplementaryColor(color);
        const hue = convertModule.rgbToHsl(color).h;

        return [
            convertModule.hslToRgb({ h: (hue + 30) % 360, s: 1, l: 0.5 }),
            complementary,
            convertModule.hslToRgb({ h: (hue + 330) % 360, s: 1, l: 0.5 }),
        ];
    },

    // Method: Get analogous colors based on the given color
    getAnalogousColors: (color) => {
        const hue = convertModule.rgbToHsl(color).h;

        return [
            convertModule.hslToRgb({ h: (hue + 30) % 360, s: 1, l: 0.5 }),
            color,
            convertModule.hslToRgb({ h: (hue + 330) % 360, s: 1, l: 0.5 }),
        ];
    },

    // Method: Get triadic colors based on the given color
    getTriadicColors: (color) => {
        const hue = convertModule.rgbToHsl(color).h;

        return [
            color,
            convertModule.hslToRgb({ h: (hue + 120) % 360, s: 1, l: 0.5 }),
            convertModule.hslToRgb({ h: (hue + 240) % 360, s: 1, l: 0.5 }),
        ];
    },

    // Method: Get tetradic colors based on the given color
    getTetradicColors: (color) => {
        const hue = convertModule.rgbToHsl(color).h;

        return [
            color,
            convertModule.hslToRgb({ h: (hue + 90) % 360, s: 1, l: 0.5 }),
            convertModule.hslToRgb({ h: (hue + 180) % 360, s: 1, l: 0.5 }),
            convertModule.hslToRgb({ h: (hue + 270) % 360, s: 1, l: 0.5 }),
        ];
    },

    // Method: Get monochromatic colors based on the given color
    getMonochromaticColors: (color, steps = 5) => {
        const hslColor = convertModule.rgbToHsl(color);
        const stepSize = 1 / steps;

        const monochromaticColors = Array.from({ length: steps }, (_, index) => {
            const l = Math.min(1, hslColor.l + index * stepSize);
            return convertModule.hslToRgb({ h: hslColor.h, s: hslColor.s, l });
        });

        return monochromaticColors;
    },

    // Method: Lighten the given color by a specified percentage
    lightenColor: (color, percentage) => {
        const hslColor = convertModule.rgbToHsl(color);
        const lightenedColor = convertModule.hslToRgb({
            h: hslColor.h,
            s: hslColor.s,
            l: Math.min(1, hslColor.l + percentage / 100),
        });

        return lightenedColor;
    },

    // Method: Darken the given color by a specified percentage
    darkenColor: (color, percentage) => {
        const hslColor = convertModule.rgbToHsl(color);
        const darkenedColor = convertModule.hslToRgb({
            h: hslColor.h,
            s: hslColor.s,
            l: Math.max(0, hslColor.l - percentage / 100),
        });

        return darkenedColor;
    },

    // Method: Invert the given color
    invertColor: (color) => {
        return {
            r: 255 - color.r,
            g: 255 - color.g,
            b: 255 - color.b,
        };
    },
};
