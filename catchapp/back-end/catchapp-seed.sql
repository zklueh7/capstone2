-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, looking_for_partners, climbing_type, experience_level)
VALUES ('zklueh',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Zoey',
        'Klueh',
        'zklueh@gmail.com',
        'Yes',
        'Sport',
        'Baby'),
        
       ('junebug',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'June',
        'Klueh',
        'jklueh@gmail.com',
        'Yes',
        'Sport',
        'Expert');

INSERT INTO areas (name, latitude, longitude, description, picture_url)
VALUES ('ten sleep', 
        '44.034724', 
        '–107.448023', 
        'endless cragging', 
        'https://mojagear.com/wp-content/uploads/2015/01/preview.jpg'),

        ('rifle', 
        '39.7284', 
        '–107.6881', 
        'yassss knee bars', 
        'https://www.splitterchoss.com/wp-content/uploads/2014/03/derek-bite-the-bullet.jpg'),

        ('wild iris',
        '42.8329',
        '-108.7284',
        'pockets galore',
        'https://windriver.org/wp-content/uploads/2017/12/WildIrisJEdwards_web.jpeg');

INSERT INTO messages (message_text, area, from_user, time_posted)
VALUES ('lets climb!', 
        'rifle', 
        'zklueh', 
        'right meow'),

        ('catch me!', 
        'rifle', 
        'junebug', 
        'l8er');