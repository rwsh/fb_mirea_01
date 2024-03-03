import Hello from "../src/components/Hello";

export default function App() {
  return (
    <div>
      Привет, ReactJS!
      <Hello hello="Привет">Роман</Hello>
      <Hello hello="Здравствуйте">Роман Вячеславович</Hello>
      <Hello hello="Здравия желаю">товарищ лейтенант</Hello>
      <Hello hello="До свидания">господин хороший</Hello>
    </div>
  );
}

