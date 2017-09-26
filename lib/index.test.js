import { Context, QueryRenderer } from './';

describe('relay-context', () => {
  it('returns "Context" as well as "QueryRenderer"', () => {
    expect(Context).toBeTruthy();
    expect(QueryRenderer).toBeTruthy();
  });
});
