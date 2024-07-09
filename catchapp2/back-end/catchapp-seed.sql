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

INSERT INTO areas (name, title, latitude, longitude, description, picture_url)
VALUES ('tensleep',
        'Ten Sleep, WY', 
         '44.03', 
         '-107.45', 
        'Ten sleep canyon is a limestone sport paradise! Expect pockets, edges, and flakes galore. Many crags dot both sides of the canyon, making for pleasantly shaded climbing to be found all summer long.', 
        'https://mojagear.com/wp-content/uploads/2015/01/preview.jpg'),

        ('rifle', 
         'Rifle, CO',
          '39.54', 
          '-107.79', 
         'Although Rifle canyon is only a couple of miles from end to end, dont be fooled - hundreds of pristine lines await. Get ready to try hard and dont forget your kneebar pad!', 
         'https://www.splitterchoss.com/wp-content/uploads/2014/03/derek-bite-the-bullet.jpg'),

        ('squamish', 
        'Squamish, BC', 
         '49.7', 
         '-123.16', 
        'Squamish is a certified mecca of granite climbing. Whether bouldering, trad, or sport is your thing all will find countless 5 star climbs at this world class destination.', 
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