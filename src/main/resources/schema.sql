CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(255) DEFAULT user, -- e.g., "ROLE_USER,ROLE_ADMIN"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS links (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    owner_id BIGINT NOT NULL,
    is_private BOOL NOT NULL DEFAULT false,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    original_url TEXT NOT NULL,
    url TEXT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert default roles
-- INSERT INTO users (fname, lname, username, email, password) VALUES ('Nobel', 'Okelekele', 'bsoft', 'okelekelenobel@gmail.com', 'admin');