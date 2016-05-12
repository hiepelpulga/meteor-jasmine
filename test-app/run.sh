#!/bin/bash

set -e

meteor test --settings settings.json --port 9000 --driver-package dispatch:mocha-browser --full-app
