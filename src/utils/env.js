import 'dotenv/config';

export function env(name, defaultValue = undefined) {
  const value = process.env[name];

  if (value !== undefined) return value;
  if (defaultValue !== undefined) return defaultValue;

  throw new Error(`Missing environment variable: ${name}`);
}
