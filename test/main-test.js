'use strict';

describe('numGame', () => {

  it('when the result is 0A0B:', () => {
    const system = '1234';
    const user = '5678';
    const actualResult = numGame(system,user);
    const expectResult = '0A0B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 0A1B:', () => {
    const system = '1234';
    const user = '5178';
    const actualResult = numGame(system,user);
    const expectResult = '0A1B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 0A2B:', () => {
    const system = '1234';
    const user = '5128';
    const actualResult = numGame(system,user);
    const expectResult = '0A2B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 0A3B:', () => {
    const system = '1234';
    const user = '5123';
    const actualResult = numGame(system,user);
    const expectResult = '0A3B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 0A4B:', () => {
    const system = '1234';
    const user = '4123';
    const actualResult = numGame(system,user);
    const expectResult = '0A4B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 1A0B:', () => {
    const system = '1234';
    const user = '1567';
    const actualResult = numGame(system,user);
    const expectResult = '1A0B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 1A1B:', () => {
    const system = '1234';
    const user = '1527';
    const actualResult = numGame(system,user);
    const expectResult = '1A1B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 1A2B:', () => {
    const system = '1234';
    const user = '1523';
    const actualResult = numGame(system,user);
    const expectResult = '1A2B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 1A3B:', () => {
    const system = '1234';
    const user = '1423';
    const actualResult = numGame(system,user);
    const expectResult = '1A3B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 2A0B:', () => {
    const system = '1234';
    const user = '1256';
    const actualResult = numGame(system,user);
    const expectResult = '2A0B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 2A1B:', () => {
    const system = '1234';
    const user = '1246';
    const actualResult = numGame(system,user);
    const expectResult = '2A1B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 2A2B:', () => {
    const system = '1234';
    const user = '1243';
    const actualResult = numGame(system,user);
    const expectResult = '2A2B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 3A0B:', () => {
    const system = '1234';
    const user = '1235';
    const actualResult = numGame(system,user);
    const expectResult = '3A0B';
    expect(actualResult).toEqual(expectResult);
  });

  it('when the result is 4A0B:', () => {
    const system = '1234';
    const user = '1234';
    const actualResult = numGame(system,user);
    const expectResult = '4A0B';
    expect(actualResult).toEqual(expectResult);
  });
});
