<?php
function longest($str){
    $str_arr_last = [];
    $str_arr = [];
    for($i=0, $j=$i-1, $c = iconv_strlen ($str, 'UTF-8'); $i<$c; $i++) {
        $str_arr[] = iconv_substr($str, $i, 1, 'UTF-8');
        for($j=0; $j<count($str_arr)-1; $j++) {
            if ( $str_arr[$j] === $str_arr[count($str_arr)-1] ) {
                if ( count($str_arr_last) < count($str_arr)-1 ) {
                    $str_arr_last = $str_arr;
                    unset($str_arr_last[count($str_arr_last)-1]);
                }
                $_str_arr = [];
                for($j++; $j<count($str_arr)-1; $j++) {
                    $_str_arr[] = $str_arr[$j];
                }
                $str_arr = $_str_arr;
                break;
            }
        }
    }
    if ( count($str_arr) < count($str_arr_last) ) {
        $str_arr = $str_arr_last;
    }
    return $str_arr = implode("", $str_arr);
}

echo longest('abcabcbb'), "\n";
?>