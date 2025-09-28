// exemple : 2020;GRENOBLE;ARDECHE;ANNONAY;COLLEGE PRIVE;SACRE COEUR;PRIVE;0;0;712;168;80;88;0;193;07100

export type DataCollege = [
    rentree_scolaire: number,
    denomination_principale: string,
    patronyme: string,
    secteur: "PUBLIC" | "PRIVE",
    rep: boolean,
    rep_plus: boolean,
    nombre_eleves_total: number,
    code_postal: string // ou number ?
]

export function processStringToDataCollege(str: string): DataCollege {
    const L = str.split(";");
    return [
        parseInt(L[0]),
        L[1],
        L[2],
        L[3] === "PUBLIC" ? "PUBLIC" : "PRIVE",
        L[4] === "1",
        L[5] === "1",
        parseInt(L[6]),
        L[6]
    ]
}