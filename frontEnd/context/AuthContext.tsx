'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { authAPI } from '@/lib/api';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'User' | 'Admin';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signup: (data: any) => Promise<any>;
  login: (data: any) => Promise<any>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    try {
      const token = typeof window !== 'undefined' 
        ? localStorage.getItem('token') 
        : null;
      if (!token) {
        setIsLoading(false);
        return;
      }

      const response = await authAPI.getMe();
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const signup = async (data: any) => {
    const { name, email, password, role } = data;
    const response = await authAPI.signup({
      name,
      email,
      password,
      role,
    });
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', response.data.token);
    }
    setUser(response.data.user);
    setIsAuthenticated(true);
    
    return response.data;
  };

  const login = async (data: any) => {
    const response = await authAPI.login(data);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', response.data.token);
    }
    setUser(response.data.user);
    setIsAuthenticated(true);
    
    return response.data;
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        signup,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
