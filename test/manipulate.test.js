import { manipulateModule } from '../modules/manipulate';

describe('manipulateModule', () => {
    describe('getComplementaryColor', () => {
        test('should get complementary color correctly', () => {
            const color = { r: 255, g: 0, b: 0 };
            const result = manipulateModule.getComplementaryColor(color);
            expect(result).toEqual({ r: 0, g: 255, b: 255 });
        });
    });

    describe('getSplitComplementaryColors', () => {
        test('should get split complementary colors correctly', () => {
            const color = { r: 255, g: 0, b: 0 };
            const result = manipulateModule.getSplitComplementaryColors(color);
            expect(result).toEqual([
                { r: 0, g: 255, b: 128 },
                { r: 0, g: 255, b: 255 },
                { r: 255, g: 0, b: 255 },
            ]);
        });
    });

    describe('getAnalogousColors', () => {
        test('should get analogous colors correctly', () => {
            const color = { r: 255, g: 0, b: 0 };
            const result = manipulateModule.getAnalogousColors(color);
            expect(result).toEqual([
                { r: 255, g: 0, b: 128 },
                { r: 255, g: 0, b: 0 },
                { r: 255, g: 0, b: 255 },
            ]);
        });
    });

});
