const passagesData = [
  {
    title: "The SS Edmund Fitzgerald",
    image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRZ_Tbp_odx8aa-XnwVDm-7peTkQkqdnDpHuzZ01ZO74n4jzsTMx1bdyPOFSoQra3JsTgh7N332O4UtMQY",
    text: "Launched in 1958, the SS Edmund Fitzgerald was once the largest vessel sailing the Great Lakes. On November 9, 1975, under the command of Captain Ernest M. McSorley, the freighter departed Superior, Wisconsin, bound for Detroit with 26,116 tons of iron ore. As it traveled across Lake Superior, it encountered hurricane-force winds up to 75 mph and 35-foot waves. The ship vanished from radar screens 17 miles from Whitefish Point without sending a distress signal. All 29 crew members perished.",
    questions: [
      {
        type: "mc",
        question: "Main Idea: What is the primary focus of this passage?",
        options: [
          "How iron ore is mined in Superior",
          "The history and loss of the SS Edmund Fitzgerald",
          "The biography of Captain Ernest McSorley",
          "How radar technology operates on lakes"
        ],
        correct: 1
      },
      {
        type: "mc",
        question: "Detail: How many tons of taconite iron ore was the vessel carrying?",
        options: ["10,000 tons", "17,000 tons", "26,116 tons", "35,000 tons"],
        correct: 2
      },
      {
        type: "text",
        question: "Write-in: Name the captain who commanded the Edmund Fitzgerald.",
        accepted: ["McSorley", "Ernest McSorley", "Captain McSorley"],
        sampleAnswer: "Captain Ernest M. McSorley"
      },
      {
        type: "mc",
        question: "Inference: Why did the lack of distress signal suggest a rapid sinking?",
        options: [
          "The captain chose not to use the radio",
          "The event happened so quickly that crew members had no time to send a signal",
          "All radios were shut off during storms",
          "The ship was close enough to shore to yell for help"
        ],
        correct: 1
      }
    ]
  },
  {
    title: "The SS Carl D. Bradley",
    image: "https://www.indepthmag.com/wp-content/uploads/2024/08/BradleyPortrait1.webp",
    text: "On November 18, 1958, the SS Carl D. Bradley snapped in two during a gale on Lake Michigan while returning from Gary, Indiana. The hull succumbed to severe wave stress and structural fatigue. Of the 35 crewmen aboard, only two survived by floating on a raft for over 15 hours near Gull Island.",
    questions: [
      {
        type: "mc",
        question: "Main Idea: What main event is described in the text?",
        options: [
          "The limestone mining operations in Gary",
          "The structural failure and sinking of the Carl D. Bradley",
          "The geography of Gull Island",
          "A history of Lake Michigan ports"
        ],
        correct: 1
      },
      {
        type: "mc",
        question: "Detail: How many survivors lived through the sinking?",
        options: ["35", "15", "2", "0"],
        correct: 2
      },
      {
        type: "text",
        question: "Write-in: What town in Michigan suffered heavy crew losses from this tragedy?",
        accepted: ["Rogers City", "Rogers"],
        sampleAnswer: "Rogers City, Michigan"
      }
    ]
  }
];
