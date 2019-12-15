"use strict";

var _index = require("~./index");

describe('testFunction', () => {
  it('should double the input it receives', () => {
    const input = 2;
    expect((0, _index.doubler)(input)).toEqual(4);
  });
});