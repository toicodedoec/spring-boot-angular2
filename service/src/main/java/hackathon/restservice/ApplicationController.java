package hackathon.restservice;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import hackathon.entity.User;
import hackathon.repository.IUserRepository;

@RestController
@Transactional
public class ApplicationController {

    @Autowired
    IUserRepository repository;

    @PersistenceContext
    private EntityManager em;

    @RequestMapping("/home")
    @CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with" })
    public Map<String, Object> home() {
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        Iterable<User> users = repository.findAll();
        System.out.println(users);
        model.put("content", "Hello World" + users);
        return model;
    }
}