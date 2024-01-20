import { useState } from "react";
import TableRow from "./TableRow";
import { Row } from "./table.types";

type Sort = {
  direction: 1 | -1;
  column: string;
};

export default function TableContainer() {
  const [rows, setRow] = useState<Row[]>([]);
  const [sort, setSort] = useState<Sort>(null);

  return (
    <div className="flex flex-col">
      {rows.map((r) => (
        <TableRow {...{ ...r }} />
      ))}
    </div>
  );
}
