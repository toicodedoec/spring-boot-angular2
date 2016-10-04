# spring-boot-angular2
Example of integrating spring-boot (as backend) with angular2 (as frontend).

**Deploy frontend**
```
cd gui
npm install
npm start
```
**Deploy backend**
```
cd service
mvn clean install spring-boot:run -Dserver.port=9000 -DskipTests
```
_Test calling backend method_
```
curl -v -H "Accept: application/json" -H "X-Requested-With: XMLHttpRequest" localhost:9000
```
