package com.codesquad.todo.bean;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.AssertFalse;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import java.time.LocalDateTime;

@Slf4j
@Data
public class Note {

  @Id
  @Null
  private Long id;

  @NotBlank
  private String columnName;
  @NotBlank
  private String content;
  @Null
  private LocalDateTime createdAt;
  @Null
  private LocalDateTime updatedAt;

  @NotBlank // login 구현 후 @Null 로 변경합니다
  private String writer;
  @AssertFalse
  private boolean deleted;

  public void delete() {
    deleted = true;
  }
}
