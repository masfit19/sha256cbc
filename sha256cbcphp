<?php
function enkripinew( $string, $action = 'e' ) {
    $secret_key = 'Menc0b4Bertah4n!';
    $secret_iv = 'Te4m53sceT_';
 
    $output = false;
    $encrypt_method = "AES-256-CBC";
    $key = hash( 'sha256', $secret_key );
    $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );
 
    if( $action == 'e' ) {
        $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
    }
    else if( $action == 'd' ){
        $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
    }
 
    return $output;
}

$enc = enkripinew('rapid123', 'e');
echo 'enkripsi: '.$enc.'<br>'; //dWJNOW1nZytsMkx0NXlYTmpudWtqUT09
$dec = enkripinew($enc, 'd');
echo 'dekripsi: '.$dec; //rapid123
