import "../styles/simpletable.css"


type column = {
    header: string
    field: string
    width: number
    cellRenderer?: (row: any) => JSX.Element
}


type simpleTableProps = {
    columnDef : column[]
    data : any[]
    tittle: string
}

function SimpleTable({columnDef, data, tittle} : simpleTableProps): JSX.Element {
    return(
        <div className="sampletable-wrapper">
            <h1 className="table-tittle">{tittle}</h1>
            <table className="sampletable">
                <thead className="sampletable-thead">
                {
                    columnDef.map((col, index) => (  
                            <th className="sampletable-th" style={{ minWidth: col.width }} key={index}> {col.header} </th> 
                    ))
                }
                </thead>
                <tbody>
                    {
                        data.map((row, index) => (
                            <tr className="sampletable-tr" key={index}>
                                {
                                    columnDef.map((cell, index) => {
                                        if(cell.cellRenderer){
                                            return <td className="sampletable-td" style={{ minWidth: cell.width }} key={index}> {cell.cellRenderer(row)}</td>
                                        }
                                        return <td className="sampletable-td" style={{ minWidth: cell.width }} key={index}>{row[cell.field]}</td>
                                    } 
                                    )
                                }
                            </tr>
                        
                            ))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default SimpleTable