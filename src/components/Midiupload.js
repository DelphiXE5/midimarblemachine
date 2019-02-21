import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { load as loadMidi } from "midiconvert";
import Grid from "@material-ui/core/Grid";

//Stylesheet in theme decalration
const styles = theme => ({
  fileUpload: {
    display: 'none'
  },
  formControl: {
    margin: theme.spacing.unit,
    //minWidth: 120,
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit
  },
  load: {
    float: 'left',
    paddingLeft: '30px',
    paddingTop: '10px',
  },
  dia_tit: {
    paddingBottom: 10,
  }
});

// Source: https://github.com/Tonejs/MidiConvert/blob/fcd0cb9619bdf54f20bf2ee4d125a229d9b6deac/src/Util.js
function midiToPitch(midi) {
  const scaleIndexToNote = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const octave = Math.floor(midi / 12) - 1; //The octave isn't importent for scale specification
  const note = midi % 12;
  return scaleIndexToNote[note]+octave;
}

class MidiUpload extends Component {
  state = {
    showErrorDialog: false,
    showTrackDialog: false,
    drumsChannelNumber: -1,
    bassChannelNumber: -1,
    vibraphoneChannelNumber: -1,
    scale: "C"
  };
  static propTypes = {
    classes: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    instruments: PropTypes.object.isRequired,
    scales: PropTypes.object.isRequired
  };    

  onChange = e => {
    const fileName = e.target.files[0].name;  //Get the Filename from Input
    this.setState({ fileName: fileName, loading: true });  //Set State for updating the component
    // TODO: Error handling is not working
    loadMidi(fileName, midi => {
      const tracks = midi.tracks //Create array with all tracks(channels) with name and id
        .filter(track => track.name !== undefined)
        .map(track => {
          return { channelNumber: track.channelNumber, name: track.name };
        });
      //---------------------Search for equal named Midi-Channels (bass, drums, vibraphone) and set it as default for the instruments----/ 
      var channelselection = {'drumsChannelNumber':tracks[0].channelNumber, 'bassChannelNumber': tracks[0].channelNumber, 'vibraphoneChannelNumber': tracks[0].channelNumber}; //If not named, default is the first midichannel
      tracks.forEach(track => {
        switch (track.name.toLowerCase()) {
          case "drums":
            channelselection.drumsChannelNumber = track.channelNumber;
            break;
          case "bass":
            channelselection.bassChannelNumber = track.channelNumber;
            break;
          case "vibraphone":
            channelselection.vibraphoneChannelNumber = track.channelNumber;
            break;
          default:
            return;
        }
      });

      this.midi = midi; //Map the converted midi-file to the component in "this.midi"
      this.setState({ //Update the component with the parameters
        loading: false,
        showTrackDialog: true,
        tracks,
        ...channelselection
      });
    });
  };

  handleErrorClose = () => {
    this.setState({ showErrorDialog: false });
  };

  handleTrackClose = isCancel => {
    //console.log("iscancel", isCancel);
    if (isCancel) {
      this.setState({ showTrackDialog: false });
      return;
    }
    const {
      drumsChannelNumber,
      bassChannelNumber,
      vibraphoneChannelNumber,
      scale
    } = this.state;

    if (
      new Set([drumsChannelNumber, bassChannelNumber, vibraphoneChannelNumber])
        .size !== 3
    ) {
      this.setState({
        showErrorDialog: true,
        error: "You have assigned the same track to multiple instruments."
      });
    } else {
      let data = { scale };
      for (let i = 0; i < this.midi.tracks.length; i++) {
        const track = this.midi.tracks[i];
        switch (track.channelNumber) {
          case drumsChannelNumber:
            data.drums = track;
            break;
          case bassChannelNumber:
            data.bass = track;
            break;
          case vibraphoneChannelNumber:
            data.vibraphone = track;
            break;
          default:
            break;
        }
      }
      try {
        this.props.setData(data);
      } catch (e) {
        console.error(e);
      }
      this.setState({ showTrackDialog: false });
    }
  };

  handleTrackChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, scales } = this.props;
    const {
      showTrackDialog,
      tracks,
      loading,
      showErrorDialog,
      drumsChannelNumber,
      bassChannelNumber,
      vibraphoneChannelNumber,
      scale
    } = this.state;

    // const scales = ["C#"];

    // console.log("state", this.state);

    const trackSelect = tracks
      ? tracks.map(track => {
          return (
            <MenuItem
              key={"channel" + track.channelNumber}
              value={track.channelNumber}
            >
              {track.name}
            </MenuItem>
          );
        })
      : null;

    const scalesSelect = Object.keys(scales).map(key => {
      //console.log(key);
      const value = scales[key];
      const scaleText = scales[key].notes.map(midiToPitch).join(", ")
      return (
        <MenuItem key={"scale" + key} value={key}>
          {value.name} ({scaleText})
        </MenuItem>
      );
    });

    //const scalesText = scales[scale].notes.map(midiToPitch).join(", ");

    return (
      <span>
        {loading ? (
          <div className={classes.load}>
            <CircularProgress className={classes.progress} />
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            component={"label"}
            htmlFor="upload"
          >
            Upload Midi
          </Button>
        )}
        {/* Hidden input for midi-file uploading, action with button before */}
        <input
          id="upload"
          className={classes.fileUpload}
          type="file"
          accept=".mid,.midi"
          onChange={this.onChange}
        />
        {/* Dialog for track mapping and scale select */}
        <Dialog
          open={showTrackDialog}
          onClose={this.handleErrorClose}
          aria-labelledby="track-dialog"
        >
          <DialogTitle id="track-dialog" className={classes.dia_tit}>Track mapping</DialogTitle>
          <DialogContent>
            <DialogContentText id="track-dialog-description">
              Choose the track mapping and the scale for the vibraphone.
            </DialogContentText>
            <form className={classes.root} autoComplete="off">
              <Grid container spacing={24}>
                {/* Grid for Instruments (bass, drums, vibraphone) */}
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="drums-helper">Drums</InputLabel>
                    <Select
                      value={drumsChannelNumber}
                      onChange={this.handleTrackChange}
                      input={<Input name="drumsChannelNumber" id="drums-helper" />}
                    >
                      {trackSelect}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="bass-helper">Bass</InputLabel>
                    <Select
                      value={bassChannelNumber}
                      onChange={this.handleTrackChange}
                      input={<Input name="bassChannelNumber" id="bass-helper" />}
                    >
                      {trackSelect}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="vibraphone-helper">Vibraphone</InputLabel>
                    <Select
                      value={vibraphoneChannelNumber}
                      onChange={this.handleTrackChange}
                      input={<Input name="vibraphoneChannelNumber" id="vibraphone-helper" />}
                    >
                      {trackSelect}
                    </Select>
                  </FormControl>
                </Grid>
                {/* End Grid Instruments */}
                {/* Begin Grid Scale */}
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="vscale-helper">
                      Vibraphone scale
                    </InputLabel>
                    <Select
                      value={scale}
                      onChange={this.handleTrackChange}
                      input={<Input name="scale" id="scale-helper" />}
                    >
                      {scalesSelect}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleTrackClose(true)} onChange={this.props.onChangeValue} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.handleTrackClose(false)}
              color="primary"
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={showErrorDialog}
          onClose={this.handleErrorClose}
          aria-labelledby="error-dialog"
        >
          <DialogTitle id="error-dialog">Error</DialogTitle>
          <DialogContent>
            <DialogContentText id="error-dialog-description">
              There was an error uploading the MiDi file!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleErrorClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default withStyles(styles)(MidiUpload);
