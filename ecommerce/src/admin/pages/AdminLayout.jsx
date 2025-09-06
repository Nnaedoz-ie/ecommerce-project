
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';



const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminLayout;

// const AdminLayout = () => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <main style={{ flexGrow: 1, padding: '20px' }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;
