import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({  //ToDo: Combined Styling
  b_p: {
    width: '40px',
    height: '20px',
    /* position: absolute; */
    border: '0px',
    padding: '0px',
    background: 'lightgrey',
    float: 'left',
  }
});

const Rect = styled.rect`
  stroke-width: 1;
  stroke: black;
  &:hover {
    stroke: red;
    cursor: pointer;
  }
`;
class Note extends Component {
  state = {
    trueValue: null
  };

  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    callback: PropTypes.func.isRequired,
    margin: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    if (props.value !== false) {
      this.state.trueValue = props.value;
    } else {
      this.state.trueValue = true;
    }
  }

  render() {
    const {
      value,
      callback,
      margin,
      classes
    } = this.props;

    return (
      <div 
        className={classes.b_p} 
        style={value !== false? [{marginLeft: margin},  {backgroundColor: 'black'}] : [{marginLeft: margin}, {backgroundColor: '#ccc'}]}
      />

      // <div className={classes.b_p} style={{ marginLeft: '106.66px' }} 
      //   onClick={() => {
      //     callback(instrumentGroup, instrument, column - 1, index, !value);
      //   }}
      // >
      // </div>
      // <Rect
      //   x={x}
      //   y={y}
      //   width="10"
      //   height="30"
      //   stroke="black"
      //   strokeWidth="5"
      //   fill={value !== false ? "black" : "#ccc"}
      //   onClick={() => {
      //     callback(instrumentGroup, instrument, column - 1, index, !value);
      //   }}
      // />
    );
  }
}

export default withStyles(styles)(Note);