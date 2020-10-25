#!/bin/bash

# move path
cd /home/ubuntu/docker/deploy

# docker image build
docker build -t pillpet-client ./pillpet-client

# excute deploy.sh
./deploy.sh pillpet-client
