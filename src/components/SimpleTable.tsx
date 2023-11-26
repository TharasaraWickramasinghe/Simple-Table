import "../styles/simpletable.css"


type column = {
    header: string
    field: string
    width: number
    cellRenderer?: (row: any) => JSX.Element
    headerColor? : string
}


type simpleTableProps = {
    columnDef : column[]
    data : any[]
    tittle : string
    tHeadBgColor? : string
    onRowClick?: (row : any) => void 
}

function SimpleTable({columnDef, data, tittle, tHeadBgColor, onRowClick } : simpleTableProps): JSX.Element {
    return(
        <div className="sampletable-wrapper">
            <h1 className="table-tittle">{tittle}</h1>
            
            <table className="sampletable">
                
                <thead>
                {
                    columnDef.map((col, index) => {
                        if(col.headerColor){
                            return <th className="sampletable-th" style={{ minWidth: col.width, backgroundColor: col.headerColor }} key={index}> {col.header} </th>
                        }else{
                            return <th className="sampletable-th" style={{ minWidth: col.width, backgroundColor: tHeadBgColor ? tHeadBgColor : '#e6e5e5', }} key={index}> {col.header} </th>
                        }
                    }
                    )
                }
                </thead>
                <tbody>
                    {
                        data.map((row, index) => (
                            <tr className="sampletable-tr" key={index} onClick={() => onRowClick && onRowClick(row)}>
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