# Uncategorized

Putting things here until I aggregate to a topic

## Gotchas with functional class creation

# BAD
```javascript
    var Person = function(first, last) {
        var obj = {first:first, last:last};
        obj.createfullName = function() {
            obj.fullName = obj.first + " " + obj.last;
        }
        return obj;
    }
```

#GOOD

By declaring createFullName outside of the Person class, a function is only created once (instead of every time Person is called). Because we moved it outside the scope of Person (can't access obj), the keyword "this" is used to reference what will eventually be to the left of the dot when the method is called
```javascript
    var Person = function(first, last) {
        var obj = {first:first, last:last};
        obj.createfullName = createFullName;
        return obj;
    }

    var createFullName = function() {
        this.fullName = obj.first + " " + obj.last; //this is used instead of obj
    }
```