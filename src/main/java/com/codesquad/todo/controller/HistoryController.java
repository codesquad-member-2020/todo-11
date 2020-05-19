package com.codesquad.todo.controller;

import com.codesquad.todo.bean.ApiResponse;
import com.codesquad.todo.message.AuthMessages;
import com.codesquad.todo.message.SuccessMessages;
import com.codesquad.todo.service.HistoryService;
import com.codesquad.todo.util.TokenUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RestController
@Api(tags = "Prod")
@RequestMapping("/api/history")
public class HistoryController {

  @Autowired
  private HistoryService historyService;

  @ApiOperation(value = "", notes = "Get all category (only login user)")
  @GetMapping
  public ApiResponse getAllByUser(HttpServletRequest request) {
    String token = request.getHeader(AuthMessages.HEADER_AUTH);
    String userId = TokenUtil.getUserId(token);

    return new ApiResponse(SuccessMessages.SUCCESS, historyService.getAllByUser(userId));
  }
}
