import React from 'react';
import { Table as BootStrapTable } from 'react-bootstrap';
import '../../static/scss/table.scss';

const Table = ({header, body}) => {
    return (
        <BootStrapTable striped bordered size='sm' responsive>
            <thead>
                <tr>
                    {
                        header.map(head => (
                            <td key={head.id}>{head.label}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    body.map(rowValue => (
                        <tr>
                            {
                                header.map(columns => (
                                    <td>{rowValue[columns.id]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </BootStrapTable>
    )
}

export default Table;