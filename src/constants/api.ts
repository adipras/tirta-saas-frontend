export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  CUSTOMERS: {
    LIST: '/customers',
    CREATE: '/customers',
    GET: (id: string) => `/customers/${id}`,
    UPDATE: (id: string) => `/customers/${id}`,
    DELETE: (id: string) => `/customers/${id}`,
  },
  INVOICES: {
    LIST: '/invoices',
    CREATE: '/invoices',
    GET: (id: string) => `/invoices/${id}`,
    UPDATE: (id: string) => `/invoices/${id}`,
    DELETE: (id: string) => `/invoices/${id}`,
  },
  PAYMENTS: {
    LIST: '/payments',
    CREATE: '/payments',
    GET: (id: string) => `/payments/${id}`,
  },
  WATER_USAGE: {
    LIST: '/water-usage',
    CREATE: '/water-usage',
    GET: (id: string) => `/water-usage/${id}`,
  },
  SUBSCRIPTION: {
    LIST: '/subscriptions',
    CREATE: '/subscriptions',
    GET: (id: string) => `/subscriptions/${id}`,
  },
  WATER_RATES: {
    LIST: '/water-rates',
    CREATE: '/water-rates',
    GET: (id: string) => `/water-rates/${id}`,
  },
};