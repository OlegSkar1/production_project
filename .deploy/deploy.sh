cd ~/production_project
npm run build:prod

rm -rf ~/../var/www/production_project/html
mv ~/production_project/build ~/../var/www/production_project/html