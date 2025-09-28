import styles from "./Pattern.module.css";
import type { PatternProps } from "@/app/types";

/**
 * Renders pattern image
 *
 * Props are defined in {@link PatternProps}.
 */
export default function Pattern({ imgPath, imgStyling }: PatternProps) {
  return <img src={imgPath} alt="" className={styles[imgStyling]} />;
}
