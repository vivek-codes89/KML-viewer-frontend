import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import KmlMap from './components/KmlMap';
import SummaryTable from './components/SummaryTable';
import DetailedTable from './components/DetailedTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [kmlData, setKmlData] = useState(null);
    const [showSummary, setShowSummary] = useState(false);
    const [showDetailed, setShowDetailed] = useState(false);

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">KML Viewer</h1>
            <div className="row">
                <div className="col-md-4">
                    <FileUpload setKmlData={setKmlData} />
                    <div className="mt-3">
                        <button 
                            className="btn btn-primary me-2"
                            onClick={() => setShowSummary(!showSummary)}
                        >
                            Summary
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => setShowDetailed(!showDetailed)}
                        >
                            Detailed
                        </button>
                    </div>
                    {showSummary && kmlData && (
                        <SummaryTable data={kmlData.summary} />
                    )}
                    {showDetailed && kmlData && (
                        <DetailedTable data={kmlData.detailed} />
                    )}
                </div>
                <div className="col-md-8">
                    <KmlMap kmlData={kmlData} />
                </div>
            </div>
        </div>
    );
}

export default App;