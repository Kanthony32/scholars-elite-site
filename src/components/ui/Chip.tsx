import { StatChip } from "./StatChip";

type Props = {
  v: string;
  l: string;
  color?: "magenta" | "purple";
};

/** Legacy alias — wraps StatChip with shorthand props. */
export function Chip({ v, l, color }: Props) {
  return <StatChip value={v} label={l} color={color} />;
}
