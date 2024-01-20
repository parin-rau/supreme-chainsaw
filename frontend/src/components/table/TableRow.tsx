import TableCell from "./TableCell";
import { Row } from "./table.types";

export default function TableRow(row: Row) {
  return (
    <div className="flex flex-row">
      {row.map((c) => (
        <TableCell {...{ ...c }} />
      ))}
    </div>
  );
}
