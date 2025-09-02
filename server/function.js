import Exercise from "./models/Exercise.js";
import Workout from "./models/Workout.js";

export function dateDiff(startTime){

    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();
    const currentMonth = currentTime.getMonth();
    const currentDay = currentTime.getDate();

    const startYear = startTime.getFullYear();
    const startMonth = startTime.getMonth();
    const startDate = startTime.getDate();

    const start = new Date(startYear, startMonth, startDate);
    const current = new Date(currentYear, currentMonth, currentDay);

    return Math.round((current - start) / (1000 * 60 * 60 * 24));
}

export async function SBDTotal(userID){
    const BenchPress = await Exercise.find({userID, name: "Bench Press"}, "personalRecord");
    const Deadlift = await Exercise.find({userID, name: "Deadlift"}, "personalRecord");
    const Squat = await Exercise.find({userID, name: "Squat"}, "personalRecord");
    
    const BenchPressValue = BenchPress[0].personalRecord.weight;
    const DeadliftValue = Deadlift[0].personalRecord.weight;
    const SquatValue = Squat[0].personalRecord.weight;

    const SBD = BenchPressValue[BenchPressValue.length - 1] + 
                DeadliftValue[DeadliftValue.length - 1] + 
                SquatValue[SquatValue.length - 1];
    return SBD;
}

export async function totalTrainingSessions(userID) {
    const totalWorkouts = await Workout.find({ user: userID }).countDocuments().exec();
    return totalWorkouts;
}

export async function totalSetofWeek(userID){
    const now = new Date();
    const [startOfWeek, endOfWeek] = getWeek(now); 
    const workout = await Workout.find({
        user: userID,
        date: {
                $gte: startOfWeek,
                $lte: endOfWeek
            }
    }, "exercise");

    const totalBodypartSets = {
        "Chest": 0,
        "Triceps": 0,
        "Front Delts": 0,
        "Side Delts": 0,
        "Rear Delts": 0,
        "Quadriceps": 0,
        "Glutes": 0,
        "Hamstrings": 0,
        "Biceps": 0,
        "Lats": 0,
        "Traps": 0,
        "ABS": 0,
    }
    
    for(let i = 0; i < workout.length; i++){
        for(let j = 0; j < workout[i].exercise.length; j++){
            const id = workout[i].exercise[j].Exercise.id;
            const bodyparts = await Exercise.findById(id, "bodypart");
            bodyparts.bodypart.forEach(part => {
                totalBodypartSets[part]++;
            })
        }
    }
    return totalBodypartSets;
}

export async function weeklyVolume(userID) {
    const volumePerDay = {
        "Monday": 0,
        "Tuesday": 0,
        "Wednesday": 0,
        "Thursday": 0,
        "Friday": 0,
        "Saturday": 0,
        "Sunday": 0
    };

    const now = new Date();
    const [startOfWeek, endOfWeek] = getWeek(now); 

    console.log(startOfWeek);
}

function getWeek(date){
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - (date.getDay() === 0 ? 6 : date.getDay() - 1));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return [startOfWeek.toDateString(), endOfWeek.toDateString()];
}



export default { dateDiff, SBDTotal, totalSetofWeek, weeklyVolume };