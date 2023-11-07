import { GermanyDeathsDTOType, states } from 'src/types';
import { StateDeathsDTO } from './StateDeathsDTO';

export class GermanyDeathsDTO implements GermanyDeathsDTOType {
  public 'Bayern': StateDeathsDTO;
  public 'Berlin': StateDeathsDTO;
  public 'Brandenburg': StateDeathsDTO;
  public 'Bremen': StateDeathsDTO;
  public 'Hamburg': StateDeathsDTO;
  public 'Hessen': StateDeathsDTO;
  public 'Niedersachsen': StateDeathsDTO;
  public 'Saarland': StateDeathsDTO;
  public 'Sachsen': StateDeathsDTO;
  public 'Thüringen': StateDeathsDTO;
  public 'Nordrhein-Westfalen': StateDeathsDTO;
  public 'Schleswig-Holstein': StateDeathsDTO;
  public 'Rheinland-Pfalz': StateDeathsDTO;
  public 'Baden-Württemberg': StateDeathsDTO;
  public 'Sachsen-Anhalt': StateDeathsDTO;
  public 'Mecklenburg-Vorpommern': StateDeathsDTO;

  constructor(data: Record<keyof typeof states, StateDeathsDTO>) {
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
