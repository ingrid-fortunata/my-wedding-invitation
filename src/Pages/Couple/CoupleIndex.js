import React from "react";
import Groom from "./Groom";
import Bride from "./Bride";

export default function CoupleIndex() {
  return (
    <div style={{ marginTop: "2em", marginBottom: "2em" }}>
      <Groom />
      <Bride />
    </div>
  );
}
