class HamburgerUtils {
  static dx3 = {
    normal: '3dx',
    reverse: this.makeReversive('3dx'),
  };

  static dy3 = {
    normal: '3dy',
    reverse: this.makeReversive('3dy'),
  };

  static dxdy3 = {
    normal: '3dxdy',
    reverse: this.makeReversive('3dxdy'),
  };

  static arrow = {
    normal: 'arrow',
    reverse: this.makeReversive('arrow'),
  };

  static arrowalt = {
    normal: 'arrowalt',
    reverse: this.makeReversive('arrowalt'),
  };

  static arrowturn = {
    normal: 'arrowturn',
    reverse: this.makeReversive('arrowturn'),
  };

  static boring = {
    normal: 'boring',
    reverse: this.makeReversive('boring'),
  };

  static collapse = {
    normal: 'collapse',
    reverse: this.makeReversive('collapse'),
  };

  static elastic = {
    normal: 'elastic',
    reverse: this.makeReversive('elastic'),
  };

  static emphatic = {
    normal: 'emphatic',
    reverse: this.makeReversive('emphatic'),
  };

  static minus = {
    normal: 'minus',
    reverse: this.makeReversive('minus'),
  };

  static slider = {
    normal: 'slider',
    reverse: this.makeReversive('slider'),
  };

  static spin = {
    normal: 'spin',
    reverse: this.makeReversive('spin'),
  };

  static spring = {
    normal: 'spring',
    reverse: this.makeReversive('spring'),
  };

  static stand = {
    normal: 'stand',
    reverse: this.makeReversive('stand'),
  };

  static squeeze = {
    normal: 'squeeze',
  };

  static vortex = {
    normal: 'vortex',
    reverse: this.makeReversive('vortex'),
  };

  static makeReversive(animation) {
    return `${animation}-r`;
  }
}

export default HamburgerUtils;
