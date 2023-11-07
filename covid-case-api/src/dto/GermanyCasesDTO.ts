import { GermanyCasesDTOType, states } from 'src/types';
import { StateCasesDto } from './StateCasesDTO';

export class GermanyCasesDTO implements GermanyCasesDTOType {
  public 'Bayern': StateCasesDto;
  public 'Berlin': StateCasesDto;
  public 'Brandenburg': StateCasesDto;
  public 'Bremen': StateCasesDto;
  public 'Hamburg': StateCasesDto;
  public 'Hessen': StateCasesDto;
  public 'Niedersachsen': StateCasesDto;
  public 'Saarland': StateCasesDto;
  public 'Sachsen': StateCasesDto;
  public 'Thüringen': StateCasesDto;
  public 'Nordrhein-Westfalen': StateCasesDto;
  public 'Schleswig-Holstein': StateCasesDto;
  public 'Rheinland-Pfalz': StateCasesDto;
  public 'Baden-Württemberg': StateCasesDto;
  public 'Sachsen-Anhalt': StateCasesDto;
  public 'Mecklenburg-Vorpommern': StateCasesDto;

  constructor(data: Record<keyof typeof states, StateCasesDto>) {
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
