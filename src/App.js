import React, { Component } from "react";
import PropTypes from "prop-types";
import Export from "./components/Export";
import NoteGrid from "./components/NoteGrid";
import MidiUpload from "./components/Midiupload";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MIDISounds from 'midi-sounds-react';

const styles = theme => ({
  controls: {
    width: 560,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 30,
    marginTop: 0,
    display: 'inline-block',
  },
  root: {
    flexGrow: 1,
  },
  Paper: {
    padding: theme.spacing.unit *2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  content: {
    ...theme.mixins.gutters(),
    alignContent: 'center',
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    top: '100px'
  },
  appbar: {
    paddingBottom: theme.spacing.unit*10,
    position: 'fixed',
    zIndex: '200',
    width : '100%',
  },
  grow: {
    flexGrow: 1,
  },
  notegrid: {
    top: '250px',
    position: 'relative',
  }
});

// To change manual/alternating
// 1-49 Manual Channel 1
// 50-99 Alternating
// 100-127 manual Channel 2
const instruments = {
  drums: {
    kick: [12],
    snare: [24],
    hihat: [36],
    cymbal: [48],
    combined: [12, 24, 36, 48]
  },
  bass: {
    E: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    A: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    D: [62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83],
    G: [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
    combined: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,109, 110, 111, 112
    ]
  },
  // To be changed later, E-minor is here as an example
  vibraphone: {
    bars: [35, 36, 38, 40, 42, 43, 45, 47, 48, 50, 52],
    combined: [35, 36, 38, 40, 42, 43, 45, 47, 48, 50, 52],   //Notes of the Scale
  }
};

function scales_create(){
  var basenotes = [60, 62, 64, 65, 67, 69, 71, 72];
  var scales = {};
  var scalenames={"C": 0, "C#": 1, "Db": 1, "D": 2, "Eb": 3, "E": 4, "F": 5}; //Add scales: {name: distance from Cmajor in semitones}
  Object.keys(scalenames).map(element => {
    var key = element.replace("#", "Sharp").replace("b", "Flat")
    scales[key] = {};
    scales[key].name = element;
    scales[key].notes = basenotes.map(x => x+scalenames[element]);
  });
  return scales;
}

const scales = {
  ...scales_create(),  //Autogenerate major scales from C major scale (you can modify it for correct bars), use the code below, to overwrite scales manually
  C: {
    name: "C",
    notes: [60, 62, 64, 65, 67, 69, 71, 74]
  },
  CSharp: {
    name: "C#",
    notes: [61, 63, 65, 66, 68, 70, 71, 73]
  },
  D: {
    name: "D",
    notes: [62, 64, 66, 67, 69, 71, 72, 74]
  },
  DSharp: {
    name: "D#",
    notes: [63, 65, 67, 68, 70, 72, 73, 75]
  },
};

function initInstrument() {
  return [
    Array(64 * 4).fill(false),
    Array(64 * 4).fill(false),
    Array(64 * 2).fill(false),
    Array(64 * 4).fill(false),
    Array(64 * 4).fill(false),
    Array(64 * 2).fill(false)
  ];
}

function getTimingPosition(time) {  //Get the Position of the column in the track in dependence of the time (1:8th 0:4th 2:triplets)
  var pos = parseFloat((time-Math.floor(time)).toFixed(3)); //Get the decimal from the time, round it to 3 digits
  if (pos % 0.5 === 0){                                     //Divide by 0.5 for the 4th (Positions are for one measure: 0,0.5,1,1.5) 
    return { column: 1, index: Math.floor(time / 0.5) };
  }
  else if(pos % 0.25 === 0){                                //Divide by 0.25 for the 8th (Positions are for one measure: 0.25,0.75,1.25,1.75)
    return { column: 0, index: (Math.floor(time / 0.25) - 1) / 2 };
  }
  else if (pos % 0.334 === 0.333){                          //Divide by 0.334 for the triplets (Positions are for one measure: 0.66,1.333)
    return {
      column: 2,
      index: Math.floor(time / 0.66) - 1 - Math.floor(time / 2)
    };
  }
  else {
    return false;
  }
  // return var: {column (like above descibed), position at the column}
}


const initialState = {
  data: {
    drums: {
      kick: initInstrument(),
      snare: initInstrument(),
      hihat: initInstrument(),
      cymbal: initInstrument()
    },
    bass: {
      E: initInstrument(),
      A: initInstrument(),
      D: initInstrument(),
      G: initInstrument()
    },
    vibraphone: {
      bar1: initInstrument(),
      bar2: initInstrument(),
      bar3: initInstrument(),
      bar4: initInstrument(),
      bar5: initInstrument(),
      bar6: initInstrument(),
      bar7: initInstrument(),
      bar8: initInstrument(),
      bar9: initInstrument(),
      bar10: initInstrument(),
      bar11: initInstrument()
    }
  },
  show_grid: true,
};

class App extends Component {
  state = initialState; 

  constructor(props) {
    super(props);
    this.noteGridRef = React.createRef();
  }

  componentDidMount() {
		console.log('componentDidMount App');
    this.setState({ initialized: true });
    this.midiSounds.cacheDrum(10);
    this.midiSounds.playChordNow(367, [70], 0);
    this.midiSounds.playChordNow(103, [70], 0);
    this.midiSounds.cacheDrum(1);
    this.midiSounds.cacheDrum(15);
    this.midiSounds.cacheDrum(45);
    this.midiSounds.cacheDrum(84);
  }

  playTestInstrument() {

    this.midiSounds.playChordNow(268, [70], 2.5);
  }

  play(){
    this.midiSounds.setEchoLevel(0);
    this.midiSounds.setInstrumentVolume(367,0.5);
    var midi_inst = {
      bass: 367,
      vibraphone: 103,
      drums: {
        57: 84,
        //48: 84,
        36: 45, 
        38: 15, //Just testing for Marblemachine_song
        //24: 15,
        36: 1,
        //12: 1
      }
    }
    var when=this.midiSounds.contextTime();
    Object.keys(this.state.midi_data).forEach(instrument => {
      if(this.state.midi_data[instrument].notes !== undefined){
        this.state.midi_data[instrument].notes.forEach(key =>{
          if (instrument === "drums"){
            this.midiSounds.playDrumsAt(when+key.time, [midi_inst[instrument][key.midi]]);
          }
          else {
            this.midiSounds.playChordAt(when+key.time,midi_inst[instrument],[key.midi],key.duration);
          }
        })
      }
    })
  }

  stop(){
    this.midiSounds.stopPlayLoop();		
    this.midiSounds.beatIndex=0;
  }

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  changeNote = (instrumentGroup, instrument, column, index, newValue) => {
    let newInstrument = this.state.data[instrumentGroup][instrument].slice();
    newInstrument[column][index] = newValue;

    this.setState({
      data: {
        ...this.state.data,
        [instrumentGroup]: {
          ...this.state.data[instrumentGroup],
          [instrument]: newInstrument
        }
      }
    });
  };

  setData = data => {
    this.setState({show_grid : false});
    console.log(data);
    instruments.vibraphone.bars = scales[data.scale].notes;   //Apply the selected Scale to instrument.vibraphone.bars
    instruments.vibraphone.combined = scales[data.scale].notes;

    let result = Object.assign({}, initialState.data);  //Make a copy of intitalState.data in to an Array

    /*
    Loundness control
    [15:56, 3/16/2018] Martin Molin: 1-49 Manual Channel 1
    [15:56, 3/16/2018] Martin Molin: 50-99 Alternating
    [15:56, 3/16/2018] Martin Molin: 100-127 manual Channel 2
    */
    const manual1Treshold = 0.3858267716535433; //Loundess-treshold
    const alternatingTreshold = 0.7795275590551181;

    let previousChannel = 1;


    Object.keys(instruments).forEach(instrumentGroup => { //Iteration over instrumentGroup (drums, bass, vibraphone)

      Object.keys(instruments[instrumentGroup])
        .filter(instrument => instrument!=="combined")
        .forEach(instrument =>{                           //Iteration over instrument_parts
          data[instrumentGroup].notes
            .filter(note => instruments[instrumentGroup][instrument].includes(note.midi))
            .forEach((note, noteIndex) => {               //Iteration over notes from instrument

              const timingPosition = getTimingPosition(note.time);
              console.log(timingPosition, note.time, instrument);

              if (timingPosition === false) {
                console.log("timingPosition === false", note);
              } 
              else {
                const { column, index } = timingPosition;

                let channel;
                if (note.velocity > 0 && note.velocity < manual1Treshold) {
                  // manual 1
                  channel = 0;
                } else if (note.velocity < alternatingTreshold) {
                  // manual 2
                  channel = 3;
                } else {
                  // alternating
                  if (noteIndex === 0 || previousChannel === 3) {
                    channel = 0;
                  } else {
                    channel = 3;
                  }
                }
                previousChannel = channel;
                const newColumn = column + channel; //((column + 1) * channel) - 1;
                if(instrumentGroup === "vibraphone"){
                  var bar = instruments[instrumentGroup][instrument].indexOf(note.midi)+1;
                  result[instrumentGroup]["bar"+bar][newColumn][index] = true;
                }
                else {
                  result[instrumentGroup][instrument][newColumn][index] = true;
                }
              }
            })
            //console.log(result);
        })
    });

    this.setState({ data: result, midi_data: data });
    //this.update();
  };

  update = () => {
    this.noteGridRef.current.update();
  };

  render() {
    const { data, show_grid } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {/* Creates the AppBar in the Head of the programm. For further infromation pleas read "https://material-ui.com/demos/app-bar/"  */}
        <div className={classes.appbar}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.grow}>
                Marble Machine X Programmer
              </Typography>
              <Button color="inherit">Settings</Button>
              <Button color="inherit">Help</Button>
              <Button color="inherit" onClick={this.play.bind(this)}>Play</Button>
              <Button color="inherit" onClick={this.stop.bind(this)}>Stop</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <div style={{display: 'none'}}>
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[268]}/> 
          </div>
        </div>
        {/* End of creating AppBar */}
        {/* Create the upload view in paper. For more information read "https://material-ui.com/demos/paper/" and have a look to "/components/Export.js" and "/components/Midiupload.js"*/}
        <div className={classes.content}>
          <Paper className={classes.controls} elevation={1}>
            <MidiUpload 	                                        //ToDo: y-Scrolling JS 
              setData={this.setData}
              instruments={instruments}
              scales={scales}
            />
            <Export data={data} />
          </Paper>
        </div>
        {/* If show_grid= false NoteGrid becomes displayed (NoteGrid: /components/NoteGrid.js) */}
        { show_grid ? (<div></div>):(<div className={classes.notegrid}><NoteGrid
          ref={this.noteGridRef}
          data={data}
          changeNote={this.changeNote}
          /></div>)}
      </div>
    );
  }
}

export default withStyles(styles)(App);
