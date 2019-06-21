# WORD COUNT - Document
[View Site](http://45.32.109.134/)
 | [Markdown Reference](https://guides.github.com/features/mastering-markdown/#examples)
<br>
## Sync
cd /var/www/html; bash gitsync

## backup db
mysqldump -u root -pxxx__X444__ word_count > /media/sf_www/word_count/sql/db.sql

## import db
mysql -u root -pxxx__X444__ word_count < /media/sf_www/word_count/sql/db.sql