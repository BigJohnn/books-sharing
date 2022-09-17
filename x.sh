#!/bin/bash

npm run build

scp -r dist/* pi:/var/www/html
