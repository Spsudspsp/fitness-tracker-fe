import api from "./client.ts";

export interface Exercise {
    id: string;
    name: string;
    description: string;
    muscle_groups: string[];
    equipment: string[];
}

export async function getExercises(): Promise<Exercise[]> {
    const res = await api.get('/exercises/')
    return res.data
}
