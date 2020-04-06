package com.codesquad.todo.repository;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Slf4j
@Data
public class Note {

  @Id
  private Long id;

  private String COLUMN_NAME;
  private String CONTENTS;
  private LocalDateTime CREATED_AT;
  private LocalDateTime UPDATED_AT;
  private String WRITER;
}
