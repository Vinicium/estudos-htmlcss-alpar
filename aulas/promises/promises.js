function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  const start = Date.now();
  await delay(1000);
  const end = Date.now();

  console.log("terminou:", (end - start)/1000+'s');
}

main().then();
