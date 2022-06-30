export interface Paramter {
    ParmName: string;
    ParmValue: any;
}

export interface Klantgegevens {
    Origin: string;
    Paramters: Paramter[];
}

export interface AdviceSignal {
    CreateDate: string;
    Title: string;
    Status: number;
    Klantgegevens: Klantgegevens;
    Description: string;
}

export interface Advice {
    ClientName: string;
    BsnFi: string;
    AdviceSignals: AdviceSignal[];
}


