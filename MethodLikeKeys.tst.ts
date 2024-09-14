import { expect } from "tstyche";
import type { MethodLikeKeys } from "./MethodLikeKeys.js";

interface Sample {
  description: string;
  getLength: () => number;
  getWidth: () => number;
}

expect<MethodLikeKeys<Sample>>().type.toBe<"getLength" | "getWidth">();
