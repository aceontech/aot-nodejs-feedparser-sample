#!/bin/bash
imageName=feedparser
containerName=my-container

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run -d -p 3000:3000 --name $containerName $imageName