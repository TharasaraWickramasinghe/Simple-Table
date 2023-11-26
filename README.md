# Simple Table

## Assumptions
1. If render method is not provided for a particular column definition, field should be exactly match with the key of a data object.
   <br>
``Example: "Employee" column field "employee_name" is exactly matching with the key "employee_name" in the data set`` 
2. Column width Should be given in pixels

## How to use
First import the SampleTable component from components folder
```js
import SampleTable from '@/components/SampleTable';
```
Next, define an array of objects which defines the column characteristic.
each column should contain `header`, `field` and `width` properties. and can have a optional properties called `cellRenderer` which is a function that returns a react component and `headerColor` to change the background colour of header. It can be used to change the background colour of the header one by one.

`See the example below.`

```js
  const cols = [
    {header: 'Employee', field: 'employee_name', width: 200,},
    {header: 'EMP Id', field: 'emp_id', width: 100},
    {header: 'Duration', field: 'duration', width: 200},
    { header:'Leave Type', field: 'leave_type',  width: 200,},
    {header: 'Reason', field: 'reason', width: 200},
    {header: 'Manager Name', field: 'manager_name', width: 200, headerColor: '#CFD16F'},
    { 
      header: 'Manager Decision', 
      width: 200, field: 'manager_decision', 
      cellRenderer : (row: any) => {
        return (
          <Badge color="#2b63d2">{row.manager_decision}</Badge> 
        )
      }, 
      headerColor: '#8990B7'
    }
  ]
```

you can use render method to customize the cell content. The render method will receive the row data as a parameter and return a react component.

Next, add the SampleTable component to your component with these mandatory parameters `columnDef` and `data`  as fallowing example. Furthermore, tittle parameter use to Give the tittle for table and tHeadBgColor parameter is used to change the colour of all table headers at once. The onRowClick function can get any data regarding the clicked row when the user clicks on the row.
```js
function ExampleComponent() {  
  return (
    <main>
        <SimpleTable columnDef={cols} data={data} tittle={tittle} tHeadBgColor={tHeadColor} onRowClick={onRowClick} />
    </main>
  )
}
```



