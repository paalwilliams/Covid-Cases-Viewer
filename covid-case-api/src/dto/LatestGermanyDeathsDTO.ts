import { GermanyLatestDeathsDTOType, states } from 'src/types';
import { LatestStateDeathsDTO } from './LatestStateDeathsDTO';
import { ApiProperty } from '@nestjs/swagger';

export class LatestGermanyDeathsDTO implements GermanyLatestDeathsDTOType {
  @ApiProperty()
  public Bayern: LatestStateDeathsDTO;
  @ApiProperty()
  public 'Berlin': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Brandenburg': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Bremen': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Hamburg': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Hessen': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Niedersachsen': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Saarland': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Sachsen': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Thüringen': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Nordrhein-Westfalen': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Schleswig-Holstein': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Rheinland-Pfalz': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Baden-Württemberg': LatestStateDeathsDTO;
  @ApiProperty()
  public 'Sachsen-Anhalt': LatestStateDeathsDTO;
  @ApiProperty()
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
