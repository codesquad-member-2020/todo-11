package com.codesquad.todo.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;
import org.springframework.util.ObjectUtils;

import javax.validation.constraints.AssertFalse;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import java.io.Serializable;
import java.time.LocalDateTime;

@Slf4j
@Data
public class Note implements Serializable {

  @Id
  @Null
  private Long id;

  @NotNull
  @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
  private Long categoryId;

  @NotBlank
  private String content;

  @Null
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime createdAt;

  @Null
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime updatedAt;

  @NotBlank // login 구현 후 @Null 로 변경합니다
  private String user;

  @AssertFalse
  private boolean deleted;

  private Long rank;

  public Note() {
  }

  public Note(@NotNull Long categoryId, @NotBlank String content,
              @NotBlank String user)
  {
    this.categoryId = categoryId;
    this.content = content;
    this.user = user;
  }

  public void delete() {
    deleted = true;
  }

  public void patch(Note note) {
    if (!ObjectUtils.isEmpty(note.categoryId)) {
      categoryId = note.categoryId;
    }

    if (!ObjectUtils.isEmpty(note.content)) {
      content = note.content;
    }

    if (!ObjectUtils.isEmpty(note.rank)) {
      rank = note.rank;
    }

    updatedAt = LocalDateTime.now();
  }
}
