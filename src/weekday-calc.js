export function backEnd(dateObj) {
  let day = "";
  let dayIndex = dateObj.getUTCDay();
  if (dayIndex === 0) {
    day = "Sunday";
  } else if (dayIndex === 1) {
    day = "Monday";
  } else if (dayIndex === 2) {
    day = "Tuesday";
  } else if (dayIndex === 3) {
    day = "Wednesday";
  } else if (dayIndex === 4) {
    day = "Thursday";
  } else if (dayIndex === 5) {
    day = "Friday";
  } else if (dayIndex === 6) {
    day = "Saturday";
  } else {
    day = "broken program"
  }
  // let results = `That's a ${day}.`
  // results = results.toString();
  // return results;
  return `That's a ${day}.`;
}
