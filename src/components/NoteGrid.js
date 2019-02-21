import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Instrument from "../atoms/Instrument1";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({  //ToDo: Combined Styling
  gridroot: {
    height: "500px",
    padding: "0 15px",
    display: "inline-grid",
    gridTemplateColumns: "repeat(20, auto)"
  },
  instrumentroot: {
    height: "100%",
    background: "grey",
    width: "40px",
    position: "relative",
    display: "inline-block",
    transition: "all .5s",
    transformOrigin: "top left",
  },
  inst_name: {
    fontSize: "1em",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
    textAlign: "center",
    width: "150px",
  },
  inst_name_rot: {
    fontSize: "1em",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
    textAlign: "center",
    width: "150px",
  },
  instrumentroot_rot: {
    height: "150px",
    background: "grey",
    width: "20px",
    position: "relative",
    display: "inline-block",
    margin: "0 65px",
    transform: "rotate(-90deg) translateX(65px)",
    transition: "all .5s, height .25s",
  },
  instrument: {
    display: 'flex',
    background: 'rgb(16, 194, 39)',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    height: '90px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroller: {
    display: 'flex',
  },
  item: {
    display: 'flex',
  },
  panel_left: {
    position: '-webkit-sticky',
    position: 'sticky',
    left: 0,
    background: 'rgb(0, 107, 110)',
    display: 'table',
    width: '200px',
    height: '1620px',
    zIndex: '100',
  },
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

// const SvgContainer = styled.svg`
//   position: absolute;
//   top: 20px;
//   left: 30px;
// `;

const Container = styled.div`
  position: relative;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const RowNumber = styled.div`
  width: 30px;
  height: 250px;
  padding-top: 120px;
  border: 1px solid black;
  border-left: none;
`;

const RowNumbersContainer = styled.div`
  position: sticky;
  left: 0;
  width: 30px;
  background-color: #fafafa;
  z-index: 2;
  text-align: center;
`;

const ColumnNamesContainer = styled.div`
  position: sticky;
  top: 0;
  white-space: nowrap;
  z-index: 1;
  text-align: center;
  margin-left: 30px;
  font-size: 14px;
`;

const ColumnName = styled.div`
  display: inline-block;
  width: 120px;
  background-color: #fafafa;
  border: 1px solid black;
`;

class NoteGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { is_rotated: Array(19).fill(false) };
    this.instrumentRefs = new Array(19).fill().map((_, i) => {
      return React.createRef();
    });
    //console.log(props.data);
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    changeNote: PropTypes.func.isRequired
  };

  update = () => {
    this.instrumentRefs.forEach(ref => {
      ref.current.forceUpdate();
    });
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return this.props.data !== nextProps.data;
  // };

  inst_trans = i => e => {
    //this.state.is_rotated[i]=!this.state.is_rotated[i];
    var states = this.state.is_rotated
    states[i] = !states[i];
    this.setState({ is_rotated: states });
    //console.log(this.state.is_rotated);
    //this.forceUpdate();
  }

  render() {
    const { data, changeNote, classes } = this.props;
    const { is_rotated } = this.state;
    const colors = Array(19).fill('grey', 0, 4).fill('rgb(188, 188, 56)', 4, 8).fill('purple', 8, 19);
    //console.log(colors[1]);
    const width = 2300;
    const height = 16020;

    // const kick = getColumns(data.drums.kick, 0, changeNote, "drums", "kick");
    // const snare = getColumns(data.drums.snare, 1, changeNote, "drums", "snare");
    let i = -1;
    const all = Object.keys(data).map(instrumentGroup => {
      return Object.keys(data[instrumentGroup]).map(instrument => {
        i++;
        return (
          <Instrument
            key={instrumentGroup + instrument + i}
            ref={this.instrumentRefs[i]}
            instrument={data[instrumentGroup][instrument]}
            index={i}
            changeNote={changeNote}
            instrumentGroupName={instrumentGroup}
            instrumentName={instrument}
          />
        );
      });
    });

    // const RowNumbers = new Array(64).fill(false).map((_, i) => {
    //   return (
    //     <RowNumber key={"RowNumber" + i} x={30} y={i * 250 + 40}>
    //       {i + 1}
    //     </RowNumber>
    //   );
    // });    // const RowNumbers = new Array(64).fill(false).map((_, i) => {
    //   return (
    //     <RowNumber key={"RowNumber" + i} x={30} y={i * 250 + 40}>
    //       {i + 1}
    //     </RowNumber>
    //   );
    // });
    i = -1;
    const ColumnNames = Object.keys(data).map(instrumentGroup => {
      return Object.keys(data[instrumentGroup]).map(instrument => {
        i++;
        //console.log(i);
        return (
          <div className={is_rotated[i] ? classes.instrumentroot_rot : classes.instrumentroot} onClick={this.inst_trans(i)} style={{ backgroundColor: colors[i] }} key={i}>
            <Typography className={is_rotated[i] ? classes.inst_name_rot : classes.inst_name}>
              {instrumentGroup} {instrument}
            </Typography>
          </div>
        );
      });
    });
    // const RowNumbers = new Array(64).fill(false).map((_, i) => {
    //   return <RowNumber key={"RowNumber" + i}>{i + 1}</RowNumber>;
    // });

    const panel = Object.keys(data).map(instrumentGroup => {
      return Object.keys(data[instrumentGroup]).map(instrument => {
        i++;
        //console.log(i);
        return (
          <div className={classes.instrument}>
            <Typography className={classes.instrument_typ}>{instrumentGroup} {instrument}</Typography>
          </div>
        );
      });
    });
    const notes = new Array(19).fill(false);

    notes.forEach(function (val, i) {
      notes[i] = 
      <div className={classes.instrument_line}>
        {/* for(j=0; j<64; j++){
        notes[i] += */}
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
        <div className={classes.part}>
          <div className={classes.grid_part}>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '106.66px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '66.66px' }}></div>
            </div>
            <div>
              <div className={classes.b_p}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
            <div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
              <div className={classes.b_p} style={{ marginLeft: '40px' }}></div>
            </div>
          </div>
        </div>
      </div>
    });

    //console.log(notes);

    return (
      <Container>
        <Container className={classes.scroller}>
          <Container className={classes.item}>
            <Container className={classes.panel_left}>
              {panel}
            </Container>
            <Container className={classes.editor}>
              {/* {notes} */}
              {all}
            </Container>
          </Container>
        </Container>
        {/* <Container className={classes.gridroot}>
          {ColumnNames}
        </Container> */}
        {/* <ColumnNamesContainer>{ColumnNames}</ColumnNamesContainer>
        <RowNumbersContainer>{RowNumbers}</RowNumbersContainer>
        <SvgContainer width={width} height={height}>
          {/* {all} 
        </SvgContainer> */}
      </Container>
    );
  }
}

export default withStyles(styles)(NoteGrid);
