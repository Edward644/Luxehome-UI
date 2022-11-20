import * as converters from "./converters.js";
import { analogous, complementary, mono, dark } from "./colorPalette.js";

export default {
  install(app, opts) {
    let color = undefined;

    const service = {
      get color() {
        return parseToHex(color);
      },

      // prettier-ignore
      set color(val) {
        color = parseToHex(val)
        setCssValues(this.palette[opts?.palette ?? "analogous"]);
      },

      get palette() {
        return {
          analogous: analogous(color),
          complementary: complementary(color),
          mono: mono(color),
          dark: dark(color),
        };
      },
    };

    app.config.globalProperties.$theme = service;

    service.color = opts?.color ?? "#A9E6FF";
  },
};

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

function setCssValues(palette) {
  let rt = document.querySelector(":root");

  rt.style.setProperty("--color-palette__a", `${palette.a}`);
  rt.style.setProperty("--color-palette__b", `${palette.b}`);
  rt.style.setProperty("--color-palette__c", `${palette.c}`);
  rt.style.setProperty("--color-palette__d", `${palette.d}`);
  rt.style.setProperty("--color-palette__e", `${palette.e}`);
}
