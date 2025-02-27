CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Marissa Singleton','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/995/fff/?text=user1','2020-07-07T05:47:32 +07:00'),
(2,'Lakeisha Jarvis','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/931/fff/?text=user2','2020-05-12T07:52:28 +07:00'),
(3,'Ward Lane','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/747/fff/?text=user3','2021-06-13T05:25:20 +07:00'),
(4,'Marylou Medina','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/864/fff/?text=user4','2020-09-14T12:07:45 +07:00'),
(5,'Odessa Holcomb','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/909/fff/?text=user5','2020-09-04T03:58:06 +07:00'),
(6,'Marsh Potter','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/895/fff/?text=user6','2021-05-05T04:30:56 +07:00'),
(7,'Janelle Stone','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/730/fff/?text=user7','2020-02-03T01:10:34 +08:00'),
(8,'Carrie Allen','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/823/fff/?text=user8','2020-12-01T06:20:28 +08:00'),
(9,'Delacruz Hawkins','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/850/fff/?text=user9','2020-11-10T04:56:50 +08:00'),
(10,'Antoinette Gallegos','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/725/fff/?text=user10','2020-02-27T08:03:50 +08:00');