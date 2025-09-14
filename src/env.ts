import * as v from "valibot";

const envSchema = v.object({
  DATABASE_URL: v.pipe(v.string(), v.minLength(1)),
});

const env = v.parse(envSchema, process.env);

export { env };
