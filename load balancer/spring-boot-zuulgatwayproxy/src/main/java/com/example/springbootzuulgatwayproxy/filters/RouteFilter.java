package com.example.springbootzuulgatwayproxy.filters;

import com.netflix.zuul.ZuulFilter;

import javax.servlet.http.HttpServletRequest;


import com.netflix.zuul.context.RequestContext;
public class RouteFilter extends ZuulFilter {

  @Override
  public String filterType() {
    return "route";
  }

  @Override
  public int filterOrder() {
    return 1;
  }

  @Override
  public boolean shouldFilter() {
    return true;
  }

  @Override
  public Object run() {
    RequestContext ctx = RequestContext.getCurrentContext();
    HttpServletRequest request = ctx.getRequest();
    ctx.addZuulRequestHeader("Authorization", request.getHeader("Authorization"));
    System.out.println(request);
    return null;
  }

}