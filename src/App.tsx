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
import MeterReadingForm from './pages/usage/MeterReadingForm';
import UsageHistory from './pages/usage/UsageHistory';
import InvoiceList from './pages/invoices/InvoiceList';
import InvoiceForm from './pages/invoices/InvoiceForm';
import InvoiceDetails from './pages/invoices/InvoiceDetails';
import SubscriptionTypeList from './pages/subscriptions/SubscriptionTypeList';
import SubscriptionTypeForm from './pages/subscriptions/SubscriptionTypeForm';
import WaterRateList from './pages/water-rates/WaterRateList';
import WaterRateForm from './pages/water-rates/WaterRateForm';
import RateHistory from './pages/water-rates/RateHistory';
import { PaymentList, PaymentForm, PaymentReceipt } from './pages/payments';
import { 
  ReportsDashboard, 
  RevenueReport, 
  CustomerAnalytics,
  PaymentReport,
  UsageReport,
  OutstandingReport
} from './pages/reports';
import { CustomerProfile, CustomerProfileEdit, ChangePassword } from './pages/customer-profile';
import { CustomerInvoiceList, CustomerInvoiceDetail } from './pages/customer-invoices';
import { CustomerPaymentForm, PaymentSuccess } from './pages/customer-payments';
import { CustomerUsageMonitor } from './pages/customer-usage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/login" replace />} />

            {/* Auth Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            
            {/* Admin Routes */}
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
              <Route path="subscriptions" element={<SubscriptionTypeList />} />
              <Route path="subscriptions/create" element={<SubscriptionTypeForm />} />
              <Route path="subscriptions/edit/:id" element={<SubscriptionTypeForm />} />
              <Route path="water-rates" element={<WaterRateList />} />
              <Route path="water-rates/create" element={<WaterRateForm />} />
              <Route path="water-rates/edit/:id" element={<WaterRateForm />} />
              <Route path="water-rates/history" element={<RateHistory />} />
              <Route path="invoices" element={<InvoiceList />} />
              <Route path="invoices/new" element={<InvoiceForm />} />
              <Route path="invoices/:id" element={<InvoiceDetails />} />
              <Route path="invoices/:id/edit" element={<InvoiceForm />} />
              <Route path="payments" element={<PaymentList />} />
              <Route path="payments/new" element={<PaymentForm />} />
              <Route path="payments/:id/edit" element={<PaymentForm />} />
              <Route path="payments/:id/receipt" element={<PaymentReceipt />} />
              <Route path="reports" element={<ReportsDashboard />} />
              <Route path="reports/revenue" element={<RevenueReport />} />
              <Route path="reports/customers" element={<CustomerAnalytics />} />
              <Route path="reports/payments" element={<PaymentReport />} />
              <Route path="reports/usage" element={<UsageReport />} />
              <Route path="reports/outstanding" element={<OutstandingReport />} />
              <Route path="settings" element={<div>Settings Page</div>} />
              <Route path="usage" element={<UsageList />} />
              <Route path="usage/create" element={<MeterReadingForm />} />
              <Route path="usage/edit/:id" element={<MeterReadingForm />} />
              <Route path="usage/:customerId/history" element={<UsageHistory />} />
            </Route>

            {/* Customer Routes */}
            <Route path="/customer" element={
              <PrivateRoute requiredRole="customer">
                <CustomerLayout />
              </PrivateRoute>
            }>
              <Route index element={<CustomerDashboard />} />
              <Route path="dashboard" element={<CustomerDashboard />} />
              <Route path="profile" element={<CustomerProfile />} />
              <Route path="profile/edit" element={<CustomerProfileEdit />} />
              <Route path="profile/change-password" element={<ChangePassword />} />
              <Route path="invoices" element={<CustomerInvoiceList />} />
              <Route path="invoices/:id" element={<CustomerInvoiceDetail />} />
              <Route path="payments/new" element={<CustomerPaymentForm />} />
              <Route path="payments/success" element={<PaymentSuccess />} />
              <Route path="usage" element={<CustomerUsageMonitor />} />
            </Route>

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;