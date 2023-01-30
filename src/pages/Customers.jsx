import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Inject,
  Sort,
  Filter,
  Selection,
  Edit,
} from "@syncfusion/ej2-react-grids";

import { Headers } from "./../components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl ">
      <Headers title="Customers" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        toolbar={["Delete"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
        }}
        width="auto"
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Filter, Selection, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
