export const parseModule = {
    hexToRgb: (hex) => {
        // Implementation for parsing HEX to RGB
        const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        const result = hexRegex.exec(hex);

        if (!result) {
            // Invalid HEX format
            console.error('Invalid HEX color format');
            return null;
        }

        const [, r, g, b] = result.map(part => parseInt(part, 16));

        return { r, g, b };
    },

    cssNameToRgb: (cssColorName) => {
        // Implementation for parsing CSS color names to RGB
        const namedColors = {
            red: { r: 255, g: 0, b: 0 },
            green: { r: 0, g: 255, b: 0 },
            blue: { r: 0, g: 0, b: 255 },
            yellow: { r: 255, g: 255, b: 0 },
            purple: { r: 128, g: 0, b: 128 },
            cyan: { r: 0, g: 255, b: 255 },
            pink: { r: 255, g: 192, b: 203 },
            orange: { r: 255, g: 165, b: 0 },
            brown: { r: 165, g: 42, b: 42 },
            gold: { r: 255, g: 215, b: 0 },
            silver: { r: 192, g: 192, b: 192 },
            maroon: { r: 128, g: 0, b: 0 },
            olive: { r: 128, g: 128, b: 0 },
            lavender: { r: 230, g: 230, b: 250 },
            teal: { r: 0, g: 128, b: 128 },
            coral: { r: 255, g: 127, b: 80 },
            navy: { r: 0, g: 0, b: 128 },
            indigo: { r: 75, g: 0, b: 130 },
            salmon: { r: 250, g: 128, b: 114 },
        };

        const normalizedColorName = cssColorName.toLowerCase();
        const rgbColor = namedColors[normalizedColorName];

        if (!rgbColor) {
            console.error('Invalid CSS color name');
            return null;
        }

        return rgbColor;
    },
};
