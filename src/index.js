import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const Bubbles = () => {
//   let classes
//   const makeBubbles = () => {
//     return classes = 'ball';
//   }
//   const handleClick = () => {
//     console.log("I am clicked")
//   }
//   return (
//   )
// }

// class Bubbles extends React.Component {
//   state = {this.props.classes}

//   render() {
//     return (
//       classes = makeBubbles;
//     <div>
//       <div className={classes} onClick={handleClick} >
//         <div>Come and bubble!!</div>
//       <div className="ball-1"></div>
//       <div className="ball-2"></div>
//       <div className="ball-3"></div>
//       <div className="ball-4"></div>
//    </div>
//     </div>

//     )
//   }
// }
class Bubbles extends React.Component {
  state = {
    showBubbles: false,
    name: "",
  };

  name = "Victor";

  handleShowBubbles = () => {
    this.setState((prevState) => ({
      showBubbles: !prevState.showBubbles,
    }));
  };

  render() {
    const { showBubbles } = this.state;
    return (
      <>
        <button onClick={this.handleShowBubbles}>
          {showBubbles
            ? "Burst bubbles"
            : "Lets See some bubbles"}
        </button>
        {showBubbles && (
          <div className="ball">
              <div className="ball-1"></div>
              <div className="ball-2"></div>
              <div className="ball-3"></div>
              <div className="ball-4"></div>
            </div>
        )}
      </>
    );
  }
}

ReactDOM.render(<Bubbles />, document.querySelector("#root"));
