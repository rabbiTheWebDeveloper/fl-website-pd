import * as React from 'react';

import style from './style.module.css';

const Table = React.forwardRef(({ className, loosen, ...props }, ref) => (
  <div className={style.tableContainer}>
    <table border="0" ref={ref} className={`${style.table} ${loosen ? style.loosen : ''} custom-table ${className}`} {...props} />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef(({ className, ...props }, ref) => <thead ref={ref} className={`${style.tableHeader} custom-tableHeader ${className}`} {...props} />);
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef(({ className, ...props }, ref) => <tbody ref={ref} className={`${style.tableBody} custom-tableBody ${className}`} {...props} />);
TableBody.displayName = 'TableBody';

const TableRow = React.forwardRef(({ className, highlight, ...props }, ref) => <tr ref={ref} className={`${style.tableRow} ${highlight ? style.highlight : ''} ${className}`} {...props} />);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef(({ className, ...props }, ref) => <th ref={ref} className={`${style.tableHead} custom-tableHead ${className}`} {...props} />);
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef(({ className, highlight, ...props }, ref) => <td ref={ref} className={`${style.tableCell} ${highlight ? style.highlight : ''} ${className}`} {...props} />);
TableCell.displayName = 'TableCell';

export { Table, TableHeader, TableBody, TableHead, TableRow, TableCell };
