cd ~/production_project
npm run build:prod apiUrl=https://blogapp.olegskar.ru/api

rm -rf ~/../var/www/production_project/html
mv ~/production_project/build ~/../var/www/production_project/html