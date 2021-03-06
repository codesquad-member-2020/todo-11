package com.codesquad.todo.config;

import com.codesquad.todo.interceptor.Interceptor;
import com.codesquad.todo.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

  @Autowired
  private HistoryService historyService;

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**");
  }

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("swagger-ui.html")
        .addResourceLocations("classpath:/META-INF/resources/");

    registry.addResourceHandler("/webjars/**")
        .addResourceLocations("classpath:/META-INF/resources/webjars/");
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(new Interceptor(historyService))
        .addPathPatterns("/api/**")
        .excludePathPatterns("/api/category")
        .excludePathPatterns("/api/notes/category")
        .excludePathPatterns("/api/history")
        .excludePathPatterns("/api/login");
  }
}
