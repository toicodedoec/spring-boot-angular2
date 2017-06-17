package hackathon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class ApplicationLauncher extends SpringBootServletInitializer {

    @Bean
    HeaderHttpSessionStrategy sessionStrategy() {
        return new HeaderHttpSessionStrategy();
    }

//    protected void configure(HttpSecurity http) throws Exception {
//        http.cors().and().authorizeRequests().anyRequest().permitAll();
//    }

    public static void main(String[] args) {
        SpringApplication.run(applicationClass, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(applicationClass);
    }

    private static Class<ApplicationLauncher> applicationClass = ApplicationLauncher.class;
}
