FROM node:17.6.0-alpine3.15 as base

WORKDIR /var/www/project

RUN apk update

FROM base as local

CMD ["tail", "-f", "/dev/null"]

FROM base as dev

COPY ./ /var/www/project

RUN npm ci

CMD ["tail", "-f", "/dev/null"]

FROM base as production

COPY ./ /var/www/project

RUN npm ci -- production

CMD ["npm", "run", "start"]