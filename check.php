<?php


                                $str = file_get_contents('index.php');
    $bom = pack('H*','EFBBBF');
                                if (0 === strncmp($str, $bom, 3)) {
                                                echo $file.": BOM detected - file is UTF-8 <br>";

                                }
                                else {
                                                echo $file.": NO BOM detected <br>";
                                }

/*
$str = file_get_contents('index.php');
$bom = pack("CCC", 0xef, 0xbb, 0xbf);
if (0 === strncmp($str, $bom, 3)) {
                echo "index.php: BOM detected - file is UTF-8 <br>";

}
else {
                                                echo "index.php: NO BOM detected <br>";
}
*/
?>
