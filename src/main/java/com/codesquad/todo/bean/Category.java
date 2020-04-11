package com.codesquad.todo.bean;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

@Slf4j
@Data
public class Category implements Serializable {

  @Id
  private Long id;
  private String name;
  private boolean deleted;
}
