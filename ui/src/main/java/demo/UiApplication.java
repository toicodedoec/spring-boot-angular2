package demo;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import javax.servlet.http.HttpSession;

@SpringBootApplication
@RestController
public class UiApplication {

	@RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }


	@RequestMapping("/token")
	@ResponseBody
	public Map<String,String> token(HttpSession session) {
		return Collections.singletonMap("token", session.getId());
	}

	public static void main(String[] args) {
		SpringApplication.run(UiApplication.class, args);
	}
}
