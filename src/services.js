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

export function getRandomScripture() {
    const randomIndex = Math.floor(Math.random() * inspirationalScripture.length);
    return inspirationalScripture[randomIndex];
}


  const inspirationalScripture = [
    {Reference: "John 3:16", Text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."},
    {Reference: "Acts 16:31", Text: "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house."},
    {Reference: "Genesis 2:24", Text: "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh."}
  ]