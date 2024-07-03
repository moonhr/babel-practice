function a(...args){
  let result = args[0] + args[1];
  const onemore = () => {
    return result + 10;
  }
  return onemore();
}