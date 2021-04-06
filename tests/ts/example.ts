const tsbar = '';

function tsfoo(input = true): Record<string, string | boolean> {
  const _input = input;
  const _output = !!_input;

  return { tsbar, output: _output };
}

export default tsfoo;
