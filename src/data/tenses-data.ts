export const tensesData = {
  simplePresent: {
    id: "simple-present",
    title: "Simple Present Tense",
    description: "Used to express habits, general truths, and regular actions.",
    function: [
      "Kebiasaan (habits)",
      "Fakta umum (general facts)",
      "Jadwal tetap (timetables)",
      "Keadaan saat ini (present states)"
    ],
    formula: {
      positive: "Subject + Verb 1 (s/es untuk he/she/it)",
      negative: "Subject + do/does + not + Verb 1",
      interrogative: "Do/Does + Subject + Verb 1?"
    },
    examples: [
      { 
        sentence: "She plays the piano every day.",
        highlights: {
          subject: "She",
          verb: "plays",
          object: "the piano every day"
        },
        explanation: "Habit or regular action"
      },
      { 
        sentence: "The sun rises in the east.",
        highlights: {
          subject: "The sun",
          verb: "rises",
          object: "in the east"
        },
        explanation: "General fact or truth"
      },
      { 
        sentence: "I don't like coffee.",
        highlights: {
          subject: "I",
          verb: "don't like",
          object: "coffee"
        },
        explanation: "Negative statement about preference"
      },
      { 
        sentence: "Do you speak English?",
        highlights: {
          subject: "you",
          verb: "speak",
          object: "English"
        },
        explanation: "Question about ability"
      }
    ],
    timeMarkers: ["always", "every day", "usually", "often", "never", "sometimes"]
  },
  simplePast: {
    id: "simple-past",
    title: "Simple Past Tense",
    description: "Used to express completed actions in the past.",
    function: [
      "Kejadian yang terjadi dan selesai di masa lampau",
      "Diketahui waktu terjadinya (yesterday, last week, in 2020, dll)"
    ],
    formula: {
      positive: "Subject + Verb 2 (past form)",
      negative: "Subject + did not + Verb 1",
      interrogative: "Did + Subject + Verb 1?"
    },
    examples: [
      { 
        sentence: "I watched a movie last night.",
        highlights: {
          subject: "I",
          verb: "watched",
          object: "a movie last night"
        },
        explanation: "Completed action in the past"
      },
      { 
        sentence: "She didn't go to school yesterday.",
        highlights: {
          subject: "She",
          verb: "didn't go",
          object: "to school yesterday"
        },
        explanation: "Negative statement about past action"
      },
      { 
        sentence: "Did you see that?",
        highlights: {
          subject: "you",
          verb: "see",
          object: "that"
        },
        explanation: "Question about past observation"
      }
    ],
    timeMarkers: ["yesterday", "last night", "last week", "in 2001", "two days ago", "the other day"]
  },
  simpleFuture: {
    id: "simple-future",
    title: "Simple Future Tense",
    description: "Used to express actions that will happen in the future.",
    function: [
      "Rencana masa depan",
      "Prediksi",
      "Janji atau keputusan spontan"
    ],
    formula: {
      positive: "Subject + will + Verb 1",
      negative: "Subject + will not (won't) + Verb 1",
      interrogative: "Will + Subject + Verb 1?"
    },
    examples: [
      { 
        sentence: "I will call you tomorrow.",
        highlights: {
          subject: "I",
          verb: "will call",
          object: "you tomorrow"
        },
        explanation: "Promise or intention for future"
      },
      { 
        sentence: "He won't come to the party.",
        highlights: {
          subject: "He",
          verb: "won't come",
          object: "to the party"
        },
        explanation: "Negative statement about future action"
      },
      { 
        sentence: "Will they visit us next week?",
        highlights: {
          subject: "they",
          verb: "visit",
          object: "us next week"
        },
        explanation: "Question about future plans"
      }
    ],
    timeMarkers: ["tomorrow", "next week", "next month", "in the future", "in 2030", "later"]
  },
  presentContinuous: {
    id: "present-continuous",
    title: "Present Continuous Tense",
    description: "Used to express actions happening right now or temporary actions around the present time.",
    function: [
      "Menyatakan aksi yang sedang berlangsung saat ini (now)",
      "Rencana dekat di masa depan"
    ],
    formula: {
      positive: "Subject + am/is/are + Verb-ing",
      negative: "Subject + am/is/are + not + Verb-ing",
      interrogative: "Am/Is/Are + Subject + Verb-ing?"
    },
    examples: [
      { 
        sentence: "She is reading a book.",
        highlights: {
          subject: "She",
          verb: "is reading",
          object: "a book"
        },
        explanation: "Action happening right now"
      },
      { 
        sentence: "We are not watching TV.",
        highlights: {
          subject: "We",
          verb: "are not watching",
          object: "TV"
        },
        explanation: "Negative statement about current action"
      },
      { 
        sentence: "Are you studying now?",
        highlights: {
          subject: "you",
          verb: "studying",
          object: "now"
        },
        explanation: "Question about current activity"
      }
    ],
    timeMarkers: ["now", "at the moment", "right now", "currently", "at present"]
  },
  pastContinuous: {
    id: "past-continuous",
    title: "Past Continuous Tense",
    description: "Used to express actions that were happening at a specific time in the past.",
    function: [
      "Aksi yang sedang terjadi di waktu tertentu di masa lalu",
      "Dua aksi bersamaan di masa lalu",
      "Aksi berlangsung saat aksi lain terjadi"
    ],
    formula: {
      positive: "Subject + was/were + Verb-ing",
      negative: "Subject + was/were + not + Verb-ing",
      interrogative: "Was/Were + Subject + Verb-ing?"
    },
    examples: [
      { 
        sentence: "I was sleeping at 10 PM.",
        highlights: {
          subject: "I",
          verb: "was sleeping",
          object: "at 10 PM"
        },
        explanation: "Action in progress at a specific time in the past"
      },
      { 
        sentence: "They were not playing football.",
        highlights: {
          subject: "They",
          verb: "were not playing",
          object: "football"
        },
        explanation: "Negative statement about past ongoing action"
      },
      { 
        sentence: "Was she crying when you saw her?",
        highlights: {
          subject: "she",
          verb: "crying",
          object: "when you saw her"
        },
        explanation: "Question about past ongoing action"
      }
    ],
    timeMarkers: ["at 7 PM", "when you came", "last night at 9", "while", "during", "as"]
  }
};

