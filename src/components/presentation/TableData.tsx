import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableProps } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
// import Highlighter from "react-highlight-words";

const TableData: React.FC<{
   columns: any[];
   data: any[];
   scrollX?: any;
   selected?: boolean;
}> = ({ columns, data, scrollX, selected = false }) => {
   const [_searchText, setSearchText] = useState("");
   const [_searchedColumn, setSearchedColumn] = useState<string>("");
   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
   const searchInput = useRef<InputRef>(null);

   const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps["confirm"], dataIndex: string) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
   };

   const handleReset = (clearFilters: () => void) => {
      clearFilters();
      setSearchText("");
   };

   const getColumnSearchProps = (column: any): any => ({
      ...column,
      filterSearch: column.filterSearch,
      filterDropdown: column.filterSearch
         ? ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
              <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                 <Input
                    ref={searchInput}
                    placeholder={`Search ${column.dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, column.dataIndex)}
                    style={{ marginBottom: 8, display: "block" }}
                 />
                 <Space>
                    <Button
                       type="primary"
                       onClick={() => handleSearch(selectedKeys, confirm, column.dataIndex)}
                       icon={<SearchOutlined />}
                       size="small"
                       style={{ width: 90 }}
                    >
                       Search
                    </Button>
                    <Button
                       onClick={() => clearFilters && handleReset(clearFilters)}
                       size="small"
                       style={{ width: 90 }}
                    >
                       Reset
                    </Button>
                    <Button
                       type="link"
                       size="small"
                       onClick={() => {
                          confirm({ closeDropdown: false });
                          setSearchText(selectedKeys[0]);
                          setSearchedColumn(column.dataIndex);
                       }}
                    >
                       Filter
                    </Button>
                    <Button
                       type="link"
                       size="small"
                       onClick={() => {
                          close();
                       }}
                    >
                       close
                    </Button>
                 </Space>
              </div>
           )
         : undefined,
      filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />,
      onFilter: (value: string, record: any) =>
         record[column.dataIndex]
            .toString()
            .toLowerCase()
            .includes((value as string).toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
         if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
         }
      },
      render: (text: any, record: any, index: number) =>
         column.render
            ? column.render(text, record, index)
            : // <Highlighter
              //    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
              //    searchWords={[searchText]}
              //    autoEscape
              //    textToHighlight={text ? text.toString() : ""}
              // />
              text,
   });

   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
   };

   const rowSelection: TableProps<any>["rowSelection"] = {
      selectedRowKeys,
      onChange: onSelectChange,
   };

   return (
      <Table
         rowSelection={selected && rowSelection}
         columns={columns.map((col) => getColumnSearchProps(col))}
         dataSource={data}
         scroll={{ x: scrollX || 1300 }}
      />
   );
};

export default TableData;
