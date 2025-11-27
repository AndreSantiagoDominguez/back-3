import { Envs } from './domain/Envs';

export function getEnvs() {
  return {
    port: Envs.PORT,
    nodeEnv: Envs.NODE_ENV,
  };
}
