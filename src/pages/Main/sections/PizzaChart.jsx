import { Chart, Axis, Tooltip, Coord, JitterPoint } from 'viser-react'
import { axis1Opts, jitterPointOpts, scale } from '../../../options'

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
  