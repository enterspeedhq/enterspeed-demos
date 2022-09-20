import React from 'react';

export default function EsStatus({ EsStatusData }) {
  return (
    <h1>Status: {EsStatusData.meta.status}</h1>
  );
}
