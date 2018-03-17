import React, { Component } from "react";
import { NewNoteGrid } from "./components/NewNoteGrid";

const midi = {
  header: {
    PPQ: 480,
    timeSignature: [4, 4],
    bpm: 80,
    name: ""
  },
  startTime: 0,
  duration: 237.5781250000001,
  tracks: [
    {
      startTime: 0,
      duration: 237.5781250000001,
      length: 463,
      notes: [
        {
          name: "E5",
          midi: 76,
          time: 0,
          velocity: 0.6377952755905512,
          duration: 1.1187500000000001
        },
        {
          name: "B4",
          midi: 71,
          time: 1.1250000000000002,
          velocity: 0.7165354330708661,
          duration: 1.4937500000000001
        },
        {
          name: "A4",
          midi: 69,
          time: 2.6250000000000004,
          velocity: 0.5984251968503937,
          duration: 0.3687499999999999
        },
        {
          name: "G4",
          midi: 67,
          time: 3.0000000000000004,
          velocity: 0.7401574803149606,
          duration: 0.3687499999999999
        },
        {
          name: "A4",
          midi: 69,
          time: 3.3750000000000004,
          velocity: 0.6377952755905512,
          duration: 0.7437499999999999
        },
        {
          name: "B4",
          midi: 71,
          time: 4.125,
          velocity: 0.7244094488188977,
          duration: 0.7437500000000004
        },
        {
          name: "G4",
          midi: 67,
          time: 4.875,
          velocity: 0.5905511811023622,
          duration: 0.36875000000000036
        },
        {
          name: "A4",
          midi: 69,
          time: 5.25,
          velocity: 0.5984251968503937,
          duration: 0.36875000000000036
        },
        {
          name: "D5",
          midi: 74,
          time: 5.625,
          velocity: 0.7795275590551181,
          duration: 1.4937500000000004
        },
        {
          name: "B4",
          midi: 71,
          time: 7.125,
          velocity: 0.7086614173228346,
          duration: 1.4937500000000004
        },
        {
          name: "A4",
          midi: 69,
          time: 8.625,
          velocity: 0.6692913385826772,
          duration: 0.36875000000000036
        },
        {
          name: "G4",
          midi: 67,
          time: 9,
          velocity: 0.6692913385826772,
          duration: 0.36875000000000036
        },
        {
          name: "A4",
          midi: 69,
          time: 9.375,
          velocity: 0.6692913385826772,
          duration: 1.203125
        },
        {
          name: "F#4",
          midi: 66,
          time: 10.125,
          velocity: 0.7401574803149606,
          duration: 0.6765624999999993
        },
        {
          name: "G4",
          midi: 67,
          time: 10.875,
          velocity: 0.6692913385826772,
          duration: 0.3937500000000007
        },
        {
          name: "A4",
          midi: 69,
          time: 11.25,
          velocity: 0.7007874015748031,
          duration: 0.43593749999999964
        },
        {
          name: "D5",
          midi: 74,
          time: 11.625,
          velocity: 0.7637795275590551,
          duration: 1.1984375000000007
        },
        {
          name: "B4",
          midi: 71,
          time: 13.125,
          velocity: 0.6299212598425197,
          duration: 1.2125000000000004
        },
        {
          name: "D5",
          midi: 74,
          time: 14.625,
          velocity: 0.6456692913385826,
          duration: 0.546875
        },
        {
          name: "C5",
          midi: 72,
          time: 15,
          velocity: 0.6299212598425197,
          duration: 0.37656250000000036
        },
        {
          name: "B4",
          midi: 71,
          time: 15.375,
          velocity: 0.5905511811023622,
          duration: 0.84375
        },
        {
          name: "A4",
          midi: 69,
          time: 16.125,
          velocity: 0.6850393700787402,
          duration: 0.7296875000000007
        },
        {
          name: "G4",
          midi: 67,
          time: 16.875,
          velocity: 0.6850393700787402,
          duration: 0.3609374999999986
        },
        {
          name: "A4",
          midi: 69,
          time: 17.25,
          velocity: 0.7401574803149606,
          duration: 0.7765625000000007
        },
        {
          name: "E4",
          midi: 64,
          time: 17.625,
          velocity: 0.6062992125984252,
          duration: 2.5140625000000014
        },
        {
          name: "B4",
          midi: 71,
          time: 19.125,
          velocity: 0.6456692913385826,
          duration: 1.1609375000000028
        },
        {
          name: "D5",
          midi: 74,
          time: 20.625000000000004,
          velocity: 0.7007874015748031,
          duration: 0.5499999999999972
        },
        {
          name: "C5",
          midi: 72,
          time: 21.000000000000004,
          velocity: 0.6535433070866141,
          duration: 0.39374999999999716
        },
        {
          name: "B4",
          midi: 71,
          time: 21.375,
          velocity: 0.6377952755905512,
          duration: 0.8296874999999986
        },
        {
          name: "A4",
          midi: 69,
          time: 22.125,
          velocity: 0.7007874015748031,
          duration: 0.7906249999999986
        },
        {
          name: "G4",
          midi: 67,
          time: 22.875,
          velocity: 0.7086614173228346,
          duration: 0.4093750000000007
        },
        {
          name: "A4",
          midi: 69,
          time: 23.25,
          velocity: 0.6771653543307087,
          duration: 1.8125
        },
        {
          name: "E5",
          midi: 76,
          time: 23.625,
          velocity: 0.7401574803149606,
          duration: 1.1765624999999993
        },
        {
          name: "B4",
          midi: 71,
          time: 25.125,
          velocity: 0.7007874015748031,
          duration: 1.5593749999999993
        },
        {
          name: "A4",
          midi: 69,
          time: 26.625,
          velocity: 0.6614173228346457,
          duration: 0.3921874999999986
        },
        {
          name: "G4",
          midi: 67,
          time: 27,
          velocity: 0.6614173228346457,
          duration: 0.4296875
        },
        {
          name: "A4",
          midi: 69,
          time: 27.375,
          velocity: 0.6220472440944882,
          duration: 0.7765625000000007
        },
        {
          name: "B4",
          midi: 71,
          time: 28.125,
          velocity: 0.5590551181102362,
          duration: 0.7828124999999986
        },
        {
          name: "G4",
          midi: 67,
          time: 28.875,
          velocity: 0.6614173228346457,
          duration: 0.453125
        },
        {
          name: "A4",
          midi: 69,
          time: 29.25,
          velocity: 0.7007874015748031,
          duration: 1.6781250000000014
        },
        {
          name: "D5",
          midi: 74,
          time: 29.625,
          velocity: 0.7086614173228346,
          duration: 1.5296875000000014
        },
        {
          name: "B4",
          midi: 71,
          time: 31.125,
          velocity: 0.6850393700787402,
          duration: 1.3953125000000028
        },
        {
          name: "D5",
          midi: 74,
          time: 32.625,
          velocity: 0.6456692913385826,
          duration: 0.390625
        },
        {
          name: "C5",
          midi: 72,
          time: 33,
          velocity: 0.6535433070866141,
          duration: 0.390625
        },
        {
          name: "B4",
          midi: 71,
          time: 33.375,
          velocity: 0.7244094488188977,
          duration: 0.5265624999999972
        },
        {
          name: "A4",
          midi: 69,
          time: 34.125,
          velocity: 0.7401574803149606,
          duration: 0.6499999999999986
        },
        {
          name: "G4",
          midi: 67,
          time: 34.875,
          velocity: 0.6535433070866141,
          duration: 0.515625
        },
        {
          name: "A4",
          midi: 69,
          time: 35.25,
          velocity: 0.7244094488188977,
          duration: 1.5828124999999957
        },
        {
          name: "D5",
          midi: 74,
          time: 35.625,
          velocity: 0.8031496062992126,
          duration: 1.1531249999999957
        },
        {
          name: "B4",
          midi: 71,
          time: 37.12499999999999,
          velocity: 0.7637795275590551,
          duration: 1.171875
        },
        {
          name: "A4",
          midi: 69,
          time: 38.24999999999999,
          velocity: 0.7952755905511811,
          duration: 0.33124999999999716
        },
        {
          name: "E5",
          midi: 76,
          time: 38.62499999999999,
          velocity: 0.6929133858267716,
          duration: 0.7296874999999972
        },
        {
          name: "B4",
          midi: 71,
          time: 39.37499999999999,
          velocity: 0.7401574803149606,
          duration: 0.7015625000000014
        },
        {
          name: "A4",
          midi: 69,
          time: 40.12499999999999,
          velocity: 0.84251968503937,
          duration: 0.6468750000000014
        },
        {
          name: "G4",
          midi: 67,
          time: 40.87499999999999,
          velocity: 0.7244094488188977,
          duration: 0.7937500000000028
        },
        {
          name: "F#4",
          midi: 66,
          time: 41.24999999999999,
          velocity: 0.84251968503937,
          duration: 0.6187500000000057
        },
        {
          name: "E4",
          midi: 64,
          time: 41.62499999999999,
          velocity: 0.8267716535433071,
          duration: 0.7828125000000057
        },
        {
          name: "B3",
          midi: 59,
          time: 42.375,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "C4",
          midi: 60,
          time: 42.75,
          velocity: 0.6141732283464567,
          duration: 0.5859375
        },
        {
          name: "F#4",
          midi: 66,
          time: 43.125,
          velocity: 0.6692913385826772,
          duration: 0.4296875
        },
        {
          name: "C4",
          midi: 60,
          time: 43.5,
          velocity: 0.6771653543307087,
          duration: 0.37968750000000284
        },
        {
          name: "E4",
          midi: 64,
          time: 43.875,
          velocity: 0.7874015748031497,
          duration: 0.37968750000000284
        },
        {
          name: "G4",
          midi: 67,
          time: 44.25,
          velocity: 0.7244094488188977,
          duration: 0.26093750000000426
        },
        {
          name: "D4",
          midi: 62,
          time: 44.62500000000001,
          velocity: 0.6377952755905512,
          duration: 0.3734375000000014
        },
        {
          name: "F#4",
          midi: 66,
          time: 45.00000000000001,
          velocity: 0.7480314960629921,
          duration: 0.3734375000000014
        },
        {
          name: "A4",
          midi: 69,
          time: 45.37500000000001,
          velocity: 0.7795275590551181,
          duration: 0.40937499999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 45.75000000000001,
          velocity: 0.6456692913385826,
          duration: 0.22968749999999716
        },
        {
          name: "B4",
          midi: 71,
          time: 46.12500000000001,
          velocity: 0.7401574803149606,
          duration: 0.46562500000000284
        },
        {
          name: "F#4",
          midi: 66,
          time: 46.50000000000001,
          velocity: 0.7480314960629921,
          duration: 0.37187500000000284
        },
        {
          name: "G4",
          midi: 67,
          time: 46.87500000000001,
          velocity: 0.8582677165354331,
          duration: 0.765625
        },
        {
          name: "A4",
          midi: 69,
          time: 47.25000000000001,
          velocity: 0.7401574803149606,
          duration: 1.7421875
        },
        {
          name: "E5",
          midi: 76,
          time: 47.62500000000001,
          velocity: 0.7637795275590551,
          duration: 1.515625
        },
        {
          name: "B4",
          midi: 71,
          time: 49.12500000000001,
          velocity: 0.8267716535433071,
          duration: 1.4734375000000028
        },
        {
          name: "A4",
          midi: 69,
          time: 50.62500000000001,
          velocity: 0.7086614173228346,
          duration: 0.453125
        },
        {
          name: "G4",
          midi: 67,
          time: 51.00000000000001,
          velocity: 0.8503937007874016,
          duration: 0.38750000000000284
        },
        {
          name: "A4",
          midi: 69,
          time: 51.37500000000001,
          velocity: 0.7480314960629921,
          duration: 0.7234375000000028
        },
        {
          name: "B4",
          midi: 71,
          time: 52.12500000000001,
          velocity: 0.8346456692913385,
          duration: 0.8562500000000028
        },
        {
          name: "G4",
          midi: 67,
          time: 52.87500000000001,
          velocity: 0.7007874015748031,
          duration: 0.4593750000000014
        },
        {
          name: "A4",
          midi: 69,
          time: 53.25000000000001,
          velocity: 0.7086614173228346,
          duration: 0.46562500000000284
        },
        {
          name: "D5",
          midi: 74,
          time: 53.62500000000001,
          velocity: 0.8031496062992126,
          duration: 1.5750000000000028
        },
        {
          name: "B4",
          midi: 71,
          time: 55.12500000000001,
          velocity: 0.8188976377952756,
          duration: 1.4656250000000028
        },
        {
          name: "A4",
          midi: 69,
          time: 56.62500000000001,
          velocity: 0.7795275590551181,
          duration: 0.4046875000000014
        },
        {
          name: "G4",
          midi: 67,
          time: 57.00000000000001,
          velocity: 0.7795275590551181,
          duration: 0.39374999999999716
        },
        {
          name: "A4",
          midi: 69,
          time: 57.37500000000001,
          velocity: 0.7795275590551181,
          duration: 0.7046874999999986
        },
        {
          name: "F#4",
          midi: 66,
          time: 58.12500000000001,
          velocity: 0.8503937007874016,
          duration: 0.6765625000000028
        },
        {
          name: "G4",
          midi: 67,
          time: 58.87500000000001,
          velocity: 0.7795275590551181,
          duration: 0.39374999999999716
        },
        {
          name: "A4",
          midi: 69,
          time: 59.25000000000001,
          velocity: 0.8110236220472441,
          duration: 1.7015624999999943
        },
        {
          name: "D5",
          midi: 74,
          time: 59.62500000000001,
          velocity: 0.8031496062992126,
          duration: 1.1984374999999972
        },
        {
          name: "B4",
          midi: 71,
          time: 61.125,
          velocity: 0.7401574803149606,
          duration: 1.2124999999999986
        },
        {
          name: "D5",
          midi: 74,
          time: 62.625,
          velocity: 0.7559055118110236,
          duration: 0.546875
        },
        {
          name: "C5",
          midi: 72,
          time: 63,
          velocity: 0.7401574803149606,
          duration: 0.3765624999999986
        },
        {
          name: "B4",
          midi: 71,
          time: 63.375,
          velocity: 0.7007874015748031,
          duration: 0.84375
        },
        {
          name: "A4",
          midi: 69,
          time: 64.125,
          velocity: 0.7952755905511811,
          duration: 0.7296874999999972
        },
        {
          name: "G4",
          midi: 67,
          time: 64.875,
          velocity: 0.7952755905511811,
          duration: 0.3609375000000057
        },
        {
          name: "A4",
          midi: 69,
          time: 65.25,
          velocity: 0.8503937007874016,
          duration: 0.7765624999999972
        },
        {
          name: "E4",
          midi: 64,
          time: 65.625,
          velocity: 0.7165354330708661,
          duration: 1.078125
        },
        {
          name: "B4",
          midi: 71,
          time: 67.125,
          velocity: 0.7559055118110236,
          duration: 1.1624999999999943
        },
        {
          name: "D5",
          midi: 74,
          time: 68.625,
          velocity: 0.8110236220472441,
          duration: 0.5500000000000114
        },
        {
          name: "C5",
          midi: 72,
          time: 69,
          velocity: 0.7637795275590551,
          duration: 0.39375000000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 69.37500000000001,
          velocity: 0.7480314960629921,
          duration: 0.8296875000000057
        },
        {
          name: "A4",
          midi: 69,
          time: 70.12500000000001,
          velocity: 0.8110236220472441,
          duration: 0.7906250000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 70.87500000000001,
          velocity: 0.8188976377952756,
          duration: 0.40937499999999716
        },
        {
          name: "A4",
          midi: 69,
          time: 71.25000000000001,
          velocity: 0.7874015748031497,
          duration: 1.8125
        },
        {
          name: "E5",
          midi: 76,
          time: 71.62500000000001,
          velocity: 0.8503937007874016,
          duration: 1.1765625000000028
        },
        {
          name: "B4",
          midi: 71,
          time: 73.12500000000001,
          velocity: 0.8110236220472441,
          duration: 1.5593750000000028
        },
        {
          name: "A4",
          midi: 69,
          time: 74.62500000000001,
          velocity: 0.7716535433070866,
          duration: 0.3921875000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 75.00000000000001,
          velocity: 0.7716535433070866,
          duration: 0.4296875
        },
        {
          name: "A4",
          midi: 69,
          time: 75.37500000000001,
          velocity: 0.7322834645669292,
          duration: 0.7765624999999972
        },
        {
          name: "B4",
          midi: 71,
          time: 76.12500000000001,
          velocity: 0.6692913385826772,
          duration: 0.7828125000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 76.87500000000001,
          velocity: 0.7716535433070866,
          duration: 0.453125
        },
        {
          name: "A4",
          midi: 69,
          time: 77.25000000000001,
          velocity: 0.8110236220472441,
          duration: 1.6781249999999943
        },
        {
          name: "D5",
          midi: 74,
          time: 77.62500000000001,
          velocity: 0.8188976377952756,
          duration: 1.5296874999999943
        },
        {
          name: "B4",
          midi: 71,
          time: 79.12500000000001,
          velocity: 0.7952755905511811,
          duration: 1.3953124999999886
        },
        {
          name: "D5",
          midi: 74,
          time: 80.625,
          velocity: 0.7559055118110236,
          duration: 0.390625
        },
        {
          name: "C5",
          midi: 72,
          time: 81,
          velocity: 0.7637795275590551,
          duration: 0.390625
        },
        {
          name: "B4",
          midi: 71,
          time: 81.375,
          velocity: 0.8346456692913385,
          duration: 0.5265624999999972
        },
        {
          name: "A4",
          midi: 69,
          time: 82.125,
          velocity: 0.8503937007874016,
          duration: 0.6500000000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 82.875,
          velocity: 0.7637795275590551,
          duration: 0.515625
        },
        {
          name: "A4",
          midi: 69,
          time: 83.25,
          velocity: 0.8346456692913385,
          duration: 1.5828125000000028
        },
        {
          name: "D5",
          midi: 74,
          time: 83.625,
          velocity: 0.8267716535433071,
          duration: 1.1531250000000028
        },
        {
          name: "B4",
          midi: 71,
          time: 85.125,
          velocity: 0.8031496062992126,
          duration: 1.1734375000000057
        },
        {
          name: "A4",
          midi: 69,
          time: 86.25,
          velocity: 0.8188976377952756,
          duration: 0.33125000000001137
        },
        {
          name: "E5",
          midi: 76,
          time: 86.62500000000001,
          velocity: 0.8031496062992126,
          duration: 0.7296874999999972
        },
        {
          name: "B4",
          midi: 71,
          time: 87.37500000000001,
          velocity: 0.8503937007874016,
          duration: 0.7015624999999943
        },
        {
          name: "A4",
          midi: 69,
          time: 88.12500000000001,
          velocity: 0.7795275590551181,
          duration: 0.6468749999999943
        },
        {
          name: "G4",
          midi: 67,
          time: 88.87500000000001,
          velocity: 0.8346456692913385,
          duration: 0.7937500000000028
        },
        {
          name: "F#4",
          midi: 66,
          time: 89.25000000000001,
          velocity: 0.7795275590551181,
          duration: 0.6187500000000057
        },
        {
          name: "E4",
          midi: 64,
          time: 89.62500000000001,
          velocity: 0.8503937007874016,
          duration: 0.7828124999999915
        },
        {
          name: "E5",
          midi: 76,
          time: 95.58281250000002,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 96.00000000000001,
          velocity: 0.6062992125984252,
          duration: 0.5593750000000028
        },
        {
          name: "B4",
          midi: 71,
          time: 96.37500000000001,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "E5",
          midi: 76,
          time: 96.75000000000001,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 97.12500000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437499999999716
        },
        {
          name: "B4",
          midi: 71,
          time: 97.50000000000001,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "E5",
          midi: 76,
          time: 97.87500000000001,
          velocity: 0.5905511811023622,
          duration: 0.5265624999999972
        },
        {
          name: "E4",
          midi: 64,
          time: 98.25000000000001,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 98.62500000000001,
          velocity: 0.36220472440944884,
          duration: 0.12187500000000284
        },
        {
          name: "E5",
          midi: 76,
          time: 99.00000000000001,
          velocity: 0.6141732283464567,
          duration: 0.47968749999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 99.37500000000001,
          velocity: 0.41732283464566927,
          duration: 0.40312500000000284
        },
        {
          name: "B4",
          midi: 71,
          time: 99.75000000000001,
          velocity: 0.3937007874015748,
          duration: 0.18125000000000568
        },
        {
          name: "E5",
          midi: 76,
          time: 100.12500000000001,
          velocity: 0.6771653543307087,
          duration: 0.4906249999999943
        },
        {
          name: "E4",
          midi: 64,
          time: 100.50000000000001,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "B4",
          midi: 71,
          time: 100.87500000000001,
          velocity: 0.4251968503937008,
          duration: 0.21718749999999432
        },
        {
          name: "E4",
          midi: 64,
          time: 101.25000000000001,
          velocity: 0.5748031496062992,
          duration: 13.309374999999974
        },
        {
          name: "D5",
          midi: 74,
          time: 101.62500000000001,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "D4",
          midi: 62,
          time: 102.00000000000001,
          velocity: 0.6062992125984252,
          duration: 0.5593750000000028
        },
        {
          name: "G4",
          midi: 67,
          time: 102.37500000000001,
          velocity: 0.5826771653543307,
          duration: 0.1640625
        },
        {
          name: "D5",
          midi: 74,
          time: 102.75000000000001,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "D4",
          midi: 62,
          time: 103.12500000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437499999999716
        },
        {
          name: "G4",
          midi: 67,
          time: 103.50000000000001,
          velocity: 0.5826771653543307,
          duration: 0.1640625
        },
        {
          name: "D5",
          midi: 74,
          time: 103.87500000000001,
          velocity: 0.5275590551181102,
          duration: 0.5265624999999972
        },
        {
          name: "D4",
          midi: 62,
          time: 104.25000000000001,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 104.62500000000001,
          velocity: 0.5433070866141733,
          duration: 0.12187500000000284
        },
        {
          name: "D5",
          midi: 74,
          time: 105.00000000000001,
          velocity: 0.5511811023622047,
          duration: 0.47968749999999716
        },
        {
          name: "D4",
          midi: 62,
          time: 105.37500000000001,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "G4",
          midi: 67,
          time: 105.75000000000001,
          velocity: 0.5748031496062992,
          duration: 0.18124999999999147
        },
        {
          name: "D5",
          midi: 74,
          time: 106.125,
          velocity: 0.6771653543307087,
          duration: 0.4906249999999943
        },
        {
          name: "D4",
          midi: 62,
          time: 106.5,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "B4",
          midi: 71,
          time: 106.875,
          velocity: 0.5590551181102362,
          duration: 0.21718749999999432
        },
        {
          name: "D4",
          midi: 62,
          time: 107.25,
          velocity: 0.5748031496062992,
          duration: 0.16875000000000284
        },
        {
          name: "D5",
          midi: 74,
          time: 107.625,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "D4",
          midi: 62,
          time: 108,
          velocity: 0.6062992125984252,
          duration: 0.5593750000000028
        },
        {
          name: "F#4",
          midi: 66,
          time: 108.375,
          velocity: 0.5039370078740157,
          duration: 0.1640625
        },
        {
          name: "D5",
          midi: 74,
          time: 108.75,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "D4",
          midi: 62,
          time: 109.125,
          velocity: 0.5039370078740157,
          duration: 0.28437499999999716
        },
        {
          name: "F#4",
          midi: 66,
          time: 109.5,
          velocity: 0.5039370078740157,
          duration: 0.1640625
        },
        {
          name: "D5",
          midi: 74,
          time: 109.875,
          velocity: 0.5275590551181102,
          duration: 0.5265624999999972
        },
        {
          name: "D4",
          midi: 62,
          time: 110.25,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "F#4",
          midi: 66,
          time: 110.625,
          velocity: 0.4645669291338583,
          duration: 0.12187500000000284
        },
        {
          name: "D5",
          midi: 74,
          time: 111,
          velocity: 0.5511811023622047,
          duration: 0.47968749999999716
        },
        {
          name: "D4",
          midi: 62,
          time: 111.375,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "F#4",
          midi: 66,
          time: 111.75,
          velocity: 0.49606299212598426,
          duration: 0.18124999999999147
        },
        {
          name: "D5",
          midi: 74,
          time: 112.12499999999999,
          velocity: 0.6771653543307087,
          duration: 0.4906249999999943
        },
        {
          name: "D4",
          midi: 62,
          time: 112.49999999999999,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "B4",
          midi: 71,
          time: 112.87499999999999,
          velocity: 0.5590551181102362,
          duration: 0.21718749999999432
        },
        {
          name: "D4",
          midi: 62,
          time: 113.24999999999999,
          velocity: 0.5748031496062992,
          duration: 0.16875000000000284
        },
        {
          name: "G4",
          midi: 67,
          time: 113.62499999999999,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "E4",
          midi: 64,
          time: 113.99999999999999,
          velocity: 0.6062992125984252,
          duration: 1.4093749999999972
        },
        {
          name: "F#4",
          midi: 66,
          time: 114.37499999999999,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "G4",
          midi: 67,
          time: 114.74999999999999,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 115.12499999999999,
          velocity: 0.5039370078740157,
          duration: 1.5718750000000057
        },
        {
          name: "F#4",
          midi: 66,
          time: 115.49999999999999,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "G4",
          midi: 67,
          time: 115.87499999999999,
          velocity: 0.5905511811023622,
          duration: 0.5265624999999972
        },
        {
          name: "E4",
          midi: 64,
          time: 116.24999999999999,
          velocity: 0.5748031496062992,
          duration: 1.94687500000002
        },
        {
          name: "A4",
          midi: 69,
          time: 116.62499999999999,
          velocity: 0.7086614173228346,
          duration: 1.3125000000000142
        },
        {
          name: "D4",
          midi: 62,
          time: 117.375,
          velocity: 0.5590551181102362,
          duration: 0.375
        },
        {
          name: "E4",
          midi: 64,
          time: 117.75,
          velocity: 0.5590551181102362,
          duration: 2.809375000000017
        },
        {
          name: "F#4",
          midi: 66,
          time: 118.125,
          velocity: 0.7086614173228346,
          duration: 0.43281250000001137
        },
        {
          name: "G4",
          midi: 67,
          time: 118.87500000000001,
          velocity: 0.5905511811023622,
          duration: 0.1640625
        },
        {
          name: "A4",
          midi: 69,
          time: 119.25000000000001,
          velocity: 0.5905511811023622,
          duration: 0.5265624999999972
        },
        {
          name: "E5",
          midi: 76,
          time: 119.62500000000001,
          velocity: 0.6771653543307087,
          duration: 0.1640625
        },
        {
          name: "E4",
          midi: 64,
          time: 120.00000000000001,
          velocity: 0.6062992125984252,
          duration: 1.4093749999999972
        },
        {
          name: "B4",
          midi: 71,
          time: 120.37500000000001,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "E5",
          midi: 76,
          time: 120.75000000000001,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 121.12500000000001,
          velocity: 0.5039370078740157,
          duration: 1.5718750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 121.50000000000001,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "E5",
          midi: 76,
          time: 121.87500000000001,
          velocity: 0.5905511811023622,
          duration: 0.5265624999999972
        },
        {
          name: "E4",
          midi: 64,
          time: 122.25000000000001,
          velocity: 0.5748031496062992,
          duration: 1.5281250000000028
        },
        {
          name: "B4",
          midi: 71,
          time: 122.62500000000001,
          velocity: 0.36220472440944884,
          duration: 0.12187500000000284
        },
        {
          name: "E5",
          midi: 76,
          time: 123.00000000000001,
          velocity: 0.6141732283464567,
          duration: 0.47968749999999716
        },
        {
          name: "E4",
          midi: 64,
          time: 123.37500000000001,
          velocity: 0.41732283464566927,
          duration: 1.375
        },
        {
          name: "B4",
          midi: 71,
          time: 123.75000000000001,
          velocity: 0.3937007874015748,
          duration: 0.18125000000000568
        },
        {
          name: "E5",
          midi: 76,
          time: 124.12500000000001,
          velocity: 0.6771653543307087,
          duration: 0.4906249999999943
        },
        {
          name: "E4",
          midi: 64,
          time: 124.50000000000001,
          velocity: 0.5118110236220472,
          duration: 0.75
        },
        {
          name: "E5",
          midi: 76,
          time: 124.87500000000001,
          velocity: 0.6456692913385826,
          duration: 0.21718749999999432
        },
        {
          name: "E4",
          midi: 64,
          time: 125.25000000000001,
          velocity: 0.5748031496062992,
          duration: 43.30781250000011
        },
        {
          name: "D5",
          midi: 74,
          time: 125.62500000000001,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "D4",
          midi: 62,
          time: 126.00000000000001,
          velocity: 0.6062992125984252,
          duration: 0.5593750000000028
        },
        {
          name: "G4",
          midi: 67,
          time: 126.37500000000001,
          velocity: 0.5826771653543307,
          duration: 0.1640625
        },
        {
          name: "D5",
          midi: 74,
          time: 126.75000000000001,
          velocity: 0.7086614173228346,
          duration: 0.43281249999999716
        },
        {
          name: "D4",
          midi: 62,
          time: 127.12500000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437499999999716
        },
        {
          name: "G4",
          midi: 67,
          time: 127.50000000000001,
          velocity: 0.5826771653543307,
          duration: 0.1640625
        },
        {
          name: "D5",
          midi: 74,
          time: 127.87500000000001,
          velocity: 0.5275590551181102,
          duration: 0.5265624999999972
        },
        {
          name: "D4",
          midi: 62,
          time: 128.25,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 128.625,
          velocity: 0.5433070866141733,
          duration: 0.12187500000001705
        },
        {
          name: "D5",
          midi: 74,
          time: 129.00000000000003,
          velocity: 0.5511811023622047,
          duration: 0.47968750000001137
        },
        {
          name: "D4",
          midi: 62,
          time: 129.37500000000003,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "G4",
          midi: 67,
          time: 129.75000000000003,
          velocity: 0.5748031496062992,
          duration: 0.18125000000000568
        },
        {
          name: "D5",
          midi: 74,
          time: 130.12500000000003,
          velocity: 0.6771653543307087,
          duration: 0.4906249999999943
        },
        {
          name: "D4",
          midi: 62,
          time: 130.50000000000003,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "B4",
          midi: 71,
          time: 130.87500000000003,
          velocity: 0.5590551181102362,
          duration: 0.21718749999999432
        },
        {
          name: "G4",
          midi: 67,
          time: 131.25000000000003,
          velocity: 0.5748031496062992,
          duration: 0.16874999999998863
        },
        {
          name: "F#5",
          midi: 78,
          time: 131.62500000000003,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "F#4",
          midi: 66,
          time: 132.00000000000003,
          velocity: 0.6062992125984252,
          duration: 0.5593749999999886
        },
        {
          name: "B4",
          midi: 71,
          time: 132.37500000000003,
          velocity: 0.5039370078740157,
          duration: 0.1640625
        },
        {
          name: "F#5",
          midi: 78,
          time: 132.75000000000003,
          velocity: 0.7086614173228346,
          duration: 0.43281250000001137
        },
        {
          name: "F#4",
          midi: 66,
          time: 133.12500000000003,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 133.50000000000003,
          velocity: 0.5039370078740157,
          duration: 0.1640625
        },
        {
          name: "F#5",
          midi: 78,
          time: 133.87500000000003,
          velocity: 0.5275590551181102,
          duration: 0.5265625000000114
        },
        {
          name: "F#4",
          midi: 66,
          time: 134.25000000000003,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 134.62500000000003,
          velocity: 0.4645669291338583,
          duration: 0.12187500000001705
        },
        {
          name: "F#5",
          midi: 78,
          time: 135.00000000000006,
          velocity: 0.5511811023622047,
          duration: 0.47968750000001137
        },
        {
          name: "F#4",
          midi: 66,
          time: 135.37500000000006,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "B4",
          midi: 71,
          time: 135.75000000000006,
          velocity: 0.49606299212598426,
          duration: 0.18125000000000568
        },
        {
          name: "F#5",
          midi: 78,
          time: 136.12500000000006,
          velocity: 0.7559055118110236,
          duration: 0.4906249999999943
        },
        {
          name: "F#4",
          midi: 66,
          time: 136.50000000000006,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "F#5",
          midi: 78,
          time: 136.87500000000006,
          velocity: 0.8346456692913385,
          duration: 0.21718749999999432
        },
        {
          name: "F#4",
          midi: 66,
          time: 137.25000000000006,
          velocity: 0.5748031496062992,
          duration: 0.16874999999998863
        },
        {
          name: "E5",
          midi: 76,
          time: 137.62500000000006,
          velocity: 0.8188976377952756,
          duration: 0.5625
        },
        {
          name: "A4",
          midi: 69,
          time: 138.00000000000006,
          velocity: 0.6062992125984252,
          duration: 0.5593749999999886
        },
        {
          name: "C5",
          midi: 72,
          time: 138.37500000000006,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "E5",
          midi: 76,
          time: 138.75000000000006,
          velocity: 0.7086614173228346,
          duration: 0.43281250000001137
        },
        {
          name: "A4",
          midi: 69,
          time: 139.12500000000006,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "C5",
          midi: 72,
          time: 139.50000000000006,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "E5",
          midi: 76,
          time: 139.87500000000006,
          velocity: 0.7086614173228346,
          duration: 0.5265625000000114
        },
        {
          name: "A4",
          midi: 69,
          time: 140.25000000000006,
          velocity: 0.6929133858267716,
          duration: 0.4468750000000057
        },
        {
          name: "F#5",
          midi: 78,
          time: 140.62500000000006,
          velocity: 0.7244094488188977,
          duration: 1.3125000000000284
        },
        {
          name: "B4",
          midi: 71,
          time: 141.37500000000009,
          velocity: 0.8110236220472441,
          duration: 0.4609375
        },
        {
          name: "C5",
          midi: 72,
          time: 141.75000000000009,
          velocity: 0.7874015748031497,
          duration: 0.6968750000000057
        },
        {
          name: "G5",
          midi: 79,
          time: 142.12500000000009,
          velocity: 0.84251968503937,
          duration: 0.4906249999999943
        },
        {
          name: "D5",
          midi: 74,
          time: 142.87500000000009,
          velocity: 0.8031496062992126,
          duration: 0.6421875000000057
        },
        {
          name: "E5",
          midi: 76,
          time: 143.25000000000009,
          velocity: 0.8031496062992126,
          duration: 0.6656250000000057
        },
        {
          name: "B5",
          midi: 83,
          time: 143.62500000000009,
          velocity: 0.8031496062992126,
          duration: 0.987499999999983
        },
        {
          name: "B4",
          midi: 71,
          time: 144.00000000000009,
          velocity: 0.6062992125984252,
          duration: 0.5593749999999886
        },
        {
          name: "E5",
          midi: 76,
          time: 144.37500000000009,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "B5",
          midi: 83,
          time: 144.75000000000006,
          velocity: 0.7086614173228346,
          duration: 0.43281250000001137
        },
        {
          name: "A1",
          midi: 71,
          time: 145.12500000000006,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "A1",
          midi: 76,
          time: 145.50000000000006,
          velocity: 0.4015748031496063,
          duration: 0.1640625
        },
        {
          name: "B5",
          midi: 83,
          time: 145.87500000000006,
          velocity: 0.5905511811023622,
          duration: 0.5250000000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 146.25000000000006,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "E5",
          midi: 76,
          time: 146.62500000000006,
          velocity: 0.36220472440944884,
          duration: 0.12187500000001705
        },
        {
          name: "B5",
          midi: 83,
          time: 147.00000000000009,
          velocity: 0.6141732283464567,
          duration: 0.47968750000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 147.37500000000009,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "E5",
          midi: 76,
          time: 147.75000000000009,
          velocity: 0.3937007874015748,
          duration: 0.18125000000000568
        },
        {
          name: "B5",
          midi: 83,
          time: 148.12500000000009,
          velocity: 0.6771653543307087,
          duration: 0.4906249999999943
        },
        {
          name: "C0",
          midi: 71,
          time: 148.50000000000009,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "D6",
          midi: 83,
          time: 148.87500000000009,
          velocity: 0.6929133858267716,
          duration: 0.21718749999999432
        },
        {
          name: "D6",
          midi: 71,
          time: 149.25000000000009,
          velocity: 0.5748031496062992,
          duration: 1.2890625
        },
        {
          name: "D6",
          midi: 78,
          time: 149.62500000000009,
          velocity: 0.6692913385826772,
          duration: 1.1609374999999886
        },
        {
          name: "F#4",
          midi: 66,
          time: 150.00000000000009,
          velocity: 0.6062992125984252,
          duration: 0.5578125000000114
        },
        {
          name: "B4",
          midi: 71,
          time: 150.37500000000009,
          velocity: 0.5826771653543307,
          duration: 1.2890625
        },
        {
          name: "F#5",
          midi: 78,
          time: 150.75000000000009,
          velocity: 0.7086614173228346,
          duration: 1.03125
        },
        {
          name: "F#4",
          midi: 66,
          time: 151.12500000000009,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 151.50000000000009,
          velocity: 0.5826771653543307,
          duration: 1.246875000000017
        },
        {
          name: "F#5",
          midi: 78,
          time: 151.87500000000009,
          velocity: 0.5275590551181102,
          duration: 1.1250000000000284
        },
        {
          name: "F#4",
          midi: 66,
          time: 152.25000000000009,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 152.62500000000009,
          velocity: 0.5433070866141733,
          duration: 1.306250000000034
        },
        {
          name: "F#5",
          midi: 78,
          time: 153.0000000000001,
          velocity: 0.5511811023622047,
          duration: 1.0796875000000057
        },
        {
          name: "F#4",
          midi: 66,
          time: 153.3750000000001,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "B4",
          midi: 71,
          time: 153.7500000000001,
          velocity: 0.5748031496062992,
          duration: 2.7890625
        },
        {
          name: "F#5",
          midi: 78,
          time: 154.1250000000001,
          velocity: 0.6771653543307087,
          duration: 1.0906249999999886
        },
        {
          name: "F#4",
          midi: 66,
          time: 154.5000000000001,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "F#5",
          midi: 78,
          time: 154.8750000000001,
          velocity: 0.5590551181102362,
          duration: 0.8156250000000114
        },
        {
          name: "F#4",
          midi: 66,
          time: 155.2500000000001,
          velocity: 0.5748031496062992,
          duration: 0.16874999999998863
        },
        {
          name: "G5",
          midi: 79,
          time: 155.6250000000001,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "G4",
          midi: 67,
          time: 156.0000000000001,
          velocity: 0.6062992125984252,
          duration: 0.5593749999999886
        },
        {
          name: "B4",
          midi: 71,
          time: 156.3750000000001,
          velocity: 0.5826771653543307,
          duration: 1.2890625
        },
        {
          name: "G5",
          midi: 79,
          time: 156.7500000000001,
          velocity: 0.6456692913385826,
          duration: 0.7796874999999943
        },
        {
          name: "G4",
          midi: 67,
          time: 157.1250000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 157.5000000000001,
          velocity: 0.5826771653543307,
          duration: 1.246875000000017
        },
        {
          name: "G5",
          midi: 79,
          time: 157.8750000000001,
          velocity: 0.6771653543307087,
          duration: 0.75
        },
        {
          name: "G4",
          midi: 67,
          time: 158.2500000000001,
          velocity: 0.5748031496062992,
          duration: 0.4468750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 158.6250000000001,
          velocity: 0.5433070866141733,
          duration: 1.306250000000034
        },
        {
          name: "G5",
          midi: 79,
          time: 159.00000000000014,
          velocity: 0.7244094488188977,
          duration: 0.5984374999999886
        },
        {
          name: "G4",
          midi: 67,
          time: 159.37500000000014,
          velocity: 0.41732283464566927,
          duration: 0.4046874999999943
        },
        {
          name: "B4",
          midi: 71,
          time: 159.75000000000014,
          velocity: 0.5748031496062992,
          duration: 2.7890625
        },
        {
          name: "G5",
          midi: 79,
          time: 160.12500000000014,
          velocity: 0.7401574803149606,
          duration: 0.6875
        },
        {
          name: "G4",
          midi: 67,
          time: 160.50000000000014,
          velocity: 0.5118110236220472,
          duration: 0.25
        },
        {
          name: "G5",
          midi: 79,
          time: 160.87500000000014,
          velocity: 0.7401574803149606,
          duration: 0.6875
        },
        {
          name: "G4",
          midi: 67,
          time: 161.25000000000014,
          velocity: 0.5748031496062992,
          duration: 0.16874999999998863
        },
        {
          name: "D5",
          midi: 74,
          time: 161.62500000000014,
          velocity: 0.7165354330708661,
          duration: 0.35468750000001137
        },
        {
          name: "G4",
          midi: 67,
          time: 162.00000000000014,
          velocity: 0.6062992125984252,
          duration: 0.5593749999999886
        },
        {
          name: "B4",
          midi: 71,
          time: 162.37500000000014,
          velocity: 0.4015748031496063,
          duration: 1.2890625
        },
        {
          name: "D5",
          midi: 74,
          time: 162.75000000000014,
          velocity: 0.7086614173228346,
          duration: 0.4312500000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 163.12500000000014,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 163.50000000000014,
          velocity: 0.4015748031496063,
          duration: 1.2890624999999716
        },
        {
          name: "D5",
          midi: 74,
          time: 163.87500000000014,
          velocity: 0.5905511811023622,
          duration: 0.5249999999999773
        },
        {
          name: "G4",
          midi: 67,
          time: 164.25000000000014,
          velocity: 0.6062992125984252,
          duration: 0.5593749999999602
        },
        {
          name: "B4",
          midi: 71,
          time: 164.6250000000001,
          velocity: 0.4015748031496063,
          duration: 1.2890625
        },
        {
          name: "D5",
          midi: 74,
          time: 165.0000000000001,
          velocity: 0.7086614173228346,
          duration: 0.4312500000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 165.3750000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 165.7500000000001,
          velocity: 0.4015748031496063,
          duration: 1.6500000000000057
        },
        {
          name: "D5",
          midi: 74,
          time: 166.1250000000001,
          velocity: 0.5905511811023622,
          duration: 0.5250000000000057
        },
        {
          name: "G4",
          midi: 67,
          time: 166.5000000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 166.8750000000001,
          velocity: 0.5905511811023622,
          duration: 1.6640625
        },
        {
          name: "G4",
          midi: 67,
          time: 167.2500000000001,
          velocity: 0.5039370078740157,
          duration: 0.28437500000001137
        },
        {
          name: "E5",
          midi: 76,
          time: 167.6250000000001,
          velocity: 0.6692913385826772,
          duration: 0.5625
        },
        {
          name: "E4",
          midi: 64,
          time: 168.0000000000001,
          velocity: 0.6220472440944882,
          duration: 1.4093750000000114
        },
        {
          name: "B4",
          midi: 71,
          time: 168.3750000000001,
          velocity: 0.6377952755905512,
          duration: 1.2890625
        },
        {
          name: "E5",
          midi: 76,
          time: 168.7500000000001,
          velocity: 0.7244094488188977,
          duration: 0.43281250000001137
        },
        {
          name: "E4",
          midi: 64,
          time: 169.1250000000001,
          velocity: 0.5196850393700787,
          duration: 1.5718750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 169.5000000000001,
          velocity: 0.6377952755905512,
          duration: 1.246875000000017
        },
        {
          name: "E5",
          midi: 76,
          time: 169.8750000000001,
          velocity: 0.6062992125984252,
          duration: 0.5265625000000114
        },
        {
          name: "E4",
          midi: 64,
          time: 170.2500000000001,
          velocity: 0.5905511811023622,
          duration: 1.528125000000017
        },
        {
          name: "B4",
          midi: 71,
          time: 170.6250000000001,
          velocity: 0.5984251968503937,
          duration: 1.3062500000000057
        },
        {
          name: "E5",
          midi: 76,
          time: 171.00000000000014,
          velocity: 0.6299212598425197,
          duration: 0.47968750000001137
        },
        {
          name: "E4",
          midi: 64,
          time: 171.37500000000014,
          velocity: 0.4330708661417323,
          duration: 1.3749999999999716
        },
        {
          name: "B4",
          midi: 71,
          time: 171.75000000000014,
          velocity: 0.6299212598425197,
          duration: 2.7890624999999716
        },
        {
          name: "E5",
          midi: 76,
          time: 172.1250000000001,
          velocity: 0.6929133858267716,
          duration: 0.4906249999999943
        },
        {
          name: "E4",
          midi: 64,
          time: 172.5000000000001,
          velocity: 0.5275590551181102,
          duration: 0.75
        },
        {
          name: "E5",
          midi: 76,
          time: 172.8750000000001,
          velocity: 0.7086614173228346,
          duration: 0.21562499999998863
        },
        {
          name: "E4",
          midi: 64,
          time: 173.2500000000001,
          velocity: 0.5905511811023622,
          duration: 70.80000000000001
        },
        {
          name: "F#5",
          midi: 78,
          time: 173.6250000000001,
          velocity: 0.6850393700787402,
          duration: 0.5625
        },
        {
          name: "F#4",
          midi: 66,
          time: 174.0000000000001,
          velocity: 0.6220472440944882,
          duration: 0.5593749999999886
        },
        {
          name: "B4",
          midi: 71,
          time: 174.3750000000001,
          velocity: 0.5984251968503937,
          duration: 1.2890625
        },
        {
          name: "F#5",
          midi: 78,
          time: 174.7500000000001,
          velocity: 0.7244094488188977,
          duration: 0.43281250000001137
        },
        {
          name: "F#4",
          midi: 66,
          time: 175.1250000000001,
          velocity: 0.5196850393700787,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 175.5000000000001,
          velocity: 0.5984251968503937,
          duration: 1.246875000000017
        },
        {
          name: "F#5",
          midi: 78,
          time: 175.8750000000001,
          velocity: 0.5433070866141733,
          duration: 0.5265625000000114
        },
        {
          name: "F#4",
          midi: 66,
          time: 176.2500000000001,
          velocity: 0.5905511811023622,
          duration: 0.4468750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 176.6250000000001,
          velocity: 0.5590551181102362,
          duration: 1.306250000000034
        },
        {
          name: "F#5",
          midi: 78,
          time: 177.00000000000014,
          velocity: 0.5669291338582677,
          duration: 0.47968750000001137
        },
        {
          name: "F#4",
          midi: 66,
          time: 177.37500000000014,
          velocity: 0.4330708661417323,
          duration: 0.4046874999999943
        },
        {
          name: "B4",
          midi: 71,
          time: 177.75000000000014,
          velocity: 0.5905511811023622,
          duration: 2.7890625
        },
        {
          name: "F#5",
          midi: 78,
          time: 178.12500000000014,
          velocity: 0.6929133858267716,
          duration: 0.4906249999999943
        },
        {
          name: "F#4",
          midi: 66,
          time: 178.50000000000014,
          velocity: 0.5275590551181102,
          duration: 0.25
        },
        {
          name: "F#5",
          midi: 78,
          time: 178.87500000000014,
          velocity: 0.5748031496062992,
          duration: 0.21718749999999432
        },
        {
          name: "F#4",
          midi: 66,
          time: 179.25000000000014,
          velocity: 0.5118110236220472,
          duration: 0.16874999999998863
        },
        {
          name: "F#5",
          midi: 78,
          time: 179.62500000000014,
          velocity: 0.6062992125984252,
          duration: 0.5625
        },
        {
          name: "F#4",
          midi: 66,
          time: 180.00000000000014,
          velocity: 0.5433070866141733,
          duration: 0.5593749999999886
        },
        {
          name: "B4",
          midi: 71,
          time: 180.37500000000014,
          velocity: 0.5196850393700787,
          duration: 1.2890625
        },
        {
          name: "F#5",
          midi: 78,
          time: 180.75000000000014,
          velocity: 0.5826771653543307,
          duration: 0.7796874999999943
        },
        {
          name: "F#4",
          midi: 66,
          time: 181.12500000000014,
          velocity: 0.4409448818897638,
          duration: 0.28437500000001137
        },
        {
          name: "B4",
          midi: 71,
          time: 181.50000000000014,
          velocity: 0.5196850393700787,
          duration: 1.246875000000017
        },
        {
          name: "F#5",
          midi: 78,
          time: 181.87500000000014,
          velocity: 0.6141732283464567,
          duration: 0.75
        },
        {
          name: "F#4",
          midi: 66,
          time: 182.25000000000014,
          velocity: 0.5118110236220472,
          duration: 0.4468750000000057
        },
        {
          name: "B4",
          midi: 71,
          time: 182.62500000000014,
          velocity: 0.48031496062992124,
          duration: 1.306250000000034
        },
        {
          name: "F#5",
          midi: 78,
          time: 183.00000000000017,
          velocity: 0.6614173228346457,
          duration: 0.5984374999999886
        },
        {
          name: "F#4",
          midi: 66,
          time: 183.37500000000017,
          velocity: 0.3543307086614173,
          duration: 0.4046874999999943
        },
        {
          name: "B4",
          midi: 71,
          time: 183.75000000000017,
          velocity: 0.5118110236220472,
          duration: 3.0578125000000114
        },
        {
          name: "F#5",
          midi: 78,
          time: 184.12500000000017,
          velocity: 0.6771653543307087,
          duration: 0.6875
        },
        {
          name: "F#4",
          midi: 66,
          time: 184.50000000000017,
          velocity: 0.5275590551181102,
          duration: 0.25
        },
        {
          name: "F#5",
          midi: 78,
          time: 184.87500000000017,
          velocity: 0.7559055118110236,
          duration: 0.6875
        },
        {
          name: "F#4",
          midi: 66,
          time: 185.25000000000017,
          velocity: 0.5905511811023622,
          duration: 0.16874999999998863
        },
        {
          name: "E5",
          midi: 76,
          time: 185.62500000000017,
          velocity: 0.7559055118110236,
          duration: 0.3671875
        },
        {
          name: "B4",
          midi: 71,
          time: 186.37500000000017,
          velocity: 0.7086614173228346,
          duration: 0
        },
        {
          name: "C5",
          midi: 72,
          time: 186.75000000000017,
          velocity: 0.6141732283464567,
          duration: 0.5859375
        },
        {
          name: "F#5",
          midi: 78,
          time: 187.12500000000017,
          velocity: 0.8031496062992126,
          duration: 0.4296875
        },
        {
          name: "C5",
          midi: 72,
          time: 187.50000000000017,
          velocity: 0.6771653543307087,
          duration: 0.37968749999998863
        },
        {
          name: "E5",
          midi: 76,
          time: 187.87500000000017,
          velocity: 0.6771653543307087,
          duration: 0.37968749999998863
        },
        {
          name: "G5",
          midi: 79,
          time: 188.25000000000017,
          velocity: 0.8031496062992126,
          duration: 0.26093749999998295
        },
        {
          name: "D5",
          midi: 74,
          time: 188.62500000000014,
          velocity: 0.6377952755905512,
          duration: 0.37187499999998863
        },
        {
          name: "F#5",
          midi: 78,
          time: 189.00000000000014,
          velocity: 0.6377952755905512,
          duration: 0.37187499999998863
        },
        {
          name: "A5",
          midi: 81,
          time: 189.37500000000014,
          velocity: 0.8031496062992126,
          duration: 0.40937500000001137
        },
        {
          name: "E5",
          midi: 76,
          time: 189.75000000000014,
          velocity: 0.5354330708661418,
          duration: 0.22812500000000568
        },
        {
          name: "B5",
          midi: 83,
          time: 190.12500000000014,
          velocity: 0.8031496062992126,
          duration: 0.46562499999998863
        },
        {
          name: "F#5",
          midi: 78,
          time: 190.50000000000014,
          velocity: 0.6377952755905512,
          duration: 0.3734374999999943
        },
        {
          name: "G5",
          midi: 79,
          time: 190.87500000000014,
          velocity: 0.8031496062992126,
          duration: 0.765625
        },
        {
          name: "A5",
          midi: 81,
          time: 191.25000000000014,
          velocity: 0.7716535433070866,
          duration: 0.8890625000000227
        },
        {
          name: "E6",
          midi: 88,
          time: 191.62500000000014,
          velocity: 0.7322834645669292,
          duration: 1.515625
        },
        {
          name: "E5",
          midi: 76,
          time: 192.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 193.12500000000014,
          velocity: 0.6850393700787402,
          duration: 1.4734374999999886
        },
        {
          name: "E5",
          midi: 76,
          time: 194.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 194.62500000000014,
          velocity: 0.5669291338582677,
          duration: 0.4546875000000057
        },
        {
          name: "G5",
          midi: 79,
          time: 195.00000000000014,
          velocity: 0.7086614173228346,
          duration: 0.38749999999998863
        },
        {
          name: "A5",
          midi: 81,
          time: 195.37500000000014,
          velocity: 0.6062992125984252,
          duration: 0.7234374999999886
        },
        {
          name: "E5",
          midi: 76,
          time: 195.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 196.12500000000014,
          velocity: 0.6929133858267716,
          duration: 0.8562499999999886
        },
        {
          name: "G5",
          midi: 79,
          time: 196.87500000000014,
          velocity: 0.5590551181102362,
          duration: 0.3921875000000057
        },
        {
          name: "A5",
          midi: 81,
          time: 197.25000000000014,
          velocity: 0.5669291338582677,
          duration: 0.46562499999998863
        },
        {
          name: "E5",
          midi: 76,
          time: 197.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "D6",
          midi: 86,
          time: 197.62500000000014,
          velocity: 0.7480314960629921,
          duration: 1.5749999999999886
        },
        {
          name: "F#5",
          midi: 78,
          time: 198.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 199.12500000000014,
          velocity: 0.6771653543307087,
          duration: 1.4656249999999886
        },
        {
          name: "F#5",
          midi: 78,
          time: 200.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 200.62500000000014,
          velocity: 0.6377952755905512,
          duration: 0.4046874999999943
        },
        {
          name: "G5",
          midi: 79,
          time: 201.00000000000014,
          velocity: 0.6377952755905512,
          duration: 0.39375000000001137
        },
        {
          name: "A5",
          midi: 81,
          time: 201.37500000000014,
          velocity: 0.6377952755905512,
          duration: 0.7046875000000057
        },
        {
          name: "D5",
          midi: 74,
          time: 201.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "F#5",
          midi: 78,
          time: 202.12500000000014,
          velocity: 0.7086614173228346,
          duration: 0.6765624999999886
        },
        {
          name: "G5",
          midi: 79,
          time: 202.87500000000014,
          velocity: 0.6377952755905512,
          duration: 0.39375000000001137
        },
        {
          name: "D5",
          midi: 74,
          time: 203.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 203.25000000000014,
          velocity: 0.6692913385826772,
          duration: 0.75
        },
        {
          name: "D6",
          midi: 86,
          time: 203.62500000000014,
          velocity: 0.7322834645669292,
          duration: 1.1984375000000114
        },
        {
          name: "E5",
          midi: 76,
          time: 204.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 205.12500000000014,
          velocity: 0.5984251968503937,
          duration: 1.2125000000000057
        },
        {
          name: "E5",
          midi: 76,
          time: 206.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "D6",
          midi: 86,
          time: 206.62500000000014,
          velocity: 0.6141732283464567,
          duration: 0.546875
        },
        {
          name: "C6",
          midi: 84,
          time: 207.00000000000014,
          velocity: 0.5984251968503937,
          duration: 0.3765625000000057
        },
        {
          name: "B5",
          midi: 83,
          time: 207.37500000000014,
          velocity: 0.5590551181102362,
          duration: 0.84375
        },
        {
          name: "E5",
          midi: 76,
          time: 207.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 208.12500000000014,
          velocity: 0.6535433070866141,
          duration: 0.7296875000000114
        },
        {
          name: "G5",
          midi: 79,
          time: 208.87500000000014,
          velocity: 0.6535433070866141,
          duration: 0.3609375000000057
        },
        {
          name: "A5",
          midi: 81,
          time: 209.25000000000014,
          velocity: 0.7086614173228346,
          duration: 0.7765625000000114
        },
        {
          name: "E5",
          midi: 76,
          time: 209.62500000000014,
          velocity: 0.7086614173228346,
          duration: 0.75
        },
        {
          name: "C5",
          midi: 72,
          time: 210.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 211.12500000000014,
          velocity: 0.7086614173228346,
          duration: 1.1624999999999943
        },
        {
          name: "C5",
          midi: 72,
          time: 212.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "D6",
          midi: 86,
          time: 212.62500000000014,
          velocity: 0.6692913385826772,
          duration: 0.549999999999983
        },
        {
          name: "C6",
          midi: 84,
          time: 213.00000000000014,
          velocity: 0.6220472440944882,
          duration: 0.39375000000001137
        },
        {
          name: "B5",
          midi: 83,
          time: 213.37500000000014,
          velocity: 0.6062992125984252,
          duration: 0.8296875000000057
        },
        {
          name: "D5",
          midi: 74,
          time: 213.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 214.12500000000014,
          velocity: 0.6692913385826772,
          duration: 0.7906250000000057
        },
        {
          name: "G5",
          midi: 79,
          time: 214.87500000000014,
          velocity: 0.6771653543307087,
          duration: 0.40937500000001137
        },
        {
          name: "D5",
          midi: 74,
          time: 215.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 215.25000000000014,
          velocity: 0.6456692913385826,
          duration: 1.125
        },
        {
          name: "E6",
          midi: 88,
          time: 215.62500000000014,
          velocity: 0.7086614173228346,
          duration: 1.1765624999999886
        },
        {
          name: "E5",
          midi: 76,
          time: 216.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 217.12500000000014,
          velocity: 0.6692913385826772,
          duration: 1.5593749999999886
        },
        {
          name: "E5",
          midi: 76,
          time: 218.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 218.62500000000014,
          velocity: 0.6299212598425197,
          duration: 0.3921875000000057
        },
        {
          name: "G5",
          midi: 79,
          time: 219.00000000000014,
          velocity: 0.6299212598425197,
          duration: 0.4296875
        },
        {
          name: "A5",
          midi: 81,
          time: 219.37500000000014,
          velocity: 0.5905511811023622,
          duration: 0.7765625000000114
        },
        {
          name: "E5",
          midi: 76,
          time: 219.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 220.12500000000014,
          velocity: 0.5275590551181102,
          duration: 0.7828125000000057
        },
        {
          name: "G5",
          midi: 79,
          time: 220.87500000000014,
          velocity: 0.6299212598425197,
          duration: 0.453125
        },
        {
          name: "E5",
          midi: 76,
          time: 221.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 221.25000000000014,
          velocity: 0.6692913385826772,
          duration: 1.6781249999999943
        },
        {
          name: "D6",
          midi: 86,
          time: 221.62500000000014,
          velocity: 0.6771653543307087,
          duration: 1.5296874999999943
        },
        {
          name: "F#5",
          midi: 78,
          time: 222.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 223.12500000000014,
          velocity: 0.6535433070866141,
          duration: 1.3953124999999886
        },
        {
          name: "F#5",
          midi: 78,
          time: 224.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "D6",
          midi: 86,
          time: 224.62500000000014,
          velocity: 0.6141732283464567,
          duration: 0.390625
        },
        {
          name: "C6",
          midi: 84,
          time: 225.00000000000014,
          velocity: 0.6220472440944882,
          duration: 0.390625
        },
        {
          name: "B5",
          midi: 83,
          time: 225.37500000000014,
          velocity: 0.6929133858267716,
          duration: 0.5265625000000114
        },
        {
          name: "F#5",
          midi: 78,
          time: 225.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 226.12500000000014,
          velocity: 0.7086614173228346,
          duration: 0.6500000000000057
        },
        {
          name: "G5",
          midi: 79,
          time: 226.87500000000014,
          velocity: 0.6220472440944882,
          duration: 0.515625
        },
        {
          name: "F#5",
          midi: 78,
          time: 227.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 227.25000000000014,
          velocity: 0.6929133858267716,
          duration: 1.5828124999999886
        },
        {
          name: "D6",
          midi: 86,
          time: 227.62500000000014,
          velocity: 0.7716535433070866,
          duration: 1.1531249999999886
        },
        {
          name: "G5",
          midi: 79,
          time: 228.75000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "B5",
          midi: 83,
          time: 229.12500000000014,
          velocity: 0.7322834645669292,
          duration: 1.1734375000000057
        },
        {
          name: "F#5",
          midi: 78,
          time: 230.25000000000014,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "A5",
          midi: 81,
          time: 230.25000000000014,
          velocity: 0.7637795275590551,
          duration: 0.33125000000001137
        },
        {
          name: "E6",
          midi: 88,
          time: 230.62500000000014,
          velocity: 0.6614173228346457,
          duration: 0.729687499999983
        },
        {
          name: "B5",
          midi: 83,
          time: 231.3750000000001,
          velocity: 0.7086614173228346,
          duration: 0.7015624999999943
        },
        {
          name: "F#5",
          midi: 78,
          time: 231.7500000000001,
          velocity: 0.5590551181102362,
          duration: 0.75
        },
        {
          name: "E7",
          midi: 81,
          time: 232.1250000000001,
          velocity: 0.8110236220472441,
          duration: 0.6468749999999943
        },
        {
          name: "G5",
          midi: 79,
          time: 232.8750000000001,
          velocity: 0.6929133858267716,
          duration: 2.90625
        },
        {
          name: "F#5",
          midi: 78,
          time: 233.2500000000001,
          velocity: 0.8110236220472441,
          duration: 2.7312499999999886
        },
        {
          name: "D7",
          midi: 76,
          time: 233.6250000000001,
          velocity: 0.7952755905511811,
          duration: 2.1859374999999943
        },
        {
          name: "E4",
          midi: 64,
          time: 237.5781250000001,
          velocity: 0.41732283464566927,
          duration: 0
        }
      ],
      controlChanges: {
        "64": [
          {
            number: 64,
            time: 0,
            value: 1
          },
          {
            number: 64,
            time: 0.09687500000000002,
            value: 0
          },
          {
            number: 64,
            time: 0.28437500000000004,
            value: 1
          },
          {
            number: 64,
            time: 6,
            value: 0
          },
          {
            number: 64,
            time: 6,
            value: 1
          },
          {
            number: 64,
            time: 6.096875,
            value: 0
          },
          {
            number: 64,
            time: 6.284375,
            value: 1
          },
          {
            number: 64,
            time: 12,
            value: 0
          },
          {
            number: 64,
            time: 12,
            value: 1
          },
          {
            number: 64,
            time: 12.096875,
            value: 0
          },
          {
            number: 64,
            time: 12.284375,
            value: 1
          },
          {
            number: 64,
            time: 18,
            value: 0
          },
          {
            number: 64,
            time: 18,
            value: 1
          },
          {
            number: 64,
            time: 18.096875,
            value: 0
          },
          {
            number: 64,
            time: 18.284375,
            value: 1
          },
          {
            number: 64,
            time: 21.067187500000003,
            value: 1
          },
          {
            number: 64,
            time: 21.084375,
            value: 0
          },
          {
            number: 64,
            time: 21.19375,
            value: 1
          },
          {
            number: 64,
            time: 24,
            value: 0
          },
          {
            number: 64,
            time: 24,
            value: 1
          },
          {
            number: 64,
            time: 24.096875,
            value: 0
          },
          {
            number: 64,
            time: 24.284375,
            value: 1
          },
          {
            number: 64,
            time: 30,
            value: 0
          },
          {
            number: 64,
            time: 30,
            value: 1
          },
          {
            number: 64,
            time: 30.096875,
            value: 0
          },
          {
            number: 64,
            time: 30.284375,
            value: 1
          },
          {
            number: 64,
            time: 36,
            value: 0
          },
          {
            number: 64,
            time: 36,
            value: 1
          },
          {
            number: 64,
            time: 36.096875,
            value: 0
          },
          {
            number: 64,
            time: 36.284375,
            value: 1
          },
          {
            number: 64,
            time: 42,
            value: 0
          },
          {
            number: 64,
            time: 42,
            value: 1
          },
          {
            number: 64,
            time: 42.096875,
            value: 0
          },
          {
            number: 64,
            time: 42.284375,
            value: 1
          },
          {
            number: 64,
            time: 45.06718750000001,
            value: 1
          },
          {
            number: 64,
            time: 45.08437500000001,
            value: 0
          },
          {
            number: 64,
            time: 45.19375000000001,
            value: 1
          },
          {
            number: 64,
            time: 48.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 48.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 48.096875000000004,
            value: 0
          },
          {
            number: 64,
            time: 48.284375000000004,
            value: 1
          },
          {
            number: 64,
            time: 54.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 54.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 54.096875000000004,
            value: 0
          },
          {
            number: 64,
            time: 54.284375000000004,
            value: 1
          },
          {
            number: 64,
            time: 60.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 60.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 60.096875000000004,
            value: 0
          },
          {
            number: 64,
            time: 60.284375000000004,
            value: 1
          },
          {
            number: 64,
            time: 66,
            value: 0
          },
          {
            number: 64,
            time: 66,
            value: 1
          },
          {
            number: 64,
            time: 66.096875,
            value: 0
          },
          {
            number: 64,
            time: 66.284375,
            value: 1
          },
          {
            number: 64,
            time: 69.0671875,
            value: 1
          },
          {
            number: 64,
            time: 69.08437500000001,
            value: 0
          },
          {
            number: 64,
            time: 69.19375000000001,
            value: 1
          },
          {
            number: 64,
            time: 72.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 72.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 72.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 72.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 78.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 78.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 78.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 78.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 84,
            value: 0
          },
          {
            number: 64,
            time: 84,
            value: 1
          },
          {
            number: 64,
            time: 84.096875,
            value: 0
          },
          {
            number: 64,
            time: 84.284375,
            value: 1
          },
          {
            number: 64,
            time: 87.03906250000001,
            value: 1
          },
          {
            number: 64,
            time: 87.10781250000001,
            value: 0
          },
          {
            number: 64,
            time: 87.20312500000001,
            value: 1
          },
          {
            number: 64,
            time: 90.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 90.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 90.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 90.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 93.0671875,
            value: 1
          },
          {
            number: 64,
            time: 93.08437500000001,
            value: 0
          },
          {
            number: 64,
            time: 93.19375000000001,
            value: 1
          },
          {
            number: 64,
            time: 95.06093750000001,
            value: 1
          },
          {
            number: 64,
            time: 95.06250000000001,
            value: 0
          },
          {
            number: 64,
            time: 95.06250000000001,
            value: 1
          },
          {
            number: 64,
            time: 96.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 96.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 96.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 96.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 102.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 102.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 102.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 102.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 108,
            value: 0
          },
          {
            number: 64,
            time: 108,
            value: 1
          },
          {
            number: 64,
            time: 108.096875,
            value: 0
          },
          {
            number: 64,
            time: 108.284375,
            value: 1
          },
          {
            number: 64,
            time: 113.99999999999999,
            value: 0
          },
          {
            number: 64,
            time: 113.99999999999999,
            value: 1
          },
          {
            number: 64,
            time: 114.09687499999998,
            value: 0
          },
          {
            number: 64,
            time: 114.28437499999998,
            value: 1
          },
          {
            number: 64,
            time: 117.06718749999999,
            value: 1
          },
          {
            number: 64,
            time: 117.084375,
            value: 0
          },
          {
            number: 64,
            time: 117.19375,
            value: 1
          },
          {
            number: 64,
            time: 120.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 120.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 120.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 120.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 126.00000000000001,
            value: 0
          },
          {
            number: 64,
            time: 126.00000000000001,
            value: 1
          },
          {
            number: 64,
            time: 126.09687500000001,
            value: 0
          },
          {
            number: 64,
            time: 126.28437500000001,
            value: 1
          },
          {
            number: 64,
            time: 132.00000000000003,
            value: 0
          },
          {
            number: 64,
            time: 132.00000000000003,
            value: 1
          },
          {
            number: 64,
            time: 132.09687500000004,
            value: 0
          },
          {
            number: 64,
            time: 132.28437500000004,
            value: 1
          },
          {
            number: 64,
            time: 138.00000000000006,
            value: 0
          },
          {
            number: 64,
            time: 138.00000000000006,
            value: 1
          },
          {
            number: 64,
            time: 138.09687500000007,
            value: 0
          },
          {
            number: 64,
            time: 138.28437500000007,
            value: 1
          },
          {
            number: 64,
            time: 141.06718750000007,
            value: 1
          },
          {
            number: 64,
            time: 141.08437500000008,
            value: 0
          },
          {
            number: 64,
            time: 141.19375000000008,
            value: 1
          },
          {
            number: 64,
            time: 144.00000000000009,
            value: 0
          },
          {
            number: 64,
            time: 144.00000000000009,
            value: 1
          },
          {
            number: 64,
            time: 144.0968750000001,
            value: 0
          },
          {
            number: 64,
            time: 144.2843750000001,
            value: 1
          },
          {
            number: 64,
            time: 150.00000000000009,
            value: 0
          },
          {
            number: 64,
            time: 150.00000000000009,
            value: 1
          },
          {
            number: 64,
            time: 150.0968750000001,
            value: 0
          },
          {
            number: 64,
            time: 150.2843750000001,
            value: 1
          },
          {
            number: 64,
            time: 156.0000000000001,
            value: 0
          },
          {
            number: 64,
            time: 156.0000000000001,
            value: 1
          },
          {
            number: 64,
            time: 156.09687500000013,
            value: 0
          },
          {
            number: 64,
            time: 156.28437500000013,
            value: 1
          },
          {
            number: 64,
            time: 162.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 162.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 162.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 162.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 164.38750000000013,
            value: 1
          },
          {
            number: 64,
            time: 168.0000000000001,
            value: 0
          },
          {
            number: 64,
            time: 168.0000000000001,
            value: 1
          },
          {
            number: 64,
            time: 168.09687500000013,
            value: 0
          },
          {
            number: 64,
            time: 168.28437500000013,
            value: 1
          },
          {
            number: 64,
            time: 174.0000000000001,
            value: 0
          },
          {
            number: 64,
            time: 174.0000000000001,
            value: 1
          },
          {
            number: 64,
            time: 174.09687500000013,
            value: 0
          },
          {
            number: 64,
            time: 174.28437500000013,
            value: 1
          },
          {
            number: 64,
            time: 180.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 180.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 180.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 180.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 186.00000000000017,
            value: 0
          },
          {
            number: 64,
            time: 186.00000000000017,
            value: 1
          },
          {
            number: 64,
            time: 186.09687500000018,
            value: 0
          },
          {
            number: 64,
            time: 186.28437500000018,
            value: 1
          },
          {
            number: 64,
            time: 189.06718750000013,
            value: 1
          },
          {
            number: 64,
            time: 189.08437500000014,
            value: 0
          },
          {
            number: 64,
            time: 189.19375000000014,
            value: 1
          },
          {
            number: 64,
            time: 192.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 192.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 192.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 192.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 198.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 198.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 198.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 198.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 204.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 204.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 204.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 204.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 209.99843750000014,
            value: 1
          },
          {
            number: 64,
            time: 210.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 210.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 210.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 210.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 213.06718750000013,
            value: 1
          },
          {
            number: 64,
            time: 213.08437500000014,
            value: 0
          },
          {
            number: 64,
            time: 213.19375000000014,
            value: 1
          },
          {
            number: 64,
            time: 216.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 216.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 216.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 216.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 222.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 222.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 222.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 222.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 227.99843750000014,
            value: 1
          },
          {
            number: 64,
            time: 228.00000000000014,
            value: 0
          },
          {
            number: 64,
            time: 228.00000000000014,
            value: 1
          },
          {
            number: 64,
            time: 228.09687500000015,
            value: 0
          },
          {
            number: 64,
            time: 228.28437500000015,
            value: 1
          },
          {
            number: 64,
            time: 231.06718750000013,
            value: 1
          },
          {
            number: 64,
            time: 231.08437500000014,
            value: 0
          },
          {
            number: 64,
            time: 231.19375000000014,
            value: 1
          },
          {
            number: 64,
            time: 234.0000000000001,
            value: 0
          }
        ]
      },
      id: 0,
      name: "RightHand",
      channelNumber: 0,
      isPercussion: false
    }
  ]
}

