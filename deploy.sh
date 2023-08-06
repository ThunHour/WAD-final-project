#!/bin/sh
set -e
echo "Reatart all commit"
git restore .
echo "pulling code"
git pull

echo "stop all service on docker"
docker compose down

echo "clean all the server"
docker system prune -af

echo "start all service"
docker compose up -d

echo "Completed deploying" 

echo "Restart server"

systemctl restart nginx