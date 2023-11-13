import { infoModule } from '../modules/info';

describe('infoModule', () => {
    describe('getDominantColor', () => {
        test('should get dominant color correctly', () => {
            const colors = [
                { r: 255, g: 0, b: 0 },
                { r: 0, g: 255, b: 0 },
                { r: 0, g: 0, b: 255 },
            ];

            const result = infoModule.getDominantColor(colors);
            expect(result).toEqual({ r: 0, g: 0, b: 255 });
        });
    });

    describe('getAverageColor', () => {
        test('should get average color correctly', () => {
            const colors = [
                { r: 255, g: 0, b: 0 },
                { r: 0, g: 255, b: 0 },
                { r: 0, g: 0, b: 255 },
            ];

            const result = infoModule.getAverageColor(colors);
            expect(result).toEqual({ r: 85, g: 85, b: 85 });
        });
    });

});
