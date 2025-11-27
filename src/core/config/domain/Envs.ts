export class Envs {
  static get PORT(): number {
    return parseInt(process.env.PORT || '8080', 10);
  }

  static get NODE_ENV(): string {
    return process.env.NODE_ENV || 'development';
  }
}
