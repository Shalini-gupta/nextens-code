import { map } from 'lodash';
import {
  AdviceData,
  AdviceSignalData,
  KlantgegevensData,
  ParamterData,
} from './advice.interface';
import { Advice, AdviceSignal, Klantgegevens, Paramter } from './advice.model';

export class AdviceMapper {
  static fromData(data: AdviceData): Advice {
    if (data) {
      return {
        clientName: data.ClientName,
        bsnFi: data.BsnFi,
        adviceSignals: data.AdviceSignals.map(
          AdviceMapper.fromAdviceSignalsData
        ),
      };
    } else {
      throw new Error(`'AdviceData' is required for the mapping`);
    }
  }

  static fromAdviceSignalsData(data: AdviceSignalData): AdviceSignal {
    if (data) {
      return {
        id: Math.floor(Math.random() * 100000),
        createDate: data.CreateDate,
        title: data.Title,
        status: data.Status,
        klantgegevens: AdviceMapper.fromKlantgegevensData(data.Klantgegevens),
        description: data.Description,
      };
    } else {
      throw new Error(`'AdviceSignalData' is required for the mapping`);
    }
  }

  static fromKlantgegevensData(data: KlantgegevensData): Klantgegevens {
    if (data) {
      return {
        origin: data.Origin,
        paramters: data.Paramters.map(AdviceMapper.fromParamterData),
      };
    } else {
      throw new Error(`'KlantgegevensData' is required for the mapping`);
    }
  }

  static fromParamterData(data: ParamterData): Paramter {
    if (data) {
      return {
        parmName: data.ParmName,
        parmValue: data.ParmValue,
      };
    } else {
      throw new Error(`'ParamterData' is required for the mapping`);
    }
  }
}
