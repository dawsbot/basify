import test from 'ava';
import basify from './';

test('valid args', t => {
  t.throws(() => {
    basify();
  }, Error);
  t.throws(() => {
    basify(false);
  }, TypeError);
});

test('string', t => {
  t.is(basify('file1.js'), `file1`);
  t.is(basify('file2.html'), `file2`);
  t.is(basify('file3.c'), `file3`);
  t.is(basify('prefile.file4.c'), `prefile.file4`);
});

test('array', t => {
  t.same(basify(['file1.js']), [`file1`]);
  t.same(basify(['file1.js', 'file2.html']), [`file1`, `file2`]);
});
