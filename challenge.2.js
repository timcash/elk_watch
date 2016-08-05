// ==============================================
//
//                    IMPORTS
//
// ==============================================

const test  = require('ava')
const R     = require('ramda')

// ==============================================
//
//                    TOOLKIT
//
// ==============================================

const pipe      = R.pipe
const map       = R.map
const filter    = R.filter
const reduce    = R.reduce
const pick      = R.pick
const values    = R.values
const zip       = R.zip
const zipObj    = R.zipObj
const mergeAll  = R.mergeAll
const pluck     = R.pluck
const set       = (k, v, record) => {
  record[k] = v
  return record
}

// ==============================================
//
//                 DECLARATIVE
//
// ==============================================

// create a function called add that takes one argument and
// returns another function that takes one argument and returns
// the two numbers added together
// WARNING: do not use the curry supplied by Ramda, make this
// function yourself
function add (a) {
  return (b) => {
    return a + b
  }
}

test('curry', t => {
  let add2 = add(2)
  t.deepEqual(add2(2), 4)
})

// create a function called mapper that multiplies each element by 2
// and returns a new list, should not modify the input list
// use the Ramda map function supplied above
function mapper (list) {
  return map((a) => {
    return a * 2
  }, list)
}
test('map', t => {
  let data = [1, 2, 3]
  t.deepEqual(
    mapper( data ),
    [2, 4, 6]
  )
  t.deepEqual(data, [1, 2, 3])
})

// create a function called filterer that only return elements < 2
// and returns a new list, should not modify the input list
// use the Ramda filter function supplied above
test('filter', t => {
  function filterer (list) {
    return filter((a) => {
      return a < 2
    }, list)
  }
  let data = [1, 2, 3]
  t.deepEqual(
    filterer( data ),
    [1]
  )
  t.deepEqual(data, [1, 2, 3])
})

// create a function called reducerer that sums a list of elements
// and returns a single number, should not modify the input list
// use the Ramda reduce function supplied above
function reducerer (list) {
  return reduce((accumulator, item) => {
    return accumulator + item
  }, 0, list)
}
test('reduce', t => {
  let data = [1, 2, 3]
  t.deepEqual(
    reducerer( data ),
    6
  )
  t.deepEqual(data, [1, 2, 3])
})

// create a function called justvalues and use the values function
function justvalues (obj) {
  return values(obj)
}
test('values', t => {
  t.deepEqual(
    justvalues( {first:1, second: 2, third: 3} ),
    [1, 2, 3]
  )
})

// create a function called picker use the pick function
test('pick', t => {
  let picker = pick(['first', 'third'])
  t.deepEqual(
    picker( {first:1, second: 2, third: 3} ),
    {first: 1, third: 3}
  )
})

// create a function called plucker use the pluck function
test('pluck', t => {
  let plucker = pluck('f2')
  t.deepEqual(
    plucker( [{f1: 1, f2: 3}, {f1: 1, f2: 2}, {f1: 1, f2: 4}] ),
    [3, 2, 4]
  )
})

// create a function called zipper1 and use the zip function
test('zip', t => {
  let zipper1 = zip()
  t.deepEqual(
    zipper1( ['first', 'second', 'third'], [1, 2, 3]),
    [['first', 1], ['second', 2], ['third', 3]]
  )
})

// create a function called zipper2 and use the zipObj function
test.skip('zipObj', t => {
  let zipper2 = zipObj()
  t.deepEqual(
    zipper2( ['first', 'second', 'third'], [1, 2, 3] ),
    {first:1, second: 2, third: 3}
  )
})

// use the pipe function to double a list of numbers then
// filter out the numbers > 5, call the function data_pipeline
test('pipe', t => {

  t.deepEqual(
    data_pipeline([1, 2, 3]),
    [2, 4]
  )
})

// I think you get the point
test.skip('mergeAll', t => {
  const input     = [{key1:{one:1}}, {key2:{two:2}}]
  const expected  = {key1:{one:1}, key2:{two:2}}
  const result = undefined
  t.deepEqual(result, expected)
})

test.skip('values and reduce', t => {
  const input     = {one:1, two:2, three:3}
  const expected  = 6
  const result = undefined
  t.deepEqual(result, expected)
})

// you may need to import more tools from Ramada
// you can also use R.anyramdafunction
// like R.without
test.skip('Try to use a pipe', t => {
  const input     = ['Carl Manaster', 'Carl Sagan  ', '  Carl Friedrich Gauss']
  const expected  = {Manaster:12, Sagan:9, Gauss:18}
  const result = undefined
  t.deepEqual(result, expected)
})
