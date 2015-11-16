<?php
	//$version = "< 1.0.5";
    $android = $_POST['android'];
    $log = addslashes($_POST['log']);
    $data = $_POST['data'];
    $model = addslashes($_POST['model']);
    
   /* if ( isset($_POST['version'] )
    	$version = $_POST['version'];*/
        
    $sql = "INSERT INTO log(modello, versioneAndroid, log, data) VALUES ('$model', '$version', '$android', '$log', '$data')";
    
    require "connection.php";
    if (mysql_query($sql))
        echo "ok";
    else
        echo "nok";
?>
