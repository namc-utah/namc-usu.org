# NAMC Website

This repository contains the public-facing website for the National Aquatic Monitoring Center, located in Logan, Utah.

Contact the director if you have questions about this website.

# Developer instructions

1. CLone the repo
2. we use NVM so make sure that's set up
3. `yarn install`
4. `yarn start` will run a development version of the repo 

### Environment variables

This site uses 3 environment variables that you will need to set in respective `.env.development` and `.env.production` files

They take the form:

```
GATSBY_MAPBOX_TOKEN=pk.SOMEMAPTOKEN
GATSBY_PUBLICMAP_API=https://XXXXXXXXXXXX.execute-api.XX-XXXXXX-X.amazonaws.com/prod/api
GATSBY_VERSION=$npm_package_version
```