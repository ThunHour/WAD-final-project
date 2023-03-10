
package com.example.springbootzuulgatwayproxy.filters;

import javax.servlet.http.HttpServletRequest;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

public class DeleteFilter extends ZuulFilter {

  @Override
  public String filterType() {
    return "delete";
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
    // ctx.addZuulRequestHeader("Authorization", request.getHeader("Authorization"));
    return null;
  }

}