import Lister from "./components/Lister.js";

export default function App() {
  const list = [
    {id: 1, name: "Математический анализ"},
    {id: 2, name: "Линейная алгебра"},
    {id: 3, name: "Теория вероятностей"},
    {id: 4, name: "Фронтенд и бекенд разработка"},
    {id: 5, name: "Разработка программного обеспечения"}
  ]
  return (
    <div>
      <Lister curs={list}/>
    </div>
  );
}


