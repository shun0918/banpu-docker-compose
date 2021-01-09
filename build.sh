#!bin/sh

# 全てのイメージをビルドしたい場合
# sh build.sh all

# webは時間がかかるので、端折りたい時は、
# sh build.sh

docker build -t banpu/banpu-nginx:latest ./nginx
docker build -t banpu/banpu-varnish:latest ./varnish

option=${1:-} #第一引数を取得できなければ、から文字を渡す

if [ "$option" == "all" ]
then
    echo "pulling banpu-web..."
    git pull $GITHUB_WEB_REPOSITORY_PATH
    echo "building banpu-web..."
    docker build -t banpu/banpu-web:latest ./web
fi