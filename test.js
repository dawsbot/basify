import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn();
  }, Error);
  t.throws(() => {
    fn(false);
  }, TypeError);
});

test('string', t => {
  t.is(fn('file1.js'), `file1`);
  t.is(fn('file2.html'), `file2`);
  t.is(fn('file3.c'), `file3`);
  t.is(fn('prefile.file4.c'), `prefile.file4`);
});

test('array', t => {
  t.same(fn(['file1.js']), [`file1`]);
  t.same(fn(['file1.js', 'file2.html']), [`file1`, `file2`]);
});
