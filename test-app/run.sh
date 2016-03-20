#!/bin/bash

set -e

#export VELOCITY_DEBUG=1
export JASMINE_LOG_LEVEL=debug
#export LONG_RUNNING_CHILD_PROCESS_LOG_LEVEL=debug

export JASMINE_PACKAGES_TO_INCLUDE_IN_UNIT_TESTS=package-to-include
meteor test --settings settings.json --port 9000 --driver-package sanjo:jasmine --full-app
