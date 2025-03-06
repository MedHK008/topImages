## Build and Run

Build via command:
```sh
docker-compose up --build
```

After running, execute the command to access the Mongo shell:
```sh
docker exec -it mongodb mongosh
```

Check the database named `flickr` that contains the collection `images`:
```sh
show dbs
use flickr
show collections
```
