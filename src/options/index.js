export const scale = [
  {
    dataKey: 'type',
    range: [0, 1]
  }
]

export const axis1Opts = {
  dataKey: 'range',
  grid: {
    align: 'center',
    lineStyle: {
      lineDash: [0, 0]
    }
  }
}

export const jitterPointOpts = {
  position: ['range', 'type'],
  color: 'range',
  shape: 'circle',
  opacity: 0.65
}
