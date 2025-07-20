// src/pages/Login.jsx
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4  bg-black/40 backdrop-blur-sm0">
      <div className="bg-white p-8 rounded-4xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Авторизация</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-2xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border rounded-2xl"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white rounded-4xl hover:bg-[#40739e] bg-[#353b48] transition"
          >
            Войти
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Нет аккаунта?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
        <hr className="my-6 border-gray-200 sm:mx-auto"/>
        <p className='mt-2 text-center text-sm'>
            <Link to='/#' className="text-blue-600 hover:underline">
                Вернуться на главную
            </Link>
        </p>
      </div>
    </div>
  );
}
