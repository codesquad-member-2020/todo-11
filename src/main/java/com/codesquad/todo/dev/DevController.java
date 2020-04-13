package com.codesquad.todo.dev;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.ErrorMessages;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.DevService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @ApiOperation(value = "", notes = "Get all history")
  @GetMapping("/history")
  public ApiResponse getAllHistory() {
    return new ApiResponse(SuccessMessages.SUCCESS, devService.getAllHistory());
  }

  @ApiOperation(value = "", notes = "Verify JWT token")
  @GetMapping("/verifyToken")
  public ApiResponse verifyToken(@RequestParam String token) {
    return (devService.verifyToken(token))
           ? new ApiResponse(SuccessMessages.SUCCESS, null)
           : new ApiResponse(ErrorMessages.ERROR, null);
  }
}
