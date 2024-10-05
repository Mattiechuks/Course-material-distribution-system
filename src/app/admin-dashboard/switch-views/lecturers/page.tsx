'use client';

import React from 'react';
import LecturerViewTable from '../../../../components/LecturerViewTable';

const SwitchViewsLecturersPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#1c1c1c', color: '#fff', minHeight: '100vh' }}>
      <h1>Switch Views - Lecturer</h1>
      <LecturerViewTable />
    </div>
  );
};

export default SwitchViewsLecturersPage;
