const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1500);
  });
  (async () => {
    await prom;
  
    document.getElementById("app").style.display = "inherit";
    document.getElementById("wrapper").style.opacity = 0;
  })();
  