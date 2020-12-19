## Run

```
docker run -d -p 80:80 --name my-apache-php-app -v "$PWD"/html:/var/www/html php:7.2-apache
```

## Use

http://localhost/index.html