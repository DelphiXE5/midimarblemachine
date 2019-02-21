import React, { PureComponent } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Note from "../atoms/Note1";
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
  },
  instrument_line: {
    background: 'grey',
    border: '1px solid black',
    borderRadius: '5px',
    verticalAlign: 'middle',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    height: '90px',
  },
  part: {
    display: 'table-cell',
    minWidth: '322px',
    height: '90px',
    borderRight: '2px solid black',
  },
  grid_part: {
    display: 'grid',
    gridTemplateRows: '33% 33% 33%',
    height: '90%',
    marginTop: '2.5%'
  }
});


const SurroundingRectangle = styled.rect`
  stroke-width: 3;
  stroke: rgb(0, 0, 0);
  fill: none;
`;

function getColumns(data, lane, callback, group, name) {
  console.log(data);
  console.log(group);
  const width = 120;
  const height = 250;
  const horizontalSpacing = 15;

  const column1x = 0;
  const column2x = horizontalSpacing;
  const column3x = 2 * horizontalSpacing;
  // const column4x = 20 + 3 * horizontalSpacing;
  // const column5x = 20 + 4 * horizontalSpacing;
  // const column6x = 20 + 5 * horizontalSpacing;
  const verticalSpacing = height / 4;
  const offset = verticalSpacing / 2;
  const column3spacing = height / 3;


  const column1 = data[0].map((value, index) => {
    return (
      <Note
        key={name + "column1" + index}
        instrumentGroup={group}
        instrument={name}
        column={1}
        index={index}
        x={column1x}
        y={offset + index * verticalSpacing}
        value={value}
        callback={callback}
      />
    );
  });

  const column2 = data[1].map((value, index) => {
    return (
      <Note
        key={name + "column2" + index}
        instrumentGroup={group}
        instrument={name}
        column={2}
        index={index}
        x={column2x}
        y={index * verticalSpacing}
        value={value}
        callback={callback}
      />
    );
  });

  const column3 = data[2].map((value, index) => {
    return (
      <Note
        key={name + "column3" + index}
        instrumentGroup={group}
        instrument={name}
        column={3}
        index={index}
        x={column3x}
        y={
          (index + 1) * column3spacing + Math.floor(index / 2) * column3spacing
        }
        value={value}
        callback={callback}
      />
    );
  });

  // const surroundingRectangle = new MakerJs.models.Rectangle(54, height);
  // const surroundingRectangles = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map(i => {
  const surroundingRectangles = new Array(64).fill(false).map((_, i) => {
    return (
      <SurroundingRectangle
        key={group + name + "surroundingRectangle" + i}
        width={width}
        height={height}
        y={height * i}
      />
    );
  });
  return (
    <g key={group + name} transform={`translate(${lane * width},0)`}>
      {[
        ...column1,
        ...column2,
        ...column3,
        ...surroundingRectangles
      ]}
    </g>
  );
}

class Instrument extends PureComponent {
  static propTypes = {
    instrument: PropTypes.array.isRequired,
    instrumentGroupName: PropTypes.string.isRequired,
    instrumentName: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    changeNote: PropTypes.func.isRequired
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  // console.log("this.props",this.props.instrument)
  // console.log("nextProps",nextProps.instrument)

  // this.props.instrument.forEach((column,ci) => {
  //   column.forEach((note,ni) => {
  //     console.log("note",note)
  //     if (note !== nextProps.instrument[ci][ni]) {
  //       console.log("instrument update true")
  //       return true;
  //     }
  //   })
  // });
  // console.log("instrument update false")
  // return false;
  // return this.props.instrument !== nextProps.instrument;
  // return _.isEqual(this.props.instrument, nextProps.instrument)
  // };

  render() {
    const {
      instrument,
      instrumentGroupName,
      instrumentName,
      index,
      changeNote,
      classes,
      value
    } = this.props;

    const line = Array(64).fill(false);

    line.forEach((element, index) => {
      line[index] =
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <Note
                margin="106.66px"
                value={true} 
                callback={0} 
              />
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }} 
              ></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}
              ></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}
              ></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}
              ></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}
              ></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>;
    });

    return (
      <div className={classes.instrument_line}>
        {line}
      </div>
      // 'getColumns(
      //   instrument,
      //   index,
      //   changeNote,
      //   instrumentGroupName,
      //   instrumentName
      // )'
    );
  }
}

export default withStyles(styles)(Instrument);