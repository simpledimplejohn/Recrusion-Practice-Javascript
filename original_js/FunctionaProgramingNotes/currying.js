//curried function
function ThingIMaybeLike2(howMuchILikeIt){
  return function(thing) {
    return function(reason) {
      return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
    }
  }
}
//call this with
aThingIMaybeLike2("really like")("functional programming")("it's cool")
const thingsThatBugMe = aThingIMaybeLike("do not like");
thingsThatBugMe("global variables")("they are a code smell");


//uncurried function
function aThingIMaybeLike(howMuchILikeIt, thing, reason) {
  return `I ${howMuchILikeIt} ${thing} because ${reason}.`;
}

// call this with:
aThingIMaybeLike("really like", "functional programing", "it's cool");