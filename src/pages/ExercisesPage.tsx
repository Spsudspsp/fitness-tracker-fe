import {useEffect, useState} from "react";
import {type Exercise, getExercises} from "../api/exercises.ts";
import ExerciseComponent from "../components/Exercise.tsx";

export default function ExercisesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [error, setError] = useState('');

    useEffect(
        () => {
            async function loadExercises() {
                try {
                    const data = await getExercises();
                    setExercises(data);
                } catch {
                    setError('Failed to load exercises');
                } finally {
                    setIsLoading(false);
                }
            }

            void loadExercises();
        },
        []
    )

    if (isLoading) return <p>Loading</p>

    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>Exercises</h1>
            {
                exercises.map(
                    (exercise) => (
                        <ExerciseComponent key={exercise.id} exercise={exercise}/>
                    )
                )
            }
        </div>
    )
}