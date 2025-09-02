import Exercise from "../models/Exercise.js";
import Workout from "../models/Workout.js";

export function insertExercises() {
    const Chest = "Chest";
    const Triceps = "Triceps";
    const FrontDelts = "Front Delts";
    const SideDelts = "Side Delts";
    const RearDelts = "Rear Delts";
    const Quadriceps = "Quadriceps";
    const Glutes = "Glutes";
    const Hamstrings = "Hamstrings";
    const Biceps = "Biceps";
    const Lats = "Lats";
    const Traps = "Traps";
    const ABS = "Abs";

    Exercise.insertMany([
        {
            user: "685bce0da745018d420d8a36",
            name: "Bench Press",
            bodypart: [Chest, Triceps, FrontDelts],
            recorded: true,
            personalRecord: {
                weight: [85.5, 87],
                time: [new Date(2025, 5, 26), new Date(2025, 6, 23)],
            }
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Squat",
            bodypart: [Quadriceps, Glutes],
            recorded: true,
            personalRecord: {
                weight: [135, 135],
                time: [new Date(2025, 5, 26), new Date(2025, 6, 23)]
            },
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Deadlift",
            bodypart: [Hamstrings, Glutes],
            recorded: true,
            personalRecord: {
                weight: [155, 160],
                time: [new Date(2025, 5, 26), new Date(2025, 6, 23)]
            },
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Overhead Press",
            bodypart: [Triceps, FrontDelts],
            recorded: true,
            personalRecord: {
                weight: [56, 56],
                time: [new Date(2025, 5, 26), new Date(2025, 6, 23)]
            },
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Dips",
            bodypart: [Triceps, FrontDelts, Chest]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Pull Ups",
            bodypart: [Biceps, Lats]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Shrugs",
            bodypart: [Traps],
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Leg Extension",
            bodypart: [Quadriceps],
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Single Hand Row",
            bodypart: [Lats],
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Mid Row",
            bodypart: [Traps],
        },

        { 
            user: "685bce0da745018d420d8a36",
            name: "Face Pulls",
            bodypart: [RearDelts, Traps]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Leg Raise",
            bodypart: [ABS]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Leg Curl",
            bodypart: [Hamstrings]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Overhead Extension",
            bodypart: [Triceps]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Single Hand Preacher Curl",
            bodypart: [Biceps]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Close Grip Bench Press",
            bodypart: [Triceps]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Incline Bench Press",
            bodypart: [Chest, FrontDelts, Triceps]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Lateral Fly",
            bodypart: [SideDelts]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Front Squat",
            bodypart: [Quadriceps, Glutes]
        },

        {
            user: "685bce0da745018d420d8a36",
            name: "Larsen Press",
            bodypart: [Chest, Triceps, FrontDelts]
        }
    ])
}

export function insertWorkouts(){
    Workout.insertMany([
       {
            user: "685bce0da745018d420d8a36",
            session: "Leg Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dbe94c622a975b0c4c", // Squat ID
                        sets: [
                            { weight: 100, reps: 10 },
                            { weight: 110, reps: 8 }
                        ],
                    },
                },

                {
                    Exercise: {
                        id: "686257dbe94c622a975b0c4d", // Bench Press ID
                        sets: [
                            { weight: 80, reps: 10 },
                            { weight: 85, reps: 8 }
                        ]
                    }
                },

                {
                    Exercise: {
                        id: "686257dbe94c622a975b0c4e", // Deadlift ID
                        sets: [
                            { weight: 150, reps: 8 },
                            { weight: 160, reps: 6 }
                        ]
                    }
                }
            ],
            date: new Date("2025-06-30")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Upper Body",
            exercise: [
                {
                    Exercise: {
                        id: "686257dbe94c622a975b0c4d", // Bench Press ID
                        sets: [
                            { weight: 80, reps: 10 },
                            { weight: 85, reps: 8 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-01")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Full Body",
            exercise: [
                {
                    Exercise: {
                        id: "686257dbe94c622a975b0c4e", // Deadlift ID
                        sets: [
                            { weight: 150, reps: 8 },
                            { weight: 160, reps: 6 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-02")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Cardio",
            exercise: [
                {
                    Exercise: {
                        id: "686257dbe94c622a975b0c4f", // Running ID
                        sets: [
                            { weight: 0, reps: 30 } // 30 minutes
                        ]
                    }
                }
            ],
            date: new Date("2025-07-03")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Core Workout",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c50", // Plank ID
                        sets: [
                            { weight: 0, reps: 1 } // 1 minute
                        ]
                    }
                }
            ],
            date: new Date("2025-07-04")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Shoulder Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c51", // Shoulder Press ID
                        sets: [
                            { weight: 30, reps: 12 },
                            { weight: 35, reps: 10 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-05")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Back Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c52", // Bent Over Row ID
                        sets: [
                            { weight: 60, reps: 10 },
                            { weight: 70, reps: 8 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-06")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Leg Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c53", // Leg Curl ID
                        sets: [
                            { weight: 50, reps: 10 },
                            { weight: 60, reps: 8 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-07")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Chest Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c54", // Incline Bench Press ID
                        sets: [
                            { weight: 70, reps: 10 },
                            { weight: 75, reps: 8 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-08")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Mixed Workout",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c55", // Rowing Machine ID
                        sets: [
                            { weight: 0, reps: 20 } // 20 minutes
                        ]
                    }
                }
            ],
            date: new Date("2025-07-09")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Leg Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c56", // Calf Raise ID
                        sets: [
                            { weight: 70, reps: 15 },
                            { weight: 80, reps: 12 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-10")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Upper Body",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c57", // Pull Up ID
                        sets: [
                            { weight: 0, reps: 8 },
                            { weight: 5, reps: 6 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-11")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Core Workout",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c58", // Sit Up ID
                        sets: [
                            { weight: 0, reps: 20 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-12")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Cardio",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c59", // Cycling ID
                        sets: [
                            { weight: 0, reps: 30 } // 30 minutes
                        ]
                    }
                }
            ],
            date: new Date("2025-07-13")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Leg Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c5a", // Leg Press ID
                        sets: [
                            { weight: 200, reps: 10 },
                            { weight: 220, reps: 8 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-01")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Shoulder Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c5b", // Lateral Raise ID
                        sets: [
                            { weight: 10, reps: 15 },
                            { weight: 12, reps: 12 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-02")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Back Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c5c", // Lat Pulldown ID
                        sets: [
                            { weight: 50, reps: 12 },
                            { weight: 55, reps: 10 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-03")
        },
        {
            user: "685bce0da745018d420d8a36",
            session: "Chest Day",
            exercise: [
                {
                    Exercise: {
                        id: "686257dce94c622a975b0c5d", // Chest Fly ID
                        sets: [
                            { weight: 20, reps: 12 },
                            { weight: 25, reps: 10 }
                        ]
                    }
                }
            ],
            date: new Date("2025-07-04")
        }
    ])

}

export default { insertExercises, insertWorkouts };