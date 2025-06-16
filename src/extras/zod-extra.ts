import {z} from "zod";

/**
 * Creates a Zod schema that coerces string values to boolean.
 * @param options The options for the coercion, including a default value.
 */
export const coerceBoolean = (options: { default: boolean }) => {
  const coerceBoolean = z
      .enum(['true', 'false', '1', '0'])
      .transform(val => val === 'true' || val === '1');

  return coerceBoolean.default(String(options.default) as "true" | "false");
};


/**
 * Creates a Zod schema that coerces string values to number.
 * @param options The options for the coercion, including min, max, and default values.
 */
export const coerceNumber = (options: { min?: number; max?: number; default: number }) => {
  return z
      .string()
      .default(String(options.default))
      .refine((val) => !isNaN(Number(val)), {message: "Invalid number"})
      .transform((val) => Number(val))
      .refine((num) => options.min === undefined || num >= options.min, {
        message: `Must be >= ${options.min}`,
      })
      .refine((num) => options.max === undefined || num <= options.max, {
        message: `Must be <= ${options.max}`,
      });
};