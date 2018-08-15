import turnMeBaby from './index';

describe('turnMeBaby::', () => {
  /** @test {turnMeBaby} */
  it('should reverse string', function () {
    expect(turnMeBaby('hello')).toEqual('olleh');
    expect(turnMeBaby('')).toEqual('');
  });
});
