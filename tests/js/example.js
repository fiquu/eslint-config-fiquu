const jsbar = '';

function jsfoo(input = true) {
  const _input = input;
  const _output = !!_input;

  return { jsbar, output: _output };
}

module.exports = jsfoo;
