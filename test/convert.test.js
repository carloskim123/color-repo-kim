import { convertModule } from '../modules/convert';

describe('convertModule', () => {
    describe('rgbToHsl', () => {
        test('should convert RGB to HSL correctly', () => {
            const result = convertModule.rgbToHsl({ r: 255, g: 0, b: 0 });
            expect(result).toEqual({ h: 0, s: 1, l: 0.5 });
        });
    });

    describe('rgbToHex', () => {
        test('should convert RGB to HEX correctly', () => {
            const result = convertModule.rgbToHex({ r: 255, g: 0, b: 0 });
            expect(result).toBe('#ff0000');
        });
    });

    describe('hslToRgb', () => {
        test('should convert HSL to RGB correctly', () => {
            const result = convertModule.hslToRgb({ h: 0, s: 1, l: 0.5 });
            expect(result).toEqual({ r: 255, g: 0, b: 0 });
        });
    });

});
