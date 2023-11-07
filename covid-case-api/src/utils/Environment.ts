import dotenv from 'dotenv';

export class Environment {
  constructor() {
    dotenv.config();
  }
  public COVID_API_ROOT: string = process.env.COVID_API_ROOT;
}
