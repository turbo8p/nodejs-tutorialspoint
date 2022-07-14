#!/bin/bash

# exit when any command fails
set -eE

cd /var/docker/nodejs-tutorialspoint
docker-compose -f docker-compose.prod.yaml up -d