function makeReverse(animation) {
  return `${animation}-r`;
}

const DX3 = {
  normal: '3dx',
  reverse: makeReverse('3dx'),
};

const DY3 = {
  normal: '3dy',
  reverse: makeReverse('3dy'),
};

const DXDY3 = {
  normal: '3dxdy',
  reverse: makeReverse('3dxdy'),
};

const ARROW = {
  normal: 'arrow',
  reverse: makeReverse('arrow'),
};

const ARROWALT = {
  normal: 'arrowalt',
  reverse: makeReverse('arrowalt'),
};

const ARROWTURN = {
  normal: 'arrowturn',
  reverse: makeReverse('arrowturn'),
};

const BORING = {
  normal: 'boring',
  reverse: makeReverse('boring'),
};

const COLLAPSE = {
  normal: 'collapse',
  reverse: makeReverse('collapse'),
};

const ELASTIC = {
  normal: 'elastic',
  reverse: makeReverse('elastic'),
};

const EMPHATIC = {
  normal: 'emphatic',
  reverse: makeReverse('emphatic'),
};

const MINUS = {
  normal: 'minus',
  reverse: makeReverse('minus'),
};

const SLIDER = {
  normal: 'slider',
  reverse: makeReverse('slider'),
};

const SPIN = {
  normal: 'spin',
  reverse: makeReverse('spin'),
};

const SPRING = {
  normal: 'spring',
  reverse: makeReverse('spring'),
};

const STAND = {
  normal: 'stand',
  reverse: makeReverse('stand'),
};

const SQUEEZE = {
  normal: 'squeeze',
};

const VORTEX = {
  normal: 'vortex',
  reverse: makeReverse('vortex'),
};

export {
  DX3,
  DY3,
  DXDY3,
  ARROW,
  ARROWALT,
  ARROWTURN,
  BORING,
  COLLAPSE,
  ELASTIC,
  EMPHATIC,
  MINUS,
  SLIDER,
  SPIN,
  SPRING,
  STAND,
  SQUEEZE,
  VORTEX,
};
