# some-every-practice

Let's practice using `every` and `some`!

Complete the functions inside of the `every.js` and `some.js` files so that the associated tests pass. You should *only* need to use some and every.

* * *

### .some()

Some works by taking a function that returns true or false. If any of the elements in the array return true, then the entire statement returns true. Another way to think of some is that it checks for *any* value passes the test provided by the function.

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

###### Example

Imagine we have a group of users that are the following age who have all signed up for some sort of tour through our application.

```javascript
var ages = [23,32,17,19,34];
```

We want to show an ad that displays delicious beer but don't want to do so if any of the group members are under 21. A function that just tests whether or not a value is less than 21 might look like this:

```javascript
var lessThan21 = function (age) {
  return (age < 21)
};

// lessThan21(20) >> true
// lessThan21(30) >> false
```

We can use `some` to check if any of the values are less than 21 in just one go:

```javascript
var anyLessThan21 = function (ages) {
  return ages.some(function (age) {
    return age < 21;
  });
};

// anyLessThan21(ages) >> true
```

If the function returns `true`, we will *not* show the ad.

* * *

### .every()

Some works by taking a function that returns true or false. If all of the elements in the array return true, *only then* will the entire statement return true.

[Check out the docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

###### Example

Consider the same example above, but instead of checking if any of the values are less than 21, we want to check that all of the values are equal to or greater than 21. A simple function to return if a single age is 21 or older would look like:

```javascript
var twentyOneOrAbove = function (age) {
  return age >= 21;
};

// twentyOneOrAbove(20) >> false
// twentyOneOrAbove(30) >> true
```

We can use `every` to check for all the values in the array.

```javascript
var all21OrAbove = function (ages) {
  return ages.every(function (age) {
    return age >= 21;
  });
};

// all21OrAbove(ages) >> false
```