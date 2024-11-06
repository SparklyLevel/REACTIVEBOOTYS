import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]); // Состояние для хранения пользователей
    const [loading, setLoading] = useState(true); // Состояние для индикации загрузки
    const [error, setError] = useState(null); // Состояние для ошибок

    useEffect(() => {
        // Функция для получения списка пользователей
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://server-nqp5.onrender.com/users'); // URL вашего API
                setUsers(response.data); // Устанавливаем данные пользователей в состояние
                setLoading(false);
            } catch (err) {
                setError('Ошибка при загрузке данных пользователей');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Загрузка...</p>; // Показать индикатор загрузки
    if (error) return <p>{error}</p>; // Показать сообщение об ошибке

    return (
        <div>
            <h2>Список пользователей</h2>
            <ul>
               {/* {users?.map(user => (
                    <li key={user?.id}>
                        <p>Имя: {user?.name}</p>
                        <p>Возраст: {user?.age}</p>
                        <p>Дата рождения: {user?.birth_date}</p>
                        <p>Наличие пениса: {user?.IsFemboy ? 'Да' : 'Нет'}</p>
                    </li>
                ))}*/}
            </ul>
        </div>
    );
};

export default UserList;
