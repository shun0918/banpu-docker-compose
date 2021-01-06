#!bin/sh

docker build -t banpu/banpu-nginx:latest ./nginx
docker build -t banpu/banpu-varnish:latest ./varnish

option=${1:-}
echo $option

if [ "$option" == "all" ]
then
    echo "build banpu-web..."
    docker build -t banpu/banpu-web:latest ./web
fi