import React from "react"

const CheckboxIcon = props => (
  <>
    <CheckboxChecked
      {...props}
      style={{
        display: "none",
        "input:checked ~ &": {
          display: "block"
        }
      }}
    />
    <CheckboxUnchecked
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
