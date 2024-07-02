export function Random() {
  let number = Math.random() * 100;
  return (
    <h1 style={{ backgroundColor: '#776691' }}>Random Number is {Math.round(number)}</h1>
  );
}

export default Random;

// Always use the component in upper case
// and also import in upper case only