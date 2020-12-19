<?php

    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $name = trim($_POST['name']);
    $dt = date('Y-m-d H:i:s');
    
    $http_code=200;
    
    if ($email == '' || $phone == '' || $name == '') {
        $response_message = 'Заполните поля';
        $response_code = 1;
        $http_code = 400;
    }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response_message = 'Введите коректный email адрес';
        $response_code = 2;
        $http_code = 400;      
    }
    else {
        file_put_contents('apps.txt', "$dt $email $phone $name\n", FILE_APPEND);
        $response_message = 'OK';
        $response_code = 0;
    }

    header('Content-Type: application/json');
    http_response_code($http_code);

    $response = array(
       'response'=>array(
               'message' => $response_message,
               'code' => $response_code
        ),
        'payload'=>array(
            'email'=>$email,
            'phone'=>$phone,
            'name'=>$name
        ),
        'info'=>array(
            'ip'=>$_SERVER['REMOTE_ADDR'],
            'timestamp'=>$dt
        )
    );

echo(json_encode($response));

?>