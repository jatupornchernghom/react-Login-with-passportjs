import axios from 'axios';



axios.defaults.withCredentials = true; // Set axios to send credentials with requests and allows cookies 

export interface User {
  id: number;
  username: string;
}

export interface LoginResponse {
  message: string;
  user: User;
}

class AuthService {
  async register(username: string, password: string): Promise<{ message: string }> {
    const response = await axios.post('http://localhost:5000/api/auth/register', {
      username,
      password
    });
    return response.data;
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password
    });
    return response.data;
  }

  async logout(): Promise<{ message: string }> {
    const response = await axios.get('http://localhost:5000/api/auth/logout');
    return response.data;
  }

  async getCurrentUser(): Promise<{ user: User | null }> {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/profile');
      return response.data;
    } catch (error) {
      return { user: null };
    }
  }
}

export default new AuthService();
