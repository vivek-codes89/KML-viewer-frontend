import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import MapViewer from '../components/MapViewer';

const KMLViewer = () => {
    const [kmlData, setKmlData] = useState(null);

    return (
        <div className="container mt-5">
            <h1 className="text-center">KML File Viewer</h1>
            <FileUploader setKmlData={setKmlData} />
            {kmlData && (
                <>
                    <button className="btn btn-info mt-2" onClick={() => alert(JSON.stringify(kmlData.elements, null, 2))}>
                        Show Summary
                    </button>
                    <button className="btn btn-warning mt-2 ms-2" onClick={() => alert(`Total Line Length: ${kmlData.totalLength}`)}>
                        Show Details
                    </button>
                    <MapViewer kmlData={kmlData} />
                </>
            )}
        </div>
    );
};

export default KMLViewer;
