## Firestorm React Native


## Development

- Run the typescript compiler

```sh
yarn dev
```

- Run react-native

```
react-native run-ios
```

#### Environemnt variables

We are using [react-native-config](https://github.com/luggit/react-native-config) and we need to have some environment variables.

If you are using [firestorm_elixir](https://github.com/dailydrip/firestorm_elixir),y ou should set it in the `BACKEND` variable, set it as `elixir`.

If you are using [firestorm_typescript](https://github.com/dailydrip/firestorm_typescript), you should set it in the `BACKEND` variable, set is as JS.

We need this because the socket is different for both, you can see more information on the Graphql client.

```
WEBSOCKET_API_URL=ws://localhost:4000/socket
GRAPHQL_API_URL=http://localhost:4000/graphql
BACKEND=elixir
```

# License

All of the codebases are MIT licensed unless otherwise specified.