export const tensesComparison = [
  {
    tense: "Simple Present",
    positiveFormula: "Subject + V1 (s/es)",
    negativeFormula: "Subject + do/does + not + V1",
    interrogativeFormula: "Do/Does + Subject + V1?",
    timeMarkers: "always, every day, usually, often"
  },
  {
    tense: "Simple Past",
    positiveFormula: "Subject + V2",
    negativeFormula: "Subject + did + not + V1",
    interrogativeFormula: "Did + Subject + V1?",
    timeMarkers: "yesterday, last night, in 2001"
  },
  {
    tense: "Simple Future",
    positiveFormula: "Subject + will + V1",
    negativeFormula: "Subject + will + not (won't) + V1",
    interrogativeFormula: "Will + Subject + V1?",
    timeMarkers: "tomorrow, next week, in the future"
  },
  {
    tense: "Present Continuous",
    positiveFormula: "Subject + am/is/are + V-ing",
    negativeFormula: "Subject + am/is/are + not + V-ing",
    interrogativeFormula: "Am/ Is/Are + Subject + V-ing?",
    timeMarkers: "now, at the moment, right now"
  },
  {
    tense: "Past Continuous",
    positiveFormula: "Subject + was/were + V-ing",
    negativeFormula: "Subject + was/were + not + V-ing",
    interrogativeFormula: "Was/Were + Subject + V-ing?",
    timeMarkers: "at 7 PM, when you came, last night at 9"
  }
];

export const learningObjectives = [
  {
    title: "Simple Present Tense",
    objectives: [
      "Students are able to identify the use of simple present tense in everyday sentences.",
      "Students are able to create positive, negative, and interrogative sentences using simple present tense to express habits and facts."
    ]
  },
  {
    title: "Simple Past Tense",
    objectives: [
      "Students are able to explain the function of simple past tense for events that happened in the past.",
      "Students are able to use the second verb form (verb 2) to form simple past sentences correctly."
    ]
  },
  {
    title: "Simple Future Tense",
    objectives: [
      "Students are able to mention the characteristics of simple future tense and its use for future plans.",
      "Students are able to make sentences with the pattern \"will + verb 1\" to express prediction or intention."
    ]
  },
  {
    title: "Continuous Tenses",
    objectives: [
      "Students are able to identify the difference between present continuous and past continuous tense.",
      "Students are able to construct sentences with Present and past continuous tense to express activities that are taking place at a certain time."
    ]
  }
];