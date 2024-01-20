import { Cell } from "./table.types";
import { Link } from "react-router-dom";

export default function TableCell(cell: Cell) {
  return Array.isArray(cell.text) ? (
    <ul>
      {cell.text.map((t) => (
        <li>{t}</li>
      ))}
    </ul>
  ) : (
    <div className="">
      {cell.linkTo ? <Link to={cell.linkTo}>{cell.text}</Link> : cell.text}
    </div>
  );
}
