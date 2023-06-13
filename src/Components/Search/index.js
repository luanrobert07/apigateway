import React, { useState, useEffect } from 'react';
import jsonData from './data.json';
import './style.css';

const GatewaySearch = () => {
  const [searchId, setSearchId] = useState('');
  const [gateway, setGateway] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (searchId === '') {
      setGateway(null);
      setNotFound(false);
    }
  }, [searchId]);

  const handleSearch = () => {
    const foundGateway = jsonData.gateways.find(gateway => gateway._id === searchId);
    if (foundGateway) {
      setGateway(foundGateway);
      setNotFound(false);
    } else {
      setGateway(null);
      setNotFound(true);
    }
  };

  return (
    <div className='teste'>
      <div className='search'>
        <div>
          <input
            type="text"
            placeholder="Search by ID"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          {notFound ? (
            <h2 className='text'>Nenhum ID correspondente</h2>
          ) : gateway && (
            <div className='View'>
              <h2>Gateway Details</h2>
              <p>ID: {gateway._id}</p>
              <p>Name: {gateway.name}</p>
              <h3>Devices:</h3>
              {gateway.devices.map(device => (
                <div key={device._device}>
                  <p>Device ID: {device._device}</p>
                  <p>Model: {device.modelId}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GatewaySearch;
