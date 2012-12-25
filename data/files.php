<?php

// Root folder of our viewer
$root = dirname(dirname(__FILE__));

// Node requested from extJs tree.
$node = $_GET['node'] ? $_GET['node'] : '';

// When tree loads store first time
// it passes 'root' as a value of requested node.
if ($node == 'root') {
    $path = '';
} else {
    // In all other cases node contains relative path to the directory.
    $path = $node;
}

// Absolute path on server
$directory = $root.'/'.$path;
// A litle bit security
$directory = str_replace('..','', $directory);
$directory = str_replace('//','/', $directory);

// When we click at Edit button application send 
// request with key 'token'.
// As example we just modify name and size of the file.
if (isset($_GET['token'])){
    $updatedNode = array(
        'name' => "Path: ".$_GET['node'],
        'size' => "&lt; &lt; Edited &gt; &gt;",
        'id' => $_GET['node'],
        'leaf' => true
    );
    echo json_encode(array($updatedNode));
} else {
    // Here we build array with content of the requested category.
    $res = array();
    $iterator = new DirectoryIterator($directory);
    foreach ($iterator as $fileinfo) {
        $fname =  $fileinfo->getFilename();
        if (in_array($fname, array('.','..'))) continue;
        $arr = array(
            'name' => $fileinfo->getFilename(),
            'size' => $fileinfo->getSize(),
            'id' => $path.'/'.$fileinfo->getFilename(),
            'leaf' => $fileinfo->isFile()
        );
        $res[] = $arr;
    }
    echo json_encode(
        array(
            'children' => $res
        )
    );
}
