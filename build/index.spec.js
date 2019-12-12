"use strict";

var _ = require(".");

describe('testFunction', () => {
  it('should double the input it receives', () => {
    const input = 2;
    expect((0, _.testFunc)(input)).toEqual(4);
  });
});