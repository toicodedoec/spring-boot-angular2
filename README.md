# spring-boot-angular2
Example of integrating spring-boot (as backend) with angular2 (as frontend).

**_TODO_**

1. Plug spring security
2. Plug db library: done

# Technical stack

1. spring-boot
2. angular2
3. hibernate (as JPA implementation)
4. mysql
5. using ng2-completer (https://github.com/oferh/ng2-completer) for auto-complete-box
6. package the service as war to deploy in standalone Tomcat server

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
curl -v -H "Accept: application/json" -H "X-Requested-With: XMLHttpRequest" localhost:9000/home
```

_To deploy in Tomcat

1. Edit pom.xml & ApplicationLauncher as https://github.com/doannx/spring-boot-angular2/commit/2c67e0e579763c6a665b1a4823d4d8ac2379d01e
2. Run these commands
```
mvn package
cp target/service-1.0.0.war ~/Downloads/apache-tomcat-9.0.0.M10/webapps (copy war file to webapps folder)
sh startup.sh (start Tomcat server)
```
3. Access to service at http://localhost:8080/service%2D1%2E0%2E0/home

**Deploy frontend**

_gui_
```
cd gui
npm install
npm start
```
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
