FROM node:8.12.0-alpine
LABEL maintainer="Kane 'kawaii' Valentine <kane.valentine@shuppet.com>"

WORKDIR /opt/shuppet.com/
ADD ${PWD} ${PWD}

RUN npm install
CMD ["npm", "start"]