// To change manual/alternating
// 1-49 Manual Channel 1
// 50-99 Alternating
// 100-127 manual Channel 2
const instruments = {
  drums: {
    kick: ["C0"],
    snare: ["C1"],
    hihat: ["C2"],
    cymbal: ["C3"],
  },
  bass: {
    E: [
      "E-1",
      "F-1",
      "F#-1",
      "G-1",
      "G#-1",
      "A-1",
      "A#-1",
      "B-1",
      "C0",
      "C#0",
      "D0",
      "D#0",
      "E0",
      "F0",
      "F#0",
      "G0",
      "G#0",
      "A0",
      "A#0",
      "B0",
      "C1",
      "C#1"
    ],
    A: [
      "A1",
      "A#1",
      "B1",
      "C2",
      "C#2",
      "D2",
      "D#2",
      "E2",
      "F2",
      "F#2",
      "G2",
      "G#2",
      "A2",
      "A#2",
      "B2",
      "C3",
      "C#3",
      "D3",
      "D#3",
      "E3",
      "F3",
      "F#3",
      "G3",
      "G#3"
    ],
    D: [
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4",
      "C5",
      "C#5",
      "D5",
      "D#5",
      "E5",
      "F5",
      "F#5",
      "G5",
      "G#5",
      "A5",
      "A#5",
      "B5"
    ],
    G: [
      "G6",
      "G#6",
      "A6",
      "A#6",
      "B6",
      "C7",
      "C#7",
      "D7",
      "D#7",
      "E7",
      "F7",
      "F#7",
      "G7",
      "G#7",
      "A7",
      "A#7",
      "B7",
      "C8",
      "C#8",
      "D8",
      "D#8",
      "E8"
    ]
  },
  // To be changed later, E-minor is here as an example
  vibraphone: {
    bars: [
        "B1",
        "C2",
        "D2",
        "E2",
        "F#2",
        "G2",
        "A2",
        "B2",
        "C3",
        "D3",
        "E3"
      ]
  }
};

const notes = {
  vibraphone: midi.tracks[0].notes,
  bass: midi.tracks[0].notes,
  drums: midi.tracks[0].notes
};

class App extends Component {
  render() {
    return <NewNoteGrid instruments={instruments} notes={notes} />;
  }
}

export default App;
