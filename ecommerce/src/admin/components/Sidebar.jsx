
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-logo">Admin</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products"className={({ isActive }) =>isActive ? "sidebar-item active" : "sidebar-item"}>Products</NavLink>
        </li>
        <li>
          <NavLink to="/admin/add-product" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item" }>Add Product</NavLink>
        </li>
      </ul>
    </div>
  );
};


export default Sidebar;

// const Sidebar = () => {
//   return (
//     <aside style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
//       <nav>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '10px' }}>
//             <NavLink to="/admin/dashboard" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Dashboard</NavLink>
//           </li>
//           <li>
//             <NavLink to="/admin/manage-posts" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>Manage Posts</NavLink>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

