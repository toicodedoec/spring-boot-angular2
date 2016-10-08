package hackathon.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import hackathon.entity.User;

@Repository
public interface IDummyRepository extends CrudRepository<User, Long> {
}
