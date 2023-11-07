import { GermanyLatestCasesDTOType, states } from 'src/types';
import { LatestStateCasesDTO } from './LatestStateCasesDTO';

export class LatestGermanyCasesDTO implements GermanyLatestCasesDTOType {
  public Bayern: LatestStateCasesDTO;
  public 'Berlin': LatestStateCasesDTO;
  public 'Brandenburg': LatestStateCasesDTO;
  public 'Bremen': LatestStateCasesDTO;
  public 'Hamburg': LatestStateCasesDTO;
  public 'Hessen': LatestStateCasesDTO;
  public 'Niedersachsen': LatestStateCasesDTO;
  public 'Saarland': LatestStateCasesDTO;
  public 'Sachsen': LatestStateCasesDTO;
  public 'Thüringen': LatestStateCasesDTO;
  public 'Nordrhein-Westfalen': LatestStateCasesDTO;
  public 'Schleswig-Holstein': LatestStateCasesDTO;
  public 'Rheinland-Pfalz': LatestStateCasesDTO;
  public 'Baden-Württemberg': LatestStateCasesDTO;
  public 'Sachsen-Anhalt': LatestStateCasesDTO;
  public 'Mecklenburg-Vorpommern': LatestStateCasesDTO;

  constructor(data: Record<keyof typeof states, LatestStateCasesDTO>) {
    this['Bayern'] = data.Bayern;
    this['Berlin'] = data.Berlin;
    this['Brandenburg'] = data.Brandenburg;
    this['Bremen'] = data.Bremen;
    this['Hamburg'] = data.Hamburg;
    this['Hessen'] = data.Hessen;
    this['Niedersachsen'] = data.Niedersachsen;
    this['Saarland'] = data.Saarland;
    this['Sachsen'] = data.Sachsen;
    this['Thüringen'] = data.Thüringen;
    this['Nordrhein-Westfalen'] = data['Nordrhein-Westfalen'];
    this['Schleswig-Holstein'] = data['Schleswig-Holstein'];
    this['Rheinland-Pfalz'] = data['Rheinland-Pfalz'];
    this['Baden-Württemberg'] = data['Baden-Württemberg'];
    this['Sachsen-Anhalt'] = data['Sachsen-Anhalt'];
    this['Mecklenburg-Vorpommern'] = data['Mecklenburg-Vorpommern'];
  }
}
