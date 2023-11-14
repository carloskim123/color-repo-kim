# Color Repo Kim 
**this readme is still a work in progress. Some info might be out of place**

Color Repo is a lightweight JavaScript library for seamless color manipulation and analysis. It provides a collection of methods to manipulate, analyze, and convert colors easily.

#### Installation

```bash
npm install color-repo-kim
```

or using cdn.jsdelivr.:
```bash
https://cdn.jsdelivr.net/npm/color-repo-kim@1.0.0
```
#### Usage

#### Basic Example



```javascript
const { ColorRepoKim } = require('color-repo-kim');

// Define a sample color
const sampleColor = { r: 255, g: 0, b: 0 };

// Get the complementary color
const complementaryColor = ColorRepoKim.manipulate.getComplementaryColor(sampleColor);

// Display results
console.log('Sample Color:', sampleColor);
console.log('Complementary Color:', complementaryColor);`
```

Expected output:

``` javascript
Sample Color: { r: 255, g: 0, b: 0 }
Complementary Color: { r: 0, g: 255, b: 255 }`
```
#### Advanced Features

ColorRepoKim includes a variety of color manipulation features:

- Get Split Complementary Colors

``` javascript
const splitComplementaryColors = ColorRepoKim.manipulate.getSplitComplementaryColors(sampleColor);
console.log('Split Complementary Colors:', splitComplementaryColors);`
```
- Get Analogous Colors

```javascript
const analogousColors = ColorRepoKim.manipulate.getAnalogousColors(sampleColor);
console.log('Analogous Colors:', analogousColors);`
```
- Get Monochromatic Colors

  
```javascript
  const monochromaticColors = ColorRepoKim.manipulate.getMonochromaticColors(sampleColor, 5);
  console.log('Monochromatic Colors:', monochromaticColors);`
```
- Additional Color Manipulation Methods  
  ColorRepoKim provides more advanced color manipulation methods:

  - Triadic Colors
  - Tetradic Colors
  - Lighten Color
  - Darken Color
  - Invert Color

  Explore these methods in the [API Documentation](https://color-repo-kim.vercel.app/).

#### API Documentation

For detailed information on all available methods and their parameters, refer to the [API Documentation](https://color-repo-kim.vercel.app/).

#### Examples

#### React Component
```javascript
  export const Component = (props) => {
    const { baseColor } = props;
    const [currentColor, setCurrentColor] = useState(baseColor);
  
    return (
        <article className={`...other bg-${currentColor}-500`}>
          <button>click me</button>
        </article>
  )
```
  

#### Contributing

If you have ideas for new features, improvements, or find any issues, feel free to contribute by opening an issue or a pull request.

#### License

This library is licensed under the MIT License - see the file for details. [LICENSE](https://opensource.org/license/mit/)This expanded README includes sections for API Documentation, Examples, and a basic React Component.
