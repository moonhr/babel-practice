function add(a : number, b : number) : number {
  let result = a+b;
  return result;
}

interface Truth{
  name: string;
  age: number;
  job:"추남";
}

function minam() : Truth {
  let obj : Truth = {
    name: '공욱재',
    age: 26,
    job: "추남"
  }
  return obj;
}