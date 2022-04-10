function choice(items) {
let index= Math.floor(Math.random() * items.length);
// random number return item from 0 to items.length-1 ie from 0 to 10 will return random number from 0 to 9
return items[index];
}
function remove(items, item) {
  if (items.includes(item)) {
      let final;
    return (final = items.filter((value) => {
      return value !== item;
    }));
  } else {
    return undefined;
  }
}

export {choice,remove}

