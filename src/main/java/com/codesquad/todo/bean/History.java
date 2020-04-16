package com.codesquad.todo.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.Null;
import java.io.Serializable;
import java.time.LocalDateTime;

@Slf4j
@Data
public class History implements Serializable {

  @Null
  @Id
  private Long id;
  private String user;
  private String method;
  private String uri;
  private String param;

  @Null
  @JsonProperty(access = JsonProperty.Access.READ_ONLY)
  private LocalDateTime createdAt;

  public History() {
  }

  public History(String user, String method, String uri, String param) {
    this.user = user;
    this.method = method;
    this.uri = uri;
    this.param = param;
  }
}
