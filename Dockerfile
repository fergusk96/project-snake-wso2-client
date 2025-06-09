FROM node:18-alpine

ARG USER=asgusr
ARG USER_ID=10001
ARG USER_GROUP=asggrp
ARG USER_GROUP_ID=10001
ARG USER_HOME=/home/app

RUN addgroup -S -g ${USER_GROUP_ID} ${USER_GROUP} \
    && adduser -S -D -h ${USER_HOME} -G ${USER_GROUP} -u ${USER_ID} ${USER}

WORKDIR ${USER_HOME}

# Copy all files needed for install (including .yarn/cache, .yarn/releases, etc.)
COPY --chown=${USER}:${USER_GROUP} . .

# Enable corepack and prepare yarn
RUN corepack enable && corepack prepare yarn@4.5.0 --activate

# Set a non-root user
USER ${USER_ID}

# Install dependencies
RUN yarn install --immutable

# Build the app
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]