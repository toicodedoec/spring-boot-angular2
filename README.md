# spring-boot-angular2
Example of integrating spring-boot (as backend) with angular2 (as frontend).

# Structure

1. service: spring-boot project for back-end REST services
2. gui: angular2 project (typescript style) for front-end
3. ui: spring-boot project contains the angular2 libraries (javascript style) for front-end 

# Deploy

**Deploy backend**
```
cd service
mvn clean install spring-boot:run -Dserver.port=9000 -DskipTests
```
_Test calling backend method_
```
curl -v -H "Accept: application/json" -H "X-Requested-With: XMLHttpRequest" localhost:9000
```

**Deploy frontend**

_gui
```
cd gui
npm install
npm start
```
_ui
```
cd ui
mvn clean install spring-boot:run -DskipTests
```
- If you want to run from the JAR file:
```
cd ui
mvn package
java -jar target/*.jar
```
