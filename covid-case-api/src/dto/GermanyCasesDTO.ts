import { GermanyCasesDTOType, states } from 'src/types';
import { StateCasesDto } from './StateCasesDTO';
import { ApiProperty } from '@nestjs/swagger';

export class GermanyCasesDTO implements GermanyCasesDTOType {
  @ApiProperty()
  public 'Bayern': StateCasesDto;
  @ApiProperty()
  public 'Berlin': StateCasesDto;
  @ApiProperty()
  public 'Brandenburg': StateCasesDto;
  @ApiProperty()
  public 'Bremen': StateCasesDto;
  @ApiProperty()
  public 'Hamburg': StateCasesDto;
  @ApiProperty()
  public 'Hessen': StateCasesDto;
  @ApiProperty()
  public 'Niedersachsen': StateCasesDto;
  @ApiProperty()
  public 'Saarland': StateCasesDto;
  @ApiProperty()
  public 'Sachsen': StateCasesDto;
  @ApiProperty()
  public 'Thüringen': StateCasesDto;
  @ApiProperty()
  public 'Nordrhein-Westfalen': StateCasesDto;
  @ApiProperty()
  public 'Schleswig-Holstein': StateCasesDto;
  @ApiProperty()
  public 'Rheinland-Pfalz': StateCasesDto;
  @ApiProperty()
  public 'Baden-Württemberg': StateCasesDto;
  @ApiProperty()
  public 'Sachsen-Anhalt': StateCasesDto;
  @ApiProperty()
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
