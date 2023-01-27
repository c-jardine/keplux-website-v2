interface HslColorProps {
  _type: 'hslaColor';
  a: number;
  h: number;
  s: number;
  l: number;
}

interface HsvColorProps {
  _type: 'hsvaColor';
  a: number;
  h: number;
  s: number;
  v: number;
}

interface RgbColorProps {
  _type: 'rgbaColor';
  a: number;
  r: number;
  g: number;
  b: number;
}

export interface ColorProps {
  _type: 'color';
  alpha: 1;
  hex: string;
  hsl: HslColorProps;
  hsv: HsvColorProps;
  rgb: RgbColorProps;
}
