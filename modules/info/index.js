export const infoModule = {
  getDominantColor: (colors) => {
    // Implementation for finding the dominant color
    let maxCount = 0;
    let dominantColor = null;

    const colorCountMap = new Map();

    for (const color of colors) {
      const key = `${color.r}-${color.g}-${color.b}`;
      const count = (colorCountMap.get(key) || 0) + 1;
      colorCountMap.set(key, count);

      if (count > maxCount) {
        maxCount = count;
        dominantColor = color;
      }
    }

    return dominantColor || { r: 0, g: 0, b: 0 }; // Default to black if no dominant color found
  },

  getAverageColor: (colors) => {
    // Implementation for finding the average color
    const total = colors.reduce(
      (acc, color) => ({
        r: acc.r + color.r,
        g: acc.g + color.g,
        b: acc.b + color.b,
      }),
      { r: 0, g: 0, b: 0 }
    );

    const average = {
      r: Math.round(total.r / colors.length),
      g: Math.round(total.g / colors.length),
      b: Math.round(total.b / colors.length),
    };

    return average;
  },
};
