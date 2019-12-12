import React from "react"
import { Progress } from "../src/progress/Progress";

export default {
  component: Progress,
  title: "Progress",
};

export const progress = () => <Progress value={80}>Progress</Progress>