There probably is a better way to run it locally than building + running with npx.
Something like npm run build (electron .) does for UI.

```shell
npm i

# update code

# build code with changes
npm run build

# run inside dist folder
cd dist
npx -c 'yarle --configFile /Users/tjen/dev/tjen/yarle-config/config.json'
```


or
```shell
npm i

npx . --configFile /Users/tjen/dev/tjen/yarle-config/config-blog.json
```

or
```shell
npm i

# not sure if I have ts-node installed globally...
ts-node src/dropTheRope.ts --configFile /Users/tjen/dev/tjen/yarle-config/config.json
```

also on a M1 mac, IntelliJ uses x64, but command line things use arm64, weird stuff

to get utimes arm64 on a M1 mac:
```shell
git clone https://github.com/baileyherbert/utimes

cd utimes

npm i
npm run build

Then unzip build/stage/.../utimes-v0.0.0-napi-v3-darwin-arm64.tar.gz
Copy to (from error message in yarle output: /Users/tjen/dev/tjen/yarle/node_modules/utimes/lib/binding/napi-v3/utimes.node)
```
