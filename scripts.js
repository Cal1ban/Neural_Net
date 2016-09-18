console.log("script loaded");

var myNet = new synaptic.Architect.Perceptron(2,5,1);

//data taken from past 12 years search data from Google (1-100, normalised to 0.0-1.0)

//input 1 = sony
//input 2 = samsung
//output is apple

var trainingSet = [

    {
      input: [0.47,0.16],
      output: [0.27]
    },
    {
      input: [0.4,0.14],
      output: [0.25]
    },
    {
      input: [0.39,0.14],
      output: [0.25]
    },
    {
      input: [0.38,0.14],
      output: [0.24]
    },
    {
      input: [0.41,0.14],
      output: [0.24]
    },
    {
      input: [0.44,0.17],
      output: [0.26]
    },
    {
      input: [0.44,0.18],
      output: [0.28]
    },
    {
      input: [0.43,0.19],
      output: [0.29]
    },
    {
      input: [0.4,0.15],
      output: [0.34]
    },
    {
      input: [0.39,0.15],
      output: [0.36]
    },
    {
      input: [0.47,0.16],
      output: [0.33]
    },
    {
      input: [0.53,0.17],
      output: [0.35]
    },
    {
      input: [0.42,0.15],
      output: [0.35]
    },
    {
      input: [0.38,0.13],
      output: [0.33]
    },
    {
      input: [0.42,0.13],
      output: [0.3]
    },
    {
      input: [0.37,0.13],
      output: [0.3]
    },
    {
      input: [0.39,0.14],
      output: [0.32]
    },
    {
      input: [0.39,0.16],
      output: [0.33]
    },
    {
      input: [0.38,0.16],
      output: [0.31]
    },
    {
      input: [0.37,0.15],
      output: [0.33]
    },
    {
      input: [0.34,0.14],
      output: [0.42]
    },
    {
      input: [0.35,0.15],
      output: [0.46]
    },
    {
      input: [0.43,0.17],
      output: [0.41]
    },
    {
      input: [0.48,0.18],
      output: [0.43]
    },
    {
      input: [0.37,0.16],
      output: [0.37]
    },
    {
      input: [0.33,0.15],
      output: [0.33]
    },
    {
      input: [0.31,0.14],
      output: [0.31]
    },
    {
      input: [0.31,0.13],
      output: [0.32]
    },
    {
      input: [0.32,0.14],
      output: [0.32]
    },
    {
      input: [0.33,0.16],
      output: [0.32]
    },
    {
      input: [0.33,0.16],
      output: [0.33]
    },
    {
      input: [0.33,0.16],
      output: [0.37]
    },
    {
      input: [0.31,0.16],
      output: [0.45]
    },
    {
      input: [0.32,0.16],
      output: [0.44]
    },
    {
      input: [0.4,0.19],
      output: [0.41]
    },
    {
      input: [0.43,0.22],
      output: [0.42]
    },
    {
      input: [0.33,0.18],
      output: [0.46]
    },
    {
      input: [0.29,0.16],
      output: [0.35]
    },
    {
      input: [0.29,0.15],
      output: [0.35]
    },
    {
      input: [0.27,0.15],
      output: [0.34]
    },
    {
      input: [0.28,0.16],
      output: [0.33]
    },
    {
      input: [0.3,0.18],
      output: [0.41]
    },
    {
      input: [0.3,0.18],
      output: [0.39]
    },
    {
      input: [0.28,0.17],
      output: [0.38]
    },
    {
      input: [0.28,0.16],
      output: [0.53]
    },
    {
      input: [0.28,0.16],
      output: [0.5]
    },
    {
      input: [0.36,0.2],
      output: [0.5]
    },
    {
      input: [0.4,0.21],
      output: [0.5]
    },
    {
      input: [0.32,0.18],
      output: [0.48]
    },
    {
      input: [0.29,0.16],
      output: [0.43]
    },
    {
      input: [0.28,0.15],
      output: [0.41]
    },
    {
      input: [0.26,0.15],
      output: [0.39]
    },
    {
      input: [0.27,0.17],
      output: [0.38]
    },
    {
      input: [0.28,0.2],
      output: [0.43]
    },
    {
      input: [0.29,0.2],
      output: [0.48]
    },
    {
      input: [0.28,0.18],
      output: [0.43]
    },
    {
      input: [0.26,0.17],
      output: [0.52]
    },
    {
      input: [0.25,0.17],
      output: [0.52]
    },
    {
      input: [0.33,0.27],
      output: [0.5]
    },
    {
      input: [0.39,0.29],
      output: [0.49]
    },
    {
      input: [0.3,0.23],
      output: [0.42]
    },
    {
      input: [0.27,0.21],
      output: [0.37]
    },
    {
      input: [0.25,0.21],
      output: [0.39]
    },
    {
      input: [0.24,0.21],
      output: [0.37]
    },
    {
      input: [0.25,0.22],
      output: [0.36]
    },
    {
      input: [0.26,0.22],
      output: [0.45]
    },
    {
      input: [0.25,0.22],
      output: [0.39]
    },
    {
      input: [0.25,0.23],
      output: [0.41]
    },
    {
      input: [0.24,0.22],
      output: [0.5]
    },
    {
      input: [0.24,0.22],
      output: [0.5]
    },
    {
      input: [0.31,0.27],
      output: [0.49]
    },
    {
      input: [0.34,0.29],
      output: [0.45]
    },
    {
      input: [0.26,0.24],
      output: [0.56]
    },
    {
      input: [0.23,0.22],
      output: [0.38]
    },
    {
      input: [0.24,0.22],
      output: [0.36]
    },
    {
      input: [0.22,0.22],
      output: [0.44]
    },
    {
      input: [0.23,0.22],
      output: [0.42]
    },
    {
      input: [0.24,0.24],
      output: [0.54]
    },
    {
      input: [0.22,0.29],
      output: [0.49]
    },
    {
      input: [0.23,0.31],
      output: [0.45]
    },
    {
      input: [0.21,0.32],
      output: [0.57]
    },
    {
      input: [0.21,0.29],
      output: [0.56]
    },
    {
      input: [0.26,0.34],
      output: [0.56]
    },
    {
      input: [0.29,0.35],
      output: [0.52]
    },
    {
      input: [0.22,0.28],
      output: [0.51]
    },
    {
      input: [0.19,0.26],
      output: [0.48]
    },
    {
      input: [0.18,0.24],
      output: [0.58]
    },
    {
      input: [0.19,0.23],
      output: [0.5]
    },
    {
      input: [0.19,0.26],
      output: [0.5]
    },
    {
      input: [0.18,0.28],
      output: [0.54]
    },
    {
      input: [0.16,0.29],
      output: [0.53]
    },
    {
      input: [0.16,0.28],
      output: [0.55]
    },
    {
      input: [0.16,0.28],
      output: [0.6]
    },
    {
      input: [0.16,0.3],
      output: [0.96]
    },
    {
      input: [0.2,0.34],
      output: [0.74]
    },
    {
      input: [0.21,0.35],
      output: [0.69]
    },
    {
      input: [0.16,0.28],
      output: [0.57]
    },
    {
      input: [0.15,0.28],
      output: [0.52]
    },
    {
      input: [0.15,0.27],
      output: [0.64]
    },
    {
      input: [0.13,0.26],
      output: [0.52]
    },
    {
      input: [0.14,0.28],
      output: [0.49]
    },
    {
      input: [0.14,0.33],
      output: [0.58]
    },
    {
      input: [0.14,0.35],
      output: [0.54]
    },
    {
      input: [0.13,0.37],
      output: [0.57]
    },
    {
      input: [0.13,0.4],
      output: [0.95]
    },
    {
      input: [0.12,0.37],
      output: [0.75]
    },
    {
      input: [0.15,0.46],
      output: [0.72]
    },
    {
      input: [0.16,0.44],
      output: [0.69]
    },
    {
      input: [0.13,0.34],
      output: [0.55]
    },
    {
      input: [0.13,0.32],
      output: [0.52]
    },
    {
      input: [0.13,0.37],
      output: [0.49]
    },
    {
      input: [0.11,0.33],
      output: [0.48]
    },
    {
      input: [0.11,0.35],
      output: [0.46]
    },
    {
      input: [0.13,0.36],
      output: [0.55]
    },
    {
      input: [0.12,0.37],
      output: [0.51]
    },
    {
      input: [0.12,0.36],
      output: [0.54]
    },
    {
      input: [0.11,0.37],
      output: [0.85]
    },
    {
      input: [0.11,0.36],
      output: [0.73]
    },
    {
      input: [0.14,0.42],
      output: [0.69]
    },
    {
      input: [0.15,0.46],
      output: [0.61]
    },
    {
      input: [0.13,0.35],
      output: [0.52]
    },
    {
      input: [0.12,0.35],
      output: [0.48]
    },
    {
      input: [0.13,0.36],
      output: [0.47]
    },
    {
      input: [0.11,0.35],
      output: [0.46]
    },
    {
      input: [0.11,0.34],
      output: [0.47]
    },
    {
      input: [0.12,0.36],
      output: [0.5]
    },
    {
      input: [0.11,0.37],
      output: [0.49]
    },
    {
      input: [0.12,0.38],
      output: [0.52]
    },
    {
      input: [0.11,0.42],
      output: [1]
    },
    {
      input: [0.11,0.35],
      output: [0.76]
    },
    {
      input: [0.13,0.42],
      output: [0.68]
    },
    {
      input: [0.25,0.44],
      output: [0.61]
    },
    {
      input: [0.13,0.36],
      output: [0.53]
    },
    {
      input: [0.11,0.35],
      output: [0.49]
    },
    {
      input: [0.11,0.38],
      output: [0.6]
    },
    {
      input: [0.1,0.36],
      output: [0.58]
    },
    {
      input: [0.11,0.34],
      output: [0.55]
    },
    {
      input: [0.11,0.36],
      output: [0.58]
    },
    {
      input: [0.1,0.34],
      output: [0.59]
    },
    {
      input: [0.1,0.34],
      output: [0.6]
    },
    {
      input: [0.09,0.32],
      output: [0.86]
    },
    {
      input: [0.09,0.32],
      output: [0.75]
    },
    {
      input: [0.12,0.43],
      output: [0.72]
    },
    {
      input: [0.12,0.44],
      output: [0.7]
    },
    {
      input: [0.1,0.35],
      output: [0.61]
    },
    {
      input: [0.1,0.36],
      output: [0.56]
    },
    {
      input: [0.09,0.38],
      output: [0.59]
    },
    {
      input: [0.09,0.35],
      output: [0.57]
    },
    {
      input: [0.09,0.34],
      output: [0.55]
    },
    {
      input: [0.1,0.35],
      output: [0.56]
    },
    {
      input: [0.09,0.38],
      output: [0.57]
    },
    {
      input: [0.08,0.39],
      output: [0.6]
    },
    {
      input: [0.09,0.42],
      output: [0.95]
    }
]

var trainingOptions = {
  rate: .1,
  iterations: 1000,
  error: .005,
  shuffle: true,
  log: 100
}

var seeNet = myNet.trainer.train(trainingSet, trainingOptions);

console.log("training");
