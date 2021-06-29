const spinner = (timer) => {
  const spin = ["\r|  ", "\r\\  ", "\r—  ", "\r/  ", "\r|  ", "\r\\  ", "\r—  ", "\r/  ", "\r|  ", "\r\\  ", "\r—  ", "\r/  "];
  for (let i = 0; i < spin.length; i++) {
    setTimeout(() => {
      process.stdout.write(spin[i]);
    }, timer);
    timer += 100;
  }
};

spinner(1)