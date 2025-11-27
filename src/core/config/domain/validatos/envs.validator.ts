export function validateEnvs(): void {
  const requiredEnvs: string[] = [];

  for (const env of requiredEnvs) {
    if (!process.env[env]) {
      throw new Error(`Environment variable ${env} is required`);
    }
  }
}
