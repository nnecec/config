const i = 123_534
// Input
const message1 =
  i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz'
  : i % 3 === 0 ? 'fizz'
  : i % 5 === 0 ? 'buzz'
  : String(i)

// Prettier 3.0
const message2 =
  i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz'
  : i % 3 === 0 ? 'fizz'
  : i % 5 === 0 ? 'buzz'
  : String(i)

// Prettier 3.1
const message3 =
  i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz'
  : i % 3 === 0 ? 'fizz'
  : i % 5 === 0 ? 'buzz'
  : String(i)

// "Questioning" ternaries for simple ternaries:
const content = children && !isEmptyChildren(children) ? render(children) : renderDefaultChildren()

// "Case-style" ternaries for chained ternaries:
const message =
  i % 3 === 0 && i % 5 === 0 ? 'fizzbuzz'
  : i % 3 === 0 ? 'fizz'
  : i % 5 === 0 ? 'buzz'
  : String(i)

// Smoothly transitions between "case-style" and "questioning" when things get complicated:
const reactRouterResult =
  children && !isEmptyChildren(children) ? children
  : props.match ?
    component ? React.createElement(component, props)
    : render ? render(props)
    : null
  : null
