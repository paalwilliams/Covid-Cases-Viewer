import { GermanyLatestDeathsDTOType, states } from 'src/types';
import { LatestStateDeathsDTO } from './LatestStateDeathsDTO';

export class LatestGermanyDeathsDTO implements GermanyLatestDeathsDTOType {
  public Bayern: LatestStateDeathsDTO;
  public 'Berlin': LatestStateDeathsDTO;
  public 'Brandenburg': LatestStateDeathsDTO;
  public 'Bremen': LatestStateDeathsDTO;
  public 'Hamburg': LatestStateDeathsDTO;
  public 'Hessen': LatestStateDeathsDTO;
  public 'Niedersachsen': LatestStateDeathsDTO;
  public 'Saarland': LatestStateDeathsDTO;
  public 'Sachsen': LatestStateDeathsDTO;
  public 'Thüringen': LatestStateDeathsDTO;
  public 'Nordrhein-Westfalen': LatestStateDeathsDTO;
  public 'Schleswig-Holstein': LatestStateDeathsDTO;
  public 'Rheinland-Pfalz': LatestStateDeathsDTO;
  public 'Baden-Württemberg': LatestStateDeathsDTO;
  public 'Sachsen-Anhalt': LatestStateDeathsDTO;
  public 'Mecklenburg-Vorpommern': LatestStateDeathsDTO;
  constructor(data: Record<keyof typeof states, LatestStateDeathsDTO>) {
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
