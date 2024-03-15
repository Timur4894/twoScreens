import * as React from "react"
import Svg, { SvgProps, Ellipse, Path } from "react-native-svg"
const ClodeCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Ellipse cx={16} cy={16.008} fill="#EAEDF4" rx={16} ry={15.992} />
    <Path
      fill="#9EA3B1"
      d="M10.583 21.417c-.416-.417-.4-1.125-.008-1.517l3.908-3.908-3.908-3.9c-.392-.392-.408-1.1.008-1.517.409-.417 1.117-.4 1.517-.008l3.9 3.908 3.9-3.9c.408-.4 1.1-.408 1.517.008.416.409.408 1.109.008 1.509l-3.9 3.9 3.9 3.908c.4.4.408 1.1-.008 1.508a1.084 1.084 0 0 1-1.517.009l-3.9-3.9-3.9 3.908c-.4.392-1.108.408-1.517-.008Z"
    />
  </Svg>
)
export default ClodeCircle
