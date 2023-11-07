import { GermanyDeathsDTOType, states } from 'src/types';
import { StateDeathsDTO } from './StateDeathsDTO';
import { ApiProperty } from '@nestjs/swagger';

export class GermanyDeathsDTO implements GermanyDeathsDTOType {
  @ApiProperty()
  public 'Bayern': StateDeathsDTO;
  @ApiProperty()
  public 'Berlin': StateDeathsDTO;
  @ApiProperty()
  public 'Brandenburg': StateDeathsDTO;
  @ApiProperty()
  public 'Bremen': StateDeathsDTO;
  @ApiProperty()
  public 'Hamburg': StateDeathsDTO;
  @ApiProperty()
  public 'Hessen': StateDeathsDTO;
  @ApiProperty()
  public 'Niedersachsen': StateDeathsDTO;
  @ApiProperty()
  public 'Saarland': StateDeathsDTO;
  @ApiProperty()
  public 'Sachsen': StateDeathsDTO;
  @ApiProperty()
  public 'Thüringen': StateDeathsDTO;
  @ApiProperty()
  public 'Nordrhein-Westfalen': StateDeathsDTO;
  @ApiProperty()
  public 'Schleswig-Holstein': StateDeathsDTO;
  @ApiProperty()
  public 'Rheinland-Pfalz': StateDeathsDTO;
  @ApiProperty()
  public 'Baden-Württemberg': StateDeathsDTO;
  @ApiProperty()
  public 'Sachsen-Anhalt': StateDeathsDTO;
  @ApiProperty()
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
