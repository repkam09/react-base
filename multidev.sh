#!/bin/bash
yarn
screen -d -S react-base-styleguide -m yarn styleguidist server
screen -d -S react-base-cra-srv -m yarn start
screen -list