#!/bin/bash

set -e

meteor test --once --driver-package dispatch:mocha-phantomjs --full-app --settings settings.json --port 9000
