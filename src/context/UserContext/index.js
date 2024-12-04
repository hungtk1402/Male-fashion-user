import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
    })

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user])

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    const updateProfile = (updateUserData, setMessage, setMessageType) => {
        // lấy danh sách người dùng từ localStorage
        const users = JSON.parse(localStorage.getItem('users')) || []

        // kiểm tra nếu email mới đã tồn tại trong danh sách users nhưng không phải là người dùng hiện tại
        const emailExists = users.some(u => u.email === updateUserData.email && u.email !== user.email)
        if (emailExists) {
            setMessage('Email đã tồn tại, vui lòng sử dụng email khác')
            setMessageType('error')
            return
        }

        // Nếu email không tồn tại, tiếp tục cập nhật thông tin
        const updateUser = { ...user, ...updateUserData }
        setUser(updateUser)

        // Cập nhật thông tin người dùng trong localStorage
        localStorage.setItem('user', JSON.stringify(updateUser))

        // Tìm vị trí người dùng hiện tại trong localStorage
        const updateUsers = users.map(u => {
            if (u.email === user.email) {
                return updateUser
            }
            return u
        })

        // cập nhật lại danh sách người dùng trong localStorage
        localStorage.setItem('user', JSON.stringify(updateUsers))
        setMessage('Cập nhật thông tin thành công')
        setMessageType('success')
    }

    const changePassword = (currentPassword, newPassword, setMessage, setMessageType) => {
        if (currentPassword === user.password) {
            const updatedUser = { ...user, password: newPassword };
            setUser(updatedUser);

            // Cập nhật mật khẩu người dùng hiện tại trong localStorage
            localStorage.setItem('user', JSON.stringify(updatedUser));

            // Lấy danh sách người dùng từ localStorage và cập nhật mật khẩu
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const updatedUsers = users.map(u => {
                if (u.email === user.email) {
                    return updatedUser;  // Cập nhật mật khẩu của người dùng
                }
                return u;
            });

            // Cập nhật lại danh sách người dùng trong localStorage
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            setMessage('Password changed successfully!');
            setMessageType('success');

        } else {
            setMessage('Current password is incorrect!');
            setMessageType('error');
        }
    }

    return (
        <UserContext.Provider value={{ user, login, logout, updateProfile, changePassword }}>
            {children}
        </UserContext.Provider>
    )
}