#!/bin/bash

#export JASMINE_LOG_LEVEL=debug

meteor test-packages --driver-package=sanjo:jasmine package-to-test --port 9999
