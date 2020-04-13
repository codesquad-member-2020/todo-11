package com.codesquad.todo.dev;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.DevService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Validated
@Api(tags = "Dev")
@RequestMapping("/dev-api")
public class DevController {

  private final DevService devService;

  public DevController(DevService devService) {
    this.devService = devService;
  }

  @ApiOperation(value = "", notes = "Init data")
  @GetMapping("/init")
  public ApiResponse init() {
    devService.init();
    return new ApiResponse(SuccessMessages.SUCCESS, null);
  }

  @ApiOperation(value = "", notes = "Get all notes")
  @GetMapping("/note")
  public ApiResponse getAllNote() {
    return new ApiResponse(SuccessMessages.SUCCESS, devService.getAllNote());
  }

  @ApiOperation(value = "", notes = "Get all category")
  @GetMapping("/category")
  public ApiResponse getAllCategory() {
    return new ApiResponse(SuccessMessages.SUCCESS, devService.getAllCategory());
  }
}
