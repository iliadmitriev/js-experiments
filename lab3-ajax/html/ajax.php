<?php

header('Content-Type: application/json');

$response = array(
    'response'=>array(
            'message' => 'OK',
            'code' => 0
        ),
    'payload'=>'',
    'info'=>array(
        'ip'=>$_SERVER['REMOTE_ADDR']
    )
    );

echo(json_encode($response));

?>