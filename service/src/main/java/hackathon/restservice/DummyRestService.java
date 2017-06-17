package hackathon.restservice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hackathon.repository.IDummyRepository;

@RestController
@Transactional
public class DummyRestService {

    @Autowired
    IDummyRepository repository;

    @PersistenceContext
    private EntityManager em;

    @RequestMapping("/home")
    //@CrossOrigin(origins = "*", maxAge = 3600, allowedHeaders = { "x-auth-token", "x-requested-with" })
    public List<Map<String, Object>> home() {
        List<Map<String, Object>> lst = new ArrayList<Map<String, Object>>();
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("name", "apple");
        lst.add(model);
        model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("name", "computer");
        lst.add(model);
        model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("name", "laptop");
        lst.add(model);
        model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("name", "girlfriend");
        lst.add(model);
        model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("name", "wife");
        lst.add(model);
        model = new HashMap<String, Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("name", "american");
        lst.add(model);
        return lst;
    }
}
