import React from "react"

const RadioIcon = props => (
  <>
    <RadioChecked
      {...props}
      style={{
        display: "none",
        "input:checked ~ &": {
          display: "block"
        }
      }}
    />
    <RadioUnchecked
      {...props}
      style={{
        display: "block",
        "input:checked ~ &": {
          display: "none"
        }
      }}
    />
  </>
)
