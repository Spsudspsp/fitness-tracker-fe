import { type Exercise } from '../api/exercises.ts'

interface ExerciseComponentProps {
    exercise: Exercise
}

export default function ExerciseComponent (props: ExerciseComponentProps) {
    return (
        <div>
            <h2>{props.exercise.name}</h2>
            <p>{props.exercise.description}</p>
            <p>Muscle groups: {props.exercise.muscle_groups.join(', ')}</p>
            <p>Equipment: {props.exercise.equipment.join(', ')}</p>
        </div>
    )
}