import React, { useState, useEffect } from "react";
import { AddBox, ArrowDownward } from "@material-ui/icons";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { forwardRef } from "react";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  export default function Customerlist() {
    const[customers, setCustomers]= useState([]);

    useEffect(()=>{
        getCustomers();
    }, [])

    const columns =[
        {title:'firstname', field: 'firstname'},
        {title:'lastname',field: 'lastname'},
        {title:'streetaddress',field: 'streetaddress'},
        {title:'postcode',field: 'postcode'},
        {title:'city',field: 'city'},
        {title:'email',field: 'email'},
        {title:'phone',field: 'phone'},
    ]
    const getCustomers =()=>{
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data=>setCustomers(data.content))
        .catch(err=>console.error(err))
    }

    return(
    <div>
        <MaterialTable
            icons ={tableIcons}
            title="Customers"
            data={customers}
            columns={columns}
            options={{ sorting: true, search: true}}
            
        />
    </div>
    );
}
