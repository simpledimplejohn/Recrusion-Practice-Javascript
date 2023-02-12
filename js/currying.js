// Currying multiple arugments
// breaking functions up so there is only one argument per fucntion

function aThingISureLike(howMuchILikeIt, thing, reason) {
    return `I ${howMuchILikeIt} ${thing} because ${reason}` 
}

// console.log(aThingIMaybeLike("lots","corn","corn"))

//curried version

function aThingIMaybeLike(howMuchILikeIt) {
    return function(thing) {
        return function(reason) {
            return `I ${howMuchILikeIt} ${thing} because ${reason}` 
        }
    }
}

// console.log(aThingIMaybeLike("eatting")("corn")("corn"));

const thingsThatBugMe = aThingIMaybeLike("do not like")

console.log(thingsThatBugMe("global variables")("they are code smoells"))
