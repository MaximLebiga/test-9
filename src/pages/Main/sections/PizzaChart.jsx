import { Chart, Axis, Tooltip, Coord, JitterPoint } from 'viser-react'

const scale = [{
  dataKey: 'type',
  range: [0, 1]
}];

const axis1Opts = {
  dataKey: 'range',
  grid: {
    align: 'center',
    lineStyle: {
      lineDash: [0, 0]
    }
  }
}

const jitterPointOpts = {
  position: ['range', 'type'],
  color: 'range',
  shape: 'circle',
  opacity: 0.65
}

const PizzaChart = ({data}) => {
  return (
    <Chart
      forceFit
      height={400}
      padding={[40, 100, 80, 80]}
      data={data}
      scale={scale}
    >
      <Tooltip />
      <Coord type="polar" />
      <Axis {...axis1Opts} />
      <JitterPoint {...jitterPointOpts} />
    </Chart>
  )
}

export default PizzaChart
  