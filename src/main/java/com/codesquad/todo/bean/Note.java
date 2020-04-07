package com.codesquad.todo.bean;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Slf4j
@Data
public class Note {

  @Id
  private Long id;

  private String columnName;
  private String content;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
  private String writer;
  private boolean isDeleted;

  public void delete(){
    isDeleted = true;
  }
}
