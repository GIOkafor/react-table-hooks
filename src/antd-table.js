import React, { useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: true
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const createTableSort = (sort_by, dir) =>
  dir
    ? {
        sort_by,
        sort_dir: {
          descend: 'desc',
          ascend: 'asc'
        }[dir]
      }
    : {};

const handleSort = ({ columnKey, order }) => {
  console.log({ columnKey, order });
  //createTableSort(columnKey, order)
};

//(a, b) => a.age - b.age

export function AntdTable() {
  const [source, updateSource] = useState(null);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      onChange={(p, f, sort) => handleSort(sort)}
    />
  );
}
