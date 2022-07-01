export interface ParamterData {
  ParmName: string;
  ParmValue: string;
}

export interface KlantgegevensData {
  Origin: string;
  Paramters: ParamterData[];
}

export interface AdviceSignalData {
  CreateDate: string;
  Title: string;
  Status: number;
  Klantgegevens: KlantgegevensData;
  Description: string;
}

export interface AdviceData {
  ClientName: string;
  BsnFi: string;
  AdviceSignals: AdviceSignalData[];
}
