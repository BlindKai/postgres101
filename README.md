## Before getting started

1) Use `docker compose up -d` to bootstrap a clear database before running any tests

2) Use any DB viewer you like to connect to the server using these credentials:

```
Host:       host.docker.internal
Port:       5434
Database:   sample
User:       postgres
Pass:       postgres
```

\* - in case if you need to modify any of these, make sure you modify `docker-console.yml` as well.