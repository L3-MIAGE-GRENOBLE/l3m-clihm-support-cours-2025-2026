import * as zod from "zod";

export type Movies = readonly Movie[];

export interface Movie {
    readonly id: number;
    readonly title: string;
    readonly original_title: string;
    readonly original_language: string;
    readonly overview: string;
    readonly poster_path: string | null;
    readonly release_date: string;
}

// ZOD schema for Movie datatype
export const MovieSchema = zod.object({
    id: zod.number(),
    title: zod.string(),
    original_title: zod.string(),
    original_language: zod.string(),
    overview: zod.string(),
    poster_path: zod.string().nullable(),
    release_date: zod.string(),
});

// ZOD schema for Movies array
export const MoviesSchema = zod.array(MovieSchema);
