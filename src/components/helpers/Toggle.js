import React from 'react'

const Toggle = (props) => {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const style = {
    on: {
      backgroundColor: "green"
    },
    off: {
      backgroundColor: "grey"
    }
  };

  return (
    <button
      onClick={() => setIsToggleOn(!isToggleOn)}
      style={isToggleOn ? style.on : style.off}
    >
      {isToggleOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle

{/* <Toggle /> */}