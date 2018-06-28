<?php
    if(isset($_POST["req"])) {
        if ($_POST['req'] == 'filelist') {
            $dir = $_POST['folder'];
            $list = scandir($dir);
            echo json_encode($list);
        }
    }
?>