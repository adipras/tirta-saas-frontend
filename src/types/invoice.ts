export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  customerName: string;
  periodStartDate: string;
  periodEndDate: string;
  usage: number;
  amount: number;
  status: 'paid' | 'unpaid' | 'overdue';
  dueDate: string;
  createdAt: string;
}

export interface InvoiceDetails extends Invoice {
  items: InvoiceItem[];
  paymentHistory: Payment[];
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Payment {
  id: string;
  paymentDate: string;
  amount: number;
  method: string;
}