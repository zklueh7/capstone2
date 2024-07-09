CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  looking_for_partners TEXT NOT NULL,
  climbing_type TEXT NOT NULL,
  experience_level TEXT NOT NULL,
  picture_url TEXT
);

CREATE TABLE areas (
  name VARCHAR(25) PRIMARY KEY,
  title TEXT NOT NULL,
  latitude TEXT NOT NULL,
  longitude TEXT NOT NULL,
  description TEXT NOT NULL,
  picture_url TEXT
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  message_text TEXT NOT NULL,
  area TEXT NOT NULL,
  from_user TEXT NOT NULL,
  time_posted TEXT NOT NULL
);