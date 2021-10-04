let lib = require("./lib.js");

async function getAndGroupStuff() {
  let thingsToFetch = [
    "t1",
    "t2",
    "t3",
    "s1",
    "s2",
    "s3",
    "m1",
    "m2",
    "m3",
    "t4",
  ];
  let stuff = [];
  let ts, ms, ss;

  let promises = [];
  for (let thingToGet of thingsToFetch) {
    promises.push(lib.getPromise(thingToGet));
  }
  stuff = await Promise.all(promises);
  console.log("Got all things");
  [ts, ms, ss] = await Promise.all([
    lib.groupPromise(stuff, "t"),
    lib.groupPromise(stuff, "m"),
    lib.groupPromise(stuff, "s"),
  ]);
  console.log("Got all groups");
  console.log("Done");
}

getAndGroupStuff();

//////////////////////////////////////////////////////////////////////////////////////////

// let lib = require("./lib.js");

// async function getAndGroupStuff() {
//     let thingsToFetch = ['t1', 't2', 't3', 's1', 's2', 's3', 'm1', 'm2', 'm3', 't4'];
//     let stuff = [];
//     let ts, ms, ss;

//     let promises = [];
//     for (let thingToGet of thingsToFetch) {
//         stuff.push(await lib.getPromise(thingToGet));
//         console.log("Got a thing");
//     }
//     ts = await lib.groupPromise(stuff,"t");
//     console.log("Made a group");
//     ms = await lib.groupPromise(stuff,"m");
//     console.log("Made a group");
//     ss = await lib.groupPromise(stuff,"s");
//     console.log("Made a group");
//     console.log("Done");
// }

// getAndGroupStuff();
