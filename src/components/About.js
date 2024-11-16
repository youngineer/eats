import React from "react";
// const About = () => {
// return(
// <div className="conatiner">
//     <h1 className="header">About Page</h1>
//     <h3 className="description">Cool things coming soon</h3>
// </div>
// );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { count, count2 } = this.state;

    return (
      <div className="conatiner">
        <h1 className="header">About Page</h1>
        <h3 className="description">Cool things coming soon</h3>
        <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
      </div>
    );
  }
}

export default About;
