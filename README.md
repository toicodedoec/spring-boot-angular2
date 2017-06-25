# spring-boot-angular2
Example of spring microservices.

# Technical stack

1. spring-boot
2. angular2
3. hibernate (as JPA implementation)
4. mysql
5. using ng2-completer (https://github.com/oferh/ng2-completer) for auto-complete-box
7. spring-cloud (Zuul)
8. angular-cli

# Structure

1. service: REST services
2. ui: spring-boot project contains the angular2 project (angular-cli)
3. api-gateway: gateway for services

# Deploy

**Deploy backend**
```
cd api-gateway
mvn clean install spring-boot:run
```
```
cd service
mvn clean install spring-boot:run
```
_Test calling backend method_
```
curl -v -H "Accept: application/json" -H "X-Requested-With: XMLHttpRequest" localhost:6060/home
```

_To deploy in a standalone Tomcat server_

- Edit pom.xml & ApplicationLauncher as https://github.com/doannx/spring-boot-angular2/commit/2c67e0e579763c6a665b1a4823d4d8ac2379d01e
- Run these commands
```
mvn package
cp target/service-1.0.0.war ~/Downloads/apache-tomcat-9.0.0.M10/webapps (copy war file to webapps folder)
sh startup.sh (start Tomcat server)
```
- Access to service at http://localhost:8080/service%2D1%2E0%2E0/home

_Deploy using POM profile_
- Run in dev mode (package as jar file)
```
mvn clean install [-P dev] -DskipTests spring-boot:run
```
- Run in release mode (package as war file)
```
mvn package -P release -DskipTests
```
**Deploy frontend**

_ui_
```
cd ui
mvn clean install spring-boot:run -DskipTests
```
- Authentication: user/hackathon
- If you want to run from the JAR file:
```
cd ui
mvn package
java -jar target/*.jar
```
