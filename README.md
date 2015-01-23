# stepper-button

A simple ember-cli stepper-button. Uses bootstrap classes for button layout and assumes your project has bootstrap.css

## Installation

`ember install:addon stepper-button`

## Use

####Normal Ordering

`{{stepper-button decrement="decrement" increment="increment"}}`

####Reverse Ordering

`{{stepper-button decrement="decrement" increment="increment" reverseOrdering=true}}`

####Only show increment

`{{stepper-button increment="increment" hideDecrement=true}}`

####Only show decrement

`{{stepper-button decrement="decrement" hideIncrement=true}}`
