import React from 'react';

function DetailedTable({ data }) {
    return (
        <div className="mt-3">
            <h4>Detailed View</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Element Type</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.length.toFixed(2)} km</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DetailedTable;