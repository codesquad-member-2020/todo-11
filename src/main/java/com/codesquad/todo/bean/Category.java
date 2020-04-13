package com.codesquad.todo.bean;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.Null;
import java.io.Serializable;

@Slf4j
@Data
public class Category implements Serializable {

  @Null
  @Id
  private Long id;
  private String name;
  private boolean deleted;

  public Category() {
  }

  public Category(String name) {
    this.name = name;
  }

  public Category(String name, boolean deleted) {
    this.name = name;
    this.deleted = deleted;
  }
}
