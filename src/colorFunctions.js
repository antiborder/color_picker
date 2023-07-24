

export function hslToRgb(h, s, v) {
  let f = (n, k=(n+h/60)%6) => v - v*s*Math.max( Math.min(k,4-k,1), 0);     
  let rgb = [f(5), f(3), f(1)];
  return '#' + rgb.map(x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}