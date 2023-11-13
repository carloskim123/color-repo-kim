export const validateModule = {
    isValidHex: (hex) => {
        // Implementation for validating HEX color format
        const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        return hexRegex.test(hex);
    },

    isValidRgb: (rgb) => {
        // Implementation for validating RGB color values
        return (
            isValidRgbComponent(rgb.r) &&
            isValidRgbComponent(rgb.g) &&
            isValidRgbComponent(rgb.b)
        );
    },

    isValidHsl: (hsl) => {
        // Implementation for validating HSL color values
        return (
            isValidHslComponent(hsl.h, 0, 360) &&
            isValidHslComponent(hsl.s, 0, 100) &&
            isValidHslComponent(hsl.l, 0, 100)
        );
    },
};

function isValidRgbComponent(value) {
    // Validate that the RGB component value is in the valid range (0-255)
    return value >= 0 && value <= 255;
}

function isValidHslComponent(value, min, max) {
    // Validate that the HSL component value is in the valid range (min-max)
    return value >= min && value <= max;
}
