import Svg, { Path } from "react-native-svg";
import { DuoChoice } from "./DouChoice";

export const CROSS_SIZE = 24;

const DuoCross = () => {
  return (
    <>
    <Svg width={CROSS_SIZE} height={CROSS_SIZE} viewBox="0 0 14 14" fill="none">
      <Path
        d="M13 1L1 13M1 1l12 12"
        stroke="#AFAFAE"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </>
  );
};

export default DuoCross;