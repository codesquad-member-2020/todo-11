package com.codesquad.todo.bean;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.Null;
import java.io.Serializable;

@Slf4j
@Data
public class History implements Serializable {

  @Null
  @Id
  private Long id;
  private String user;
  private String content;
}
