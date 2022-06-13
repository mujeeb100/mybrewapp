import "./app.scss";

export default function Applist({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "Applist active" : "Applist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}