import { useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  const [color, setColor] = useState("#056C9A");

  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="sweet-loading">
        <ClockLoader
          color={color}
          cssOverride={CSSProperties}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loading;
