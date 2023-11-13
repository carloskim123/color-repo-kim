export const convertModule = {
    rgbToHsl: (color) => {
        // Implementation for converting RGB to HSL
        const r = color.r / 255;
        const g = color.g / 255;
        const b = color.b / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        let h = 0;
        let s = 0;
        const l = (max + min) / 2;

        if (max !== min) {
            s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);

            switch (max) {
                case r:
                    h = (g - b) / (max - min) + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / (max - min) + 2;
                    break;
                case b:
                    h = (r - g) / (max - min) + 4;
                    break;
            }

            h /= 6;
        }

        return { h, s, l };
    },

    rgbToHex: (color) => {
        // Implementation for converting RGB to HEX
        const toHex = (c) => c.toString(16).padStart(2, '0');
        return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
    },

    hslToRgb: (color) => {
        // Implementation for converting HSL to RGB
        const hueToRgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const { h, s, l } = color;

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        const r = hueToRgb(p, q, h + 1 / 3) * 255;
        const g = hueToRgb(p, q, h) * 255;
        const b = hueToRgb(p, q, h - 1 / 3) * 255;

        return { r, g, b };
    },

    hslToHex: (color) => {
        // Implementation for converting HSL to HEX
        const rgbColor = convertModule.hslToRgb(color);
        return convertModule.rgbToHex(rgbColor);
    },

    hexToHsl: (hex) => {
        // Implementation for converting HEX to HSL
        const rgbColor = convertModule.hexToRgb(hex);
        return convertModule.rgbToHsl(rgbColor);
    },

    hexToRgb: (hex) => {
        // Implementation for converting HEX to RGB
        const hexToDecimal = (hex) => parseInt(hex, 16);
        return {
            r: hexToDecimal(hex.slice(1, 3)),
            g: hexToDecimal(hex.slice(3, 5)),
            b: hexToDecimal(hex.slice(5, 7)),
        };
    },
};
