<?php

function reverse($number)
{
    $result = 0;

    while( $number > 0 )
    {
        $result = ( $result * 10 ) + ( $number % 10 );
        $number = intval( $number / 10 );
    }

    return $result ;
}

echo reverse(20);

?>