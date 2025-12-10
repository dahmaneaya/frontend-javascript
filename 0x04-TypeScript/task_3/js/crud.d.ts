// task_3/js/crud.d.ts
// import { RowID, RowElement } from './interface';

// declare function insertRow(row: RowElement): RowID;
// declare function deleteRow(rowId: RowID): void;
// declare function updateRow(rowId: RowID, row: RowElement): RowID;


import { RowElement } from './interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: number): void;
declare function updateRow(rowId: number, row: RowElement): number;
