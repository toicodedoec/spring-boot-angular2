package hackathon.entity;

import hackathon.enums.Gender;
import hackathon.enums.Wish;
import hackathon.utils.HackathonContants;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

/**
 * Represents an User for this web application.
 */
@Entity
@Table(name = "T_USER")
public class User {
	private Long id;

	private String name;
	private String loginName;
	private String pass;
	private Long age;
	private Gender gender;
	private Long weight;
	private Long height;
	private Long fatPercent;
	private Wish wish;
	
	

	@Id
    @Column(name = "ID", nullable = false, precision = 18, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ID")
    @SequenceGenerator(name = "SEQ_ID", sequenceName = "SEQ_ID")
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "NAME", length = HackathonContants.STRING_MAX_LENGTH)
    @Length(max = HackathonContants.STRING_MAX_LENGTH)
	@NotNull
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "LOGINNAME", length = HackathonContants.STRING_MAX_LENGTH)
    @Length(max = HackathonContants.STRING_MAX_LENGTH)
	@NotNull
	public String getLoginName() {
		return loginName;
	}

	/**
	 * @param loginName the loginName to set
	 */
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	@Column(name = "PASS", length = HackathonContants.STRING_MAX_LENGTH)
    @Length(max = HackathonContants.STRING_MAX_LENGTH)
	@NotNull
	public String getPass() {
		return pass;
	}

	/**
	 * @param pass the pass to set
	 */
	public void setPass(String pass) {
		this.pass = pass;
	}

	@Column(name = "AGE")
	@NotNull
	public Long getAge() {
		return age;
	}

	/**
	 * @param age the age to set
	 */
	public void setAge(Long age) {
		this.age = age;
	}

	@Column(name = "GENDER")
    @Enumerated(EnumType.STRING)
	@NotNull
	public Gender getGender() {
		return gender;
	}

	/**
	 * @param gender the gender to set
	 */
	public void setGender(Gender gender) {
		this.gender = gender;
	}

	@Column(name = "WEIGHT")
	@NotNull
	public Long getWeight() {
		return weight;
	}

	/**
	 * @param weight the weight to set
	 */
	public void setWeight(Long weight) {
		this.weight = weight;
	}

	@Column(name = "HEIGHT")
	@NotNull
	public Long getHeight() {
		return height;
	}

	/**
	 * @param height the height to set
	 */
	public void setHeight(Long height) {
		this.height = height;
	}

	@Column(name = "FAT_PERCENT")
	@NotNull
	public Long getFatPercent() {
		return fatPercent;
	}

	/**
	 * @param fatPercent the fatPercent to set
	 */
	public void setFatPercent(Long fatPercent) {
		this.fatPercent = fatPercent;
	}

	@Column(name = "WISH")
    @Enumerated(EnumType.STRING)
	@NotNull
	public Wish getWish() {
		return wish;
	}

	/**
	 * @param wish the wish to set
	 */
	public void setWish(Wish wish) {
		this.wish = wish;
	}
}
