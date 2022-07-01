export interface Paramter {
    parmName: string;
    parmValue: string;
}

export interface Klantgegevens {
    origin: string;
    paramters: Paramter[];
}

export interface AdviceSignal {
    id:number;
    createDate: string;
    title: string;
    status: number;
    klantgegevens: Klantgegevens;
    description: string;
}

export interface Advice {
    clientName: string;
    bsnFi: string;
    adviceSignals: AdviceSignal[];
}


