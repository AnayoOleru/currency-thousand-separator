[![Coverage Status](https://coveralls.io/repos/github/AnayoOleru/currency-thousand-separator/badge.svg?branch=master)](https://coveralls.io/github/AnayoOleru/currency-thousand-separator?branch=master)

# currency-thousand-separator
An NPM package for formatting large numbers, including money.



## Getting Started


```npm install --save currency-thousand-separator
```

## Methods

```
- thousandsSeparators(num)
```

```
import {thousandsSeparators} from 'currency-thousand-separator'

thousandsSeparators(2400);


return 2, 400
```

```
import {thousandsSeparators} from 'currency-thousand-separator'

thousandsSeparators(83789);


return 83,789
```