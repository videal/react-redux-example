# roda-react-sse

### Roda + React + Server Sent Events

Sample Roda + React app live updated via EventSource (SSE), useful as project base/boilerplate.


### Setup

```
cd client

npm install
```

on another terminal window:

```
cd server

bundle
```

### Launch (Dev)

```
cd server

./run
```

on another shell:

```
cd client

npm start
```

### Launch (Dev \w foreman)

(or shoreman or alternatives)

```
foreman start
```

### Launch  the completed example
```
git checkout example-complete
```

### Notes

There are several issues that need to be considered. Redux reducers and action creators are 'pure' functions.
You should take care about it.