export type Errors = {
  message: string;
  code: string;
}

export interface ParsedError {
  errors: Errors[];
  variables: Record<string, unknown>;
}

const parseError = (error: Error): ParsedError => {
  const parsedError = JSON.parse(JSON.stringify(error));
  const errors = {
    errors: [],
    variables: {},
  };
  errors.errors = parsedError.response.errors.map((error: Record<string, Record<string, unknown>>) => ({
    message: error.message,
    code: error.extensions.code,
  }));
  errors.variables = parsedError?.request?.variables;

  return errors;
}

export default parseError;
