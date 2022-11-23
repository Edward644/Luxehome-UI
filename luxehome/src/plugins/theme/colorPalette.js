import * as converters from "./converters.js";

export function analogous(color) {
  const hex = parseToHex(color);
  const [hue, sat, lightness] = converters.hexToHSL(hex);

  return {
    a: converters.HSLToHex(toHue(hue + 32), toSat(sat + 5), lightness),
    b: converters.HSLToHex(toHue(hue + 16), toSat(sat + 5), lightness - 9),
    c: hex,
    d: converters.HSLToHex(toHue(hue - 16), toSat(sat + 5), lightness - 9),
    e: converters.HSLToHex(toHue(hue - 32), toSat(sat + 5), lightness),
    f: "#ffffff",
  };
}

export function complementary(color) {
  const hex = parseToHex(color);
  const [hue, saturation, lightness] = converters.hexToHSL(hex);

  return {
    a: converters.HSLToHex(hue, saturation, lightness - 30),
    b: converters.HSLToHex(hue, saturation - 10, lightness),
    c: hex,
    d: converters.HSLToHex(toHue(hue + 180), saturation, lightness - 30),
    e: converters.HSLToHex(toHue(hue + 180), saturation, lightness),
    f: "#ffffff",
  };
}

export function mono(color) {
  const hex = parseToHex(color);
  const [hue, saturation, lightness] = converters.hexToHSL(hex);

  return {
    a: converters.HSLToHex(hue, saturation, lightness / 2),
    b: converters.HSLToHex(hue, saturation, lightness + 15),
    c: hex,
    d: converters.HSLToHex(hue, saturation / 2, lightness * 0.67),
    e: converters.HSLToHex(hue, saturation, lightness - 10),
    f: "#ffffff",
  };
}

export function dark(color) {
  const hex = parseToHex(color);
  // const [hue, saturation, lightness] = converters.hexToHSL(hex);

  return {
    a: "#000000",
    b: "#000000",
    c: hex,
    d: "#000000",
    e: "#000000",
    bg: "#1c1b22",
    text: "#e3e3e3",
  };
}

function parseToHex(val) {
  // RGB
  let rgb = val.match(/(?<=rgb\([\d\s,]*)\d{1,3}/g) ?? [];
  if (rgb.length) return converters.RGBToHex(...rgb);

  // HSL
  let hsl = val.match(/(?<=hsl\([\d\s,%]*)\d{1,3}/g) ?? [];
  if (hsl.length) return converters.HSLToHex(...hsl);

  //Hex
  return val;
}

function toHue(val) {
  if (val > 360) return val - 360;

  if (val < 0) return val + 360;

  return val;
}

function toSat(val) {
  return Math.max(Math.min(val, 100), 0);
}
