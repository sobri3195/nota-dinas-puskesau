export const bulanRoman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export function formatNomorNota({ kodeKlasifikasi, nomorUrut, bulan, tahun, kodeSatuan }) {
  return `${kodeKlasifikasi}/ND/${nomorUrut}/${bulan}/${tahun}/${kodeSatuan}`;
}
