import SpendItem from "./components/SpendItem";

function App() {
  const cheltuieli = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <SpendItem
        title={cheltuieli[0].title}
        pret={cheltuieli[0].amount}
        date={cheltuieli[0].date}
      />
      <SpendItem
        title={cheltuieli[1].title}
        pret={cheltuieli[1].amount}
        date={cheltuieli[1].date}
      />
      <SpendItem
        title={cheltuieli[2].title}
        pret={cheltuieli[2].amount}
        date={cheltuieli[2].date}
      />
      <SpendItem
        title={cheltuieli[3].title}
        pret={cheltuieli[3].amount}
        date={cheltuieli[3].date}
      />
    </div>
  );
}

export default App;
