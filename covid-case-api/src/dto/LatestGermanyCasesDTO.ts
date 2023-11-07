import { GermanyLatestCasesDTOType, states } from 'src/types';
import { LatestStateCasesDTO } from './LatestStateCasesDTO';
import { ApiProperty } from '@nestjs/swagger';

export class LatestGermanyCasesDTO implements GermanyLatestCasesDTOType {
  @ApiProperty()
  public Bayern: LatestStateCasesDTO;
  @ApiProperty()
  public 'Berlin': LatestStateCasesDTO;
  @ApiProperty()
  public 'Brandenburg': LatestStateCasesDTO;
  @ApiProperty()
  public 'Bremen': LatestStateCasesDTO;
  @ApiProperty()
  public 'Hamburg': LatestStateCasesDTO;
  @ApiProperty()
  public 'Hessen': LatestStateCasesDTO;
  @ApiProperty()
  public 'Niedersachsen': LatestStateCasesDTO;
  @ApiProperty()
  public 'Saarland': LatestStateCasesDTO;
  @ApiProperty()
  public 'Sachsen': LatestStateCasesDTO;
  @ApiProperty()
  public 'Thüringen': LatestStateCasesDTO;
  @ApiProperty()
  public 'Nordrhein-Westfalen': LatestStateCasesDTO;
  @ApiProperty()
  public 'Schleswig-Holstein': LatestStateCasesDTO;
  @ApiProperty()
  public 'Rheinland-Pfalz': LatestStateCasesDTO;
  @ApiProperty()
  public 'Baden-Württemberg': LatestStateCasesDTO;
  @ApiProperty()
  public 'Sachsen-Anhalt': LatestStateCasesDTO;
  @ApiProperty()
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
