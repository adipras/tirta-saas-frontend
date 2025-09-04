import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import DashboardLayout from './layouts/DashboardLayout';
import CustomerLayout from './layouts/CustomerLayout';
import Dashboard from './pages/Dashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminLogin from './pages/auth/AdminLogin';
import CustomerLogin from './pages/auth/CustomerLogin';
import PrivateRoute from './components/PrivateRoute';
import CustomerList from './pages/customers/CustomerList';
import UsageList from './pages/usage/UsageList';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/login" replace />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <PrivateRoute requiredRole="admin">
                <DashboardLayout />
              </PrivateRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="customers" element={<CustomerList />} />
              <Route path="customers/new" element={<div>New Customer Form</div>} />
              <Route path="customers/:id" element={<div>Customer Details</div>} />
              <Route path="customers/:id/edit" element={<div>Edit Customer Form</div>} />
              <Route path="invoices" element={<div>Invoices Page</div>} />
              <Route path="payments" element={<div>Payments Page</div>} />
              <Route path="reports" element={<div>Reports Page</div>} />
              <Route path="settings" element={<div>Settings Page</div>} />
              <Route path="usage" element={<UsageList />} />
            </Route>

            {/* Customer Routes */}
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer" element={
              <PrivateRoute requiredRole="customer">
                <CustomerLayout />
              </PrivateRoute>
            }>
              <Route index element={<CustomerDashboard />} />
              <Route path="profile" element={<div>Customer Profile Page</div>} />
              <Route path="invoices" element={<div>Customer Invoices Page</div>} />
              <Route path="payments" element={<div>Customer Payments Page</div>} />
              <Route path="usage" element={<div>Customer Usage Page</div>} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;