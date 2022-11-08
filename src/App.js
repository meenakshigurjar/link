// import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
// import { 
//  Filter,
//  GridComponent,
//  Inject,
//   Page,
//   Sort,
//  } from '@syncfusion/ej2-react-grids';
// import * as React from 'react';
//  import { userDataFromApi} from './util.js';
// // //import { url} from './util.js';
// // // import { data } from './datasource';

//  import './App.css';
//  export default class App extends React.Component {
//   constructor() {
//     super(...arguments);
//     this.FilterOptions = {
//       type: 'Menu',
//     };
//     this.pageOptions = {
//       pageSize: 5,
//       pageSizes: true,
//     };
//     this.state = {
//        userData: userDataFromApi,
//      };
//    }
//   //onLoad() {
//     //let gridElement = document.getElementById('grid');
//     //if (gridElement && gridElement.ej2_instances[0]) {
//      // let gridInstance = gridElement.ej2_instances[0];
//       /** height of the each row */
//       //const rowHeight = gridInstance.getRowHeight();
//       /** Grid height */
//      // const gridHeight = gridInstance.height;
//       /** initial page size */
//       //const pageSize = gridInstance.pageSettings.pageSize;
//       /** new page size is obtained here */
//      // const pageResize = (gridHeight - pageSize * rowHeight) / rowHeight;https://codeshare.pallet.xyz/
//       //gridInstance.pageSettings.pageSize = pageSize + Math.round(pageResize);
//    // }
//   //}
//    componentDidMount() {
//    (async _ => {
//   const response = await userDataFromApi;
//   this.setState({
//    userData: response.data,
//    });
//    })();
//    }
  
  
  
  
//   render() {
//   console.log(userDataFromApi)
//    // console.log(this.state.userData);

//   console.log(userDataFromApi)
//     return (
      
//        <GridComponent
//          dataSource={this.state.userData}
//          filterSettings={this.FilterOptions}
//          allowFiltering={true}
//          height={273}
//          allowPaging={true}
//          pageSettings={this.pageOptions}
//          allowSorting={true}
//        >
//          <ColumnsDirective>
//           <ColumnDirective field="id" width="100" textAlign="Right" />
//            <ColumnDirective field="name" width="100" />
//            <ColumnDirective field="username" width="100" textAlign="Right" />
//            <ColumnDirective
//              field="email"
//              width="100"
//              format="C2"
//              textAlign="Right"
//            />
//            <ColumnDirective field="website" width="100" />
         
//          </ColumnsDirective>
//          <Inject services={[Filter, Page, Sort]} />
//        </GridComponent>
//      );
//    }
//  }



import React,{ Component }  from 'react';
import { useEffect, useState } from 'react';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Link } from "react-router-dom";

import {
  Filter,
  GridComponent,
  Inject,
  Page,
  Sort,
} from '@syncfusion/ej2-react-grids';
import axios from 'axios';
import './App.css';
// ----------------------------------------------------------
function OverviewDataGrid(props) {

  const [pageOptions,setPageOptions] = useState({
    pageSize: 8,
    pageSizes: true,
  });

const filterSettings = {
 type: "Menu",
 ignoreAccent: true,
 };

  const [sortOptions] = useState({
    field: 'id', 
    direction: 'Ascending',
  });
  const addBGCComponent =(a)=> {
    console.log(a);
    return (
      <div>
    <Link to="/reqDetailComp">Meenakshi</Link>
  
      </div>
    );
  };
  
  // const [userData, setuserData] = useState();

  // useEffect(() => {
  //   const userData = axios
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .then(data1 => {
  //       const data = data1.data;
  //       setuserData([userData, ...data]);
  //     });
  // }, []);

  const [data, setData] = useState("");

  const getAllData = () => {

    axios

      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        console.log(response.data);

        setData(response.data);

      })

      .catch((error) => {

        console.log(error);

      });

  };

  useEffect(() => {

    getAllData();

  }, []);
  

  return (
    <GridComponent
      dataSource={data}
      filterSettings={filterSettings}
      allowFiltering={true}
      height={273}
      allowPaging={true}
      pageSettings={pageOptions}
      allowSorting={true}
      sortSettings={sortOptions}
    >
      <ColumnsDirective>
        <ColumnDirective field="id" width="100" textAlign="Right" />
        <ColumnDirective template={data => addBGCComponent(data)}
            field="name"
            width="100"
            textAlign="Right" />
        <ColumnDirective field="username" width="100" textAlign="Right" />
        <ColumnDirective
          field="email"
          width="100"
          format="C2"
          textAlign="Right"
        />
        <ColumnDirective field="website" width="100" />
      </ColumnsDirective>
      <Inject services={[Filter, Page, Sort]} />
    </GridComponent>
  );
}

export default OverviewDataGrid;