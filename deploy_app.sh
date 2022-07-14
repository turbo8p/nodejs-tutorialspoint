#!/bin/bash

# exit when any command fails
set -eE

cd /var/docker/nodejs-tutorialspoint
git fetch && git reset --hard origin/master
docker-compose -f docker-compose.prod.yaml up -d