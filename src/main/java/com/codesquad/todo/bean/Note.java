package com.codesquad.todo.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;
import org.springframework.util.ObjectUtils;

import javax.validation.constraints.AssertFalse;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;
import java.io.Serializable;
import java.time.LocalDateTime;

@Slf4j
@Data
public class Note implements Serializable {

  @Id
  @Null
  private Long id;

  @NotBlank
  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  private String columnName;

  @NotBlank
  private String content;

  @Null
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime createdAt;

  @Null
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime updatedAt;

  @NotBlank // login 구현 후 @Null 로 변경합니다
  private String userId;

  @AssertFalse
  @JsonIgnore
  private boolean deleted;

  public void delete() {
    deleted = true;
  }

  public void patch(Note note) {
    if (!ObjectUtils.isEmpty(note.columnName)) {
      columnName = note.columnName;
    }

    if (!ObjectUtils.isEmpty(note.content)) {
      content = note.content;
    }

    updatedAt = LocalDateTime.now();
  }
}
