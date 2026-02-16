export function Register(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(`Registering with username: ${username} and password: ${password}`);
    users.push({username, password});
    localStorage.setItem('users', JSON.stringify(users));
}

export function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(`Logging in with username: ${username} and password: ${password}`);
    const user = users.find(u => u.username === username && u.password === password);
    return user;
}