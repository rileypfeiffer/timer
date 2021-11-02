const args = process.argv;
let seconds = args.slice(2);

for (let second of seconds) {
  if (second > 0) {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, second * 1000);
  }
}
