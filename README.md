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


# HMVC

	https://stackoverflow.com/questions/30865998/how-to-implement-hmvc-in-codeigniter-3-0/31008225#31008225
	
    ## error
    * Call to undefined method MY_Loader::_ci_object_to_array()
	https://stackoverflow.com/a/41786939