#!/bin/sh
set -e
cd 'D:\project\project_kit\web\wad final project\admin-ssh'
ng build --configuration production
cd ..
cd 'D:\project\project_kit\web\wad final project\frontend'
ng build --configuration production
cd 'D:\project\project_kit\web\wad final project'

git add .
git commit -m "new deploy"
git push