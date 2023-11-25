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
each column should contain `header`, `field` and `width` properties. and can have a optional property called `cellRenderer` which is a function that returns a react component. 

`See the example below.`

```js
  const cols = [
    { header: 'Employee', field: 'employee_name', width: 200 },
    { header: 'EMP ID', width: 100, field: 'emp_id' },
    { header: 'Duration', width: 200, field: 'duration' },
    { header: 'Leave Type', width: 200, field: 'leave_type'},
    { header: 'Reason', width: 200, field: 'reason' },
    { header: 'Manager Name', width: 200, field: 'manager_name' },
    { 
      header: 'Manager Decision', 
      width: 200, field: 'manager_decision', 
      cellRenderer : (row: any) => {
        return (
          <Badge color="#2b63d2">{row.manager_decision}</Badge> 
        )
      }
      }
  ]
```

you can use render method to customize the cell content. The render method will receive the row data as a parameter and return a react component.

Next, add the SampleTable component to your component with these mandatory parameters `columnDef` and `data`. as fallowing example.
```js
function ExampleComponent() {  
  return (
    <main>
        <SimpleTable columnDef={cols} data={data} />
    </main>
  )
}


