import { Movies } from "./movie";
import * as zod from "zod";
import { MoviesSchema } from "./movie";

export interface MovieSearchResult {
    readonly page: number;
    readonly total_pages: number;
    readonly total_results: number;
    readonly results: Movies;
}

// ZOD schema for MovieSearchResult datatype
export const MovieSearchResultSchema = zod.object({
    page: zod.number(),
    total_pages: zod.number(),
    total_results: zod.number(),
    results: MoviesSchema,
});

export function parseMovieSearchResult(data: unknown): Promise<MovieSearchResult> {
    return MovieSearchResultSchema.parseAsync(data);
}
