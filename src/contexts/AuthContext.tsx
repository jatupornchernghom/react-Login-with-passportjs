import React, { createContext, useState, useEffect, ReactNode } from 'react';
import authService, { User } from '../services/auth.service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isLoginSesion:boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoginSesion: false,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoginSesion, setisLoginSesion] = useState(false)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { user } = await authService.getCurrentUser();
        setUser(user);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, []);

  const login = async (username: string, password: string) => {
    const response = await authService.login(username, password);
    setUser(response.user);
    setisLoginSesion(true)
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setisLoginSesion(false)
  };

  const register = async (username: string, password: string) => {
    await authService.register(username, password);
  };

  return (
    <AuthContext.Provider value={{ user, loading,isLoginSesion, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
