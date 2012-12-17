<?php

$root = dirname(dirname(__FILE__));


$dir = $_GET['node'] ? $_GET['node'] : '';
$dir = $dir == 'root' ? '' : $dir;

$directory = $root.'/'.$dir;
$directory = str_replace('//','/', $directory);

if (isset($_GET['token'])){
        $arr = array(
            'name' => $_GET['node'],
            'size' => "---------",
            'id' => $_GET['node'],
            'leaf' => true
        );
    
    echo json_encode( array($arr));
} else {

    $res = array();


    $iterator = new DirectoryIterator($directory);
    foreach ($iterator as $fileinfo) {
        $fname =  $fileinfo->getFilename();
        if (in_array($fname, array('.','..'))) continue;
        $arr = array(
            'name' => $fileinfo->getFilename(),
            'size' => $fileinfo->getSize(),
            'id' => $dir.'/'.$fileinfo->getFilename(),
            'leaf' => $fileinfo->isFile()
        );
        $res[] = $arr;
    }

    echo json_encode(array('name'=>'.', 'children' => $res));
}
