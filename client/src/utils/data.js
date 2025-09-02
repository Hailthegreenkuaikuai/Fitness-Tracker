import {
  FitnessCenterRounded,
  MovingRounded,
  CalendarMonthRounded,
  PieChartRounded,
} from "@mui/icons-material";

export const data = {
  "SBD": 200.05,            
  "totalWorkouts": 100,   
  "totalDay": 100,     
  "weekVolume": {
    "weeks": ['Chest', 6, 7, 8, 9],
    "bodyPart": [20, 30, 25, 15, 10]
  },
  "pieChartData": [
    {id: 0, label: "Chest", value: 30, color: "#FF6384"},
    {id: 1, label: "Back", value: 25, color: "#36A2EB"},
    {id: 2, label: "Legs", value: 20, color: "#FFCE56"},
    {id: 3, label: "Shoulders", value: 15, color  : "#4BC0C0"},
    {id: 4, label: "Arms", value: 10, color : "#9966FF"},
    {id: 5, label: "ABS", value: 10, color : "#996699"},
  ],
};

export const counts = [
  {
    name: "SBD Total",
    icon: (
      <MovingRounded sx={{ color: "inherit", fontSize: "26px" }} />
    ),
    desc: "SBD Total",
    key: "SBD",
    unit: "kg",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
  },
  {
    name: "Total Workouts",
    icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Total Workouts",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
  },
  {
    name: "Total Day",
    icon: <CalendarMonthRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Since Day one",
    key: "totalDay",
    unit: "day",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
  },
];


