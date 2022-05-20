<?php 



if(!empty($_FILES))
{
	move_uploaded_file($_FILES['uploadFile']['tmp_name'], 'img/'.$_FILES['uploadFile']['name']);
	echo "OKKKKKKKKKKKK";
}




?>