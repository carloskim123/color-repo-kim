import { convertModule } from "../convert";

const palleteLimit = 10;
export const palleteModule = {
    random: () => {
        const colors = []
        for (let i = 0; i < palleteLimit; i++) {
            let inRgb = {
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256)
            };
            let inHex = convertModule.rgbToHex(inRgb);
            colors.push(inHex)
            return colors
        }

        return colors
    },
    fromHex: (hexColor) => {
        const colors = [];
        const rgbColor = convertModule.hexToRgb(hexColor);
        for (let i = 0; i < 10; i++) {
            const lightnessValue = i * 25; // Increment lightness value
            const hslColor = convertModule.rgbToHsl(rgbColor);
            const palleteColor = convertModule.hslToRgb({ h: hslColor.h, s: hslColor.s, lightnessValue });
            const hexColor = convertModule.rgbToHex(palleteColor);
            colors.push(hexColor);
        }
        return colors;
    },
    fromRgb: (rgbColor) => {
        const colors = [];
        for (let i = 0; i < 10; i++) {
            const l = i * 25; // Increment lightness value
            const hslColor = convertModule.rgbToHsl(rgbColor);
            const palleteColor = convertModule.hslToRgb({ h: hslColor.h, s: hslColor.s, l });
            const hexColor = convertModule.rgbToHex(palleteColor);
            colors.push(hexColor);
        }
        return colors;
    },
    fromHsl: (hslColor) => {
        const colors = [];
        const rgbColor = convertModule.hslToRgb(hslColor);
        for (let i = 0; i < 10; i++) {
            const l = i * 25; // Increment lightness value
            const palleteColor = convertModule.hslToRgb({ h: hslColor.h, s: hslColor.s, l });
            const hexColor = convertModule.rgbToHex(palleteColor);
            colors.push(hexColor);
        }
        return colors;
    },

    fromName: async (colorName) => {
        const colors = [];
        try {
            const response = await fetch(`https://api.color.pizza/v1/${colorName}`);
            const data = await response.json();
            const hexColor = data.colors[0].hex;
            const rgbColor = convertModule.hexToRgb(hexColor);
            for (let i = 0; i < palleteLimit; i++) {
                const lightnessValue = i * 25;
                const hslColor = convertModule.rgbToHsl(rgbColor);
                const palleteColor = convertModule.hslToRgb({ h: hslColor.h, s: hslColor.s, l: lightnessValue });
                const hexColor = convertModule.rgbToHex(palleteColor)
                colors.push(hexColor)

            }

        } catch (error) {
            console.error('Error fetching color information:', error);
        }
    },
}