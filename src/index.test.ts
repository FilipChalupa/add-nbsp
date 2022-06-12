import { autoNbsp } from './index';

test('Simple auto nbsp test', () => {
  expect(autoNbsp('What are they doing?')).toBe('What&nbsp;are they doing?');
});