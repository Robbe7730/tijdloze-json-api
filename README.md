# Tijdloze-JSON-API

## Description

This is (as the name suggests) a JSON API for https://tijdloze.stijnshome.be/ 's database.

## Database schema

### artiest

| Field          | Type         | Null | Key | Default | Extra          |
| -------------- | ------------ | ---- | --- | ------- | -------------- |
| id             | int(11)      | NO   | PRI | NULL    | auto_increment |
| voornaam       | varchar(255) | NO   |     | NULL    |                |
| achternaam     | varchar(255) | NO   |     | NULL    |                |
| land_afkorting | char(3)      | NO   |     | NULL    |                |
| opmerkingen    | text         | NO   |     | NULL    |                |
| url_official   | varchar(255) | NO   |     |         |                |
| url_wikien     | varchar(255) | NO   |     |         |                |
| url_wikinl     | varchar(255) | NO   |     |         |                |
| url_allmusic   | varchar(255) | NO   |     |         |                |
| edit           | tinyint(1)   | NO   |     | 0       |                |

### nummer

| Field          | Type         | Null | Key | Default           | Extra                       |
| -------------- | ------------ | ---- | --- | ----------------- | --------------------------- |
| id             | int(11)      | NO   | PRI | NULL              | auto_increment              |
| artiest_id     | int(11)      | NO   | MUL | NULL              |                             |
| titel          | varchar(255) | NO   |     | NULL              |                             |
| album_id       | int(11)      | NO   | MUL | NULL              |                             |
| exit_huidige   | tinyint(1)   | NO   |     | 0                 |                             |
| lyrics         | text         | NO   |     | NULL              |                             |
| taal_afkorting | char(3)      | NO   |     |                   |                             |
| lead_vocals    | char(1)      | YES  |     | NULL              |                             |
| opmerkingen    | text         | NO   |     | NULL              |                             |
| url_wikien     | varchar(255) | NO   |     |                   |                             |
| url_wikinl     | varchar(255) | NO   |     |                   |                             |
| spotify_id     | varchar(255) | YES  |     | NULL              |                             |
| edit           | tinyint(1)   | NO   |     | 0                 |                             |
| last_update    | timestamp    | NO   |     | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |

### album

| Field        | Type         | Null | Key | Default | Extra          |
| ------------ | ------------ | ---- | --- | ------- | -------------- |
| id           | int(11)      | NO   | PRI | NULL    | auto_increment |
| titel        | varchar(255) | NO   |     | NULL    |                |
| artiest_id   | int(11)      | NO   | MUL | NULL    |                |
| jaartal      | smallint(4)  | NO   |     | NULL    |                |
| url_wikien   | varchar(255) | NO   |     |         |                |
| url_wikinl   | varchar(255) | NO   |     |         |                |
| url_allmusic | varchar(255) | NO   |     |         |                |
| edit         | tinyint(1)   | NO   |     | 0       |                |

### list_entry

| Field    | Type        | Null | Key | Default | Extra          |
| -------- | ----------- | ---- | --- | ------- | -------------- |
| id       | int(11)     | NO   | PRI | NULL    | auto_increment |
| song_id  | int(11)     | NO   | MUL | NULL    |                |
| year     | smallint(4) | NO   | MUL | NULL    |                |
| position | smallint(3) | NO   |     | NULL    |                |

