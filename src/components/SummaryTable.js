import React from 'react';

function SummaryTable({ data }) {
    return (
        <div className="mt-3">
            <h4>Summary</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Element Type</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([type, count]) => (
                        <tr key={type}>
                            <td>{type}</td>
                            <td>{count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SummaryTable;