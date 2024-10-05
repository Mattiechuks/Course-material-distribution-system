'use client';

import React from 'react';
import StudentViewTable from '../../../../components/StudentViewTable';

const SwitchViewsStudentsPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#1c1c1c', color: '#fff', minHeight: '100vh' }}>
      <h1>Switch Views - Student</h1>
      <StudentViewTable />
    </div>
  );
};

export default SwitchViewsStudentsPage;
