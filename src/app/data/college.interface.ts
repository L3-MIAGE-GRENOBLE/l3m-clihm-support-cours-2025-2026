import { DataCollege } from "./college.tuple";

export interface College {
    readonly rentree_scolaire: number;
    readonly denomination_principale: string;
    readonly patronyme: string;
    readonly secteur: "PUBLIC" | "PRIVE";
    readonly rep: boolean;
    readonly rep_plus: boolean;
    readonly nombre_eleves_total: number;
    readonly code_postal: string;
}

export function processCollegeFromTuple(tuple: DataCollege): College {
    return {
        rentree_scolaire: tuple[0],
        denomination_principale: tuple[1],
        patronyme: tuple[2],
        secteur: tuple[3],
        rep: tuple[4],
        rep_plus: tuple[5],
        nombre_eleves_total: tuple[6],
        code_postal: tuple[7]
    };
}