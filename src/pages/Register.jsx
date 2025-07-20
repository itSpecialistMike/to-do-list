// src/pages/Register.jsx
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4  bg-black/40 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-4xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded-2xl"
          />
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
            className="w-full px-4 py-3 text-white rounded-4xl hover:bg-[#40739e] bg-[#353b48] transition"
          >
            Отправить
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Войти
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
